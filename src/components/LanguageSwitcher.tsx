import { useEffect, useMemo, useRef, useState } from "react";
import { Globe } from "lucide-react";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "mr", label: "मराठी" },
  { code: "ta", label: "தமிழ்" },
  { code: "kn", label: "ಕನ್ನಡ" },
  { code: "te", label: "తెలుగు" },
  { code: "gu", label: "ગુજરાતી" },
  { code: "bn", label: "বাংলা" },
];

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("en");
  const [isReady, setIsReady] = useState(false);
  const initialized = useRef(false);

  const languageMap = useMemo(
    () => Object.fromEntries(LANGUAGES.map((language) => [language.code, language.label])),
    []
  );

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    window.googleTranslateElementInit = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      new (window.google as any).translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: LANGUAGES.map((l) => l.code).join(","),
          autoDisplay: false,
          layout: (window.google as any).translate.TranslateElement.InlineLayout
            .SIMPLE,
        },
        "google_translate_element"
      );

      const waitForSelect = (attempt = 0) => {
        const select = document.querySelector<HTMLSelectElement>("select.goog-te-combo");
        if (select) {
          setIsReady(true);
          return;
        }
        if (attempt < 40) {
          window.setTimeout(() => waitForSelect(attempt + 1), 200);
        }
      };

      waitForSelect();
    };

    if (!document.getElementById("google-translate-script")) {
      const s = document.createElement("script");
      s.id = "google-translate-script";
      s.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const activeBanner = document.querySelector("iframe.goog-te-banner-frame");
      const translatedText = document.querySelector("font font");
      if (activeBanner || translatedText) {
        const combo = document.querySelector<HTMLSelectElement>("select.goog-te-combo");
        const nextCode = combo?.value || current;
        if (languageMap[nextCode]) {
          setCurrent(nextCode);
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
    });

    return () => observer.disconnect();
  }, [current, languageMap]);

  const triggerTranslate = (code: string) => {
    const tryFire = (attempt = 0) => {
      const select = document.querySelector<HTMLSelectElement>(
        "select.goog-te-combo"
      );
      if (select) {
        select.value = code;
        select.dispatchEvent(new Event("change", { bubbles: true }));
        return;
      }
      if (attempt < 40) setTimeout(() => tryFire(attempt + 1), 200);
    };
    tryFire();
  };

  const select = (code: string) => {
    setOpen(false);
    setCurrent(code);
    triggerTranslate(code);
  };

  const currentLabel =
    LANGUAGES.find((l) => l.code === current)?.label ?? "English";

  return (
    <>
      <div
        id="google_translate_element"
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] top-0 opacity-0"
      />
      <style>{`
        .goog-te-banner-frame, .skiptranslate iframe { display: none !important; }
        body { top: 0 !important; position: static !important; }
        .goog-tooltip, .goog-tooltip:hover { display: none !important; }
        .goog-text-highlight { background: transparent !important; box-shadow: none !important; }
        #google_translate_element { position: absolute !important; left: -9999px !important; top: 0 !important; opacity: 0 !important; pointer-events: none !important; }
      `}</style>

      <div className="relative">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Change language"
          className="flex items-center gap-2 h-10 px-3 rounded-lg border border-border bg-card hover:bg-muted transition text-sm font-medium text-foreground notranslate disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={!isReady}
        >
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline">{currentLabel}</span>
        </button>
        {open && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setOpen(false)}
            />
            <div className="absolute right-0 mt-2 w-44 rounded-lg border border-border bg-card shadow-xl z-50 overflow-hidden notranslate">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => select(l.code)}
                  className={`w-full text-left px-3 py-2 text-sm hover:bg-muted transition ${
                    current === l.code
                      ? "bg-muted text-fire font-semibold"
                      : "text-foreground"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
