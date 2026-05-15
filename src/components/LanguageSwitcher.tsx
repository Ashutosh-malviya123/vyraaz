import { useEffect, useState } from "react";
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

function setLangCookie(lang: string) {
  const value = lang === "en" ? "/auto/en" : `/auto/${lang}`;
  // root path
  document.cookie = `googtrans=${value};path=/`;
  // also for parent host (in case of subdomain)
  const host = window.location.hostname;
  const parts = host.split(".");
  if (parts.length > 1) {
    const domain = "." + parts.slice(-2).join(".");
    document.cookie = `googtrans=${value};path=/;domain=${domain}`;
    document.cookie = `googtrans=${value};path=/;domain=${host}`;
  }
}

function getCurrentLang(): string {
  if (typeof document === "undefined") return "en";
  const m = document.cookie.match(/googtrans=\/auto\/(\w+)/);
  return m ? m[1] : "en";
}

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("en");

  useEffect(() => {
    setCurrent(getCurrentLang());
    if (document.getElementById("google-translate-script")) return;

    window.googleTranslateElementInit = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      new (window.google as any).translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: LANGUAGES.map((l) => l.code).join(","),
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    const s = document.createElement("script");
    s.id = "google-translate-script";
    s.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  const select = (code: string) => {
    setLangCookie(code);
    setCurrent(code);
    setOpen(false);
    window.location.reload();
  };

  const currentLabel = LANGUAGES.find((l) => l.code === current)?.label ?? "English";

  return (
    <>
      <div id="google_translate_element" style={{ display: "none" }} />
      <style>{`
        .goog-te-banner-frame, .skiptranslate { display: none !important; }
        body { top: 0 !important; }
        .goog-tooltip, .goog-tooltip:hover { display: none !important; }
        .goog-text-highlight { background: transparent !important; box-shadow: none !important; }
      `}</style>

      <div className="relative">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Change language"
          className="flex items-center gap-2 h-10 px-3 rounded-lg border border-border bg-card hover:bg-muted transition text-sm font-medium text-foreground notranslate"
        >
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline">{currentLabel}</span>
        </button>
        {open && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            <div className="absolute right-0 mt-2 w-44 rounded-lg border border-border bg-card shadow-xl z-50 overflow-hidden notranslate">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => select(l.code)}
                  className={`w-full text-left px-3 py-2 text-sm hover:bg-muted transition ${
                    current === l.code ? "bg-muted text-fire font-semibold" : "text-foreground"
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
