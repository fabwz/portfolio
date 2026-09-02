"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react";
import type { ReactNode } from "react";
import type { Language } from "@/types";
import { dictionary } from "./dictionary";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LANGUAGE_STORAGE_KEY = "portfolio-language";
const DEFAULT_LANGUAGE: Language = "es";

const listeners = new Set<() => void>();

function isLanguage(value: string | null): value is Language {
  return value === "es" || value === "en";
}

function subscribe(callback: () => void): () => void {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot(): Language {
  const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return isLanguage(stored) ? stored : DEFAULT_LANGUAGE;
}

function getServerSnapshot(): Language {
  return DEFAULT_LANGUAGE;
}

function persistLanguage(next: Language): void {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, next);
  listeners.forEach((listener) => listener());
}

function getHtmlLang(language: Language): string {
  return language === "es" ? "es-CR" : "en";
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    document.documentElement.lang = getHtmlLang(language);
  }, [language]);

  useEffect(() => {
    document.title = dictionary["meta.title"][language];
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: persistLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
