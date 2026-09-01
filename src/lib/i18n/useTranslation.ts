import { dictionary, type DictionaryKey } from "./dictionary";
import { useLanguage } from "./LanguageContext";

export function useTranslation() {
  const { language } = useLanguage();

  function t(key: DictionaryKey): string {
    const entry = dictionary[key];
    if (!entry) {
      console.warn(`[i18n] Missing dictionary key: "${key}"`);
      return key;
    }
    return entry[language] ?? entry.es;
  }

  return { t, language };
}
