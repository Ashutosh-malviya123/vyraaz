import { useEffect, useRef, useState } from "react";
import {
  LANGUAGE_EVENT,
  getStoredLanguage,
  type LanguageCode,
} from "@/lib/language";

const EXCLUDED_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "IFRAME", "SVG", "PATH"]);
const TRANSLATABLE_ATTRIBUTES = ["placeholder", "title", "aria-label"] as const;
const SKIP_TEXT = new Set([
  "Vyraaz",
  "Firetech",
  "Vyraaz Firetech",
  "8103 497 409",
  "+91 81034 97409",
  "+91 8103 497 409",
  "vyraazfiretech@gmail.com",
  "info@vyraazfiretech.com",
]);

const textOriginals = new WeakMap<Text, string>();
const attributeOriginals = new WeakMap<Element, Map<string, string>>();
const translationCache = new Map<string, string>();

function isExcludedElement(element: Element | null) {
  return !!element?.closest("[data-no-auto-translate]") || !!(element && EXCLUDED_TAGS.has(element.tagName));
}

function shouldTranslateText(text: string) {
  const normalized = text.replace(/\s+/g, " ").trim();

  if (!normalized || SKIP_TEXT.has(normalized)) {
    return false;
  }

  if (/^[0-9+()\-–—•/|:.,\s]+$/.test(normalized)) {
    return false;
  }

  return /[A-Za-z]/.test(normalized);
}

async function translateText(text: string, language: LanguageCode) {
  if (language === "en" || !shouldTranslateText(text)) {
    return text;
  }

  const key = `${language}:${text}`;
  const cached = translationCache.get(key);
  if (cached) {
    return cached;
  }

  try {
    const params = new URLSearchParams({
      client: "gtx",
      sl: "en",
      tl: language,
      dt: "t",
      q: text,
    });

    const response = await fetch(`https://translate.googleapis.com/translate_a/single?${params.toString()}`);
    if (!response.ok) {
      return text;
    }

    const data = (await response.json()) as unknown[];
    const translated = Array.isArray(data?.[0])
      ? (data[0] as Array<[string]>).map((part) => part?.[0] ?? "").join("")
      : text;

    translationCache.set(key, translated || text);
    return translated || text;
  } catch {
    return text;
  }
}

export default function SiteTranslator() {
  const [language, setLanguage] = useState<LanguageCode>("en");
  const applyingRef = useRef(false);
  const debounceRef = useRef<number | null>(null);

  useEffect(() => {
    setLanguage(getStoredLanguage());

    const syncLanguage = (event: Event) => {
      const code = (event as CustomEvent<LanguageCode>).detail;
      if (code) {
        setLanguage(code);
      }
    };

    window.addEventListener(LANGUAGE_EVENT, syncLanguage);
    return () => window.removeEventListener(LANGUAGE_EVENT, syncLanguage);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const applyTranslations = async () => {
      if (!document.body) {
        return;
      }

      applyingRef.current = true;

      const textNodes: Text[] = [];
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          const textNode = node as Text;
          const parent = textNode.parentElement;

          if (!parent || isExcludedElement(parent)) {
            return NodeFilter.FILTER_REJECT;
          }

          if (!shouldTranslateText(textNode.textContent ?? "")) {
            return NodeFilter.FILTER_REJECT;
          }

          return NodeFilter.FILTER_ACCEPT;
        },
      });

      while (walker.nextNode()) {
        textNodes.push(walker.currentNode as Text);
      }

      await Promise.all(
        textNodes.map(async (node) => {
          const original = textOriginals.get(node) ?? (node.textContent ?? "");
          textOriginals.set(node, original);

          const translated = language === "en"
            ? original
            : await translateText(original, language);

          if (node.textContent !== translated) {
            node.textContent = translated;
          }
        })
      );

      const elements = Array.from(document.body.querySelectorAll<HTMLElement>("*"));
      await Promise.all(
        elements.map(async (element) => {
          if (isExcludedElement(element)) {
            return;
          }

          const originals = attributeOriginals.get(element) ?? new Map<string, string>();
          attributeOriginals.set(element, originals);

          await Promise.all(
            TRANSLATABLE_ATTRIBUTES.map(async (attribute) => {
              const value = element.getAttribute(attribute);

              if (!value || !shouldTranslateText(value)) {
                return;
              }

              const original = originals.get(attribute) ?? value;
              originals.set(attribute, original);

              const translated = language === "en"
                ? original
                : await translateText(original, language);

              if (element.getAttribute(attribute) !== translated) {
                element.setAttribute(attribute, translated);
              }
            })
          );
        })
      );

      applyingRef.current = false;
    };

    const observer = new MutationObserver(() => {
      if (applyingRef.current) {
        return;
      }

      if (debounceRef.current) {
        window.clearTimeout(debounceRef.current);
      }

      debounceRef.current = window.setTimeout(() => {
        void applyTranslations();
      }, 120);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: [...TRANSLATABLE_ATTRIBUTES],
    });

    void applyTranslations();

    return () => {
      observer.disconnect();
      if (debounceRef.current) {
        window.clearTimeout(debounceRef.current);
      }
    };
  }, [language]);

  return null;
}