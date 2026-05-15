export const STORAGE_KEY = "vyraaz-language";
export const LANGUAGE_EVENT = "vyraaz-language-change";

export const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "mr", label: "मराठी" },
  { code: "ta", label: "தமிழ்" },
  { code: "kn", label: "ಕನ್ನಡ" },
  { code: "te", label: "తెలుగు" },
  { code: "gu", label: "ગુજરાતી" },
  { code: "bn", label: "বাংলা" },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]["code"];

export function isLanguageCode(value: string | null): value is LanguageCode {
  return LANGUAGES.some((language) => language.code === value);
}

export function getStoredLanguage(): LanguageCode {
  if (typeof window === "undefined") {
    return "en";
  }

  const saved = window.localStorage.getItem(STORAGE_KEY);
  return isLanguageCode(saved) ? saved : "en";
}

export function setStoredLanguage(code: LanguageCode) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, code);
  document.documentElement.lang = code;
  window.dispatchEvent(new CustomEvent(LANGUAGE_EVENT, { detail: code }));
}