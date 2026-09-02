import type { DictionaryKey } from "@/lib/i18n/dictionary";

export type Language = "es" | "en";

export interface Project {
  titleKey: DictionaryKey;
  descriptionKey: DictionaryKey;
  highlightKey: DictionaryKey;
  ctaKey: DictionaryKey;
  stack: string[];
  repoUrl: string;
  mediaPath: string;
}
