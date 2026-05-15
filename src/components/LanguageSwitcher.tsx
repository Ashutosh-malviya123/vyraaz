import { Globe } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  LANGUAGES,
  LANGUAGE_EVENT,
  getStoredLanguage,
  setStoredLanguage,
} from "@/lib/language";

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("en");

  const currentLabel = useMemo(
    () => LANGUAGES.find((language) => language.code === current)?.label ?? "English",
    [current]
  );

  useEffect(() => {
    const saved = getStoredLanguage();
    setCurrent(saved);
    document.documentElement.lang = saved;

    const syncLanguage = (event: Event) => {
      const code = (event as CustomEvent<string>).detail;
      if (code) {
        setCurrent(code);
      }
    };

    window.addEventListener(LANGUAGE_EVENT, syncLanguage);
    return () => window.removeEventListener(LANGUAGE_EVENT, syncLanguage);
  }, []);

  const selectLanguage = (code: string) => {
    setCurrent(code);
    setOpen(false);
    setStoredLanguage(code as (typeof LANGUAGES)[number]["code"]);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((value) => !value)}
        aria-label="Change language"
        className="flex items-center gap-2 h-10 px-3 rounded-lg border border-border bg-card hover:bg-muted transition text-sm font-medium text-foreground"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLabel}</span>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 mt-2 w-44 rounded-lg border border-border bg-card shadow-xl z-50 overflow-hidden">
            {LANGUAGES.map((language) => (
              <button
                key={language.code}
                onClick={() => selectLanguage(language.code)}
                className={`w-full text-left px-3 py-2 text-sm hover:bg-muted transition ${
                  current === language.code
                    ? "bg-muted text-fire font-semibold"
                    : "text-foreground"
                }`}
              >
                {language.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}