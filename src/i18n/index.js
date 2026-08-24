import en from "./en";
import ar from "./ar";

const translations = { en, ar };

export function getTranslations(locale) {
  return translations[locale] || translations.en;
}

export const locales = ["en", "ar"];
export const defaultLocale = "en";
