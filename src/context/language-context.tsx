"use client";

import { createContext, useContext, useSyncExternalStore, useCallback, useRef } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const STORAGE_KEY = "preferredLanguage";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  /* ── Read initial value from localStorage (SSR-safe) ── */
  const storeRef = useRef<Language | null>(null);

  const subscribe = useCallback((onStoreChange: () => void) => {
    const handler = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) onStoreChange();
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  const getSnapshot = useCallback((): Language => {
    if (storeRef.current) return storeRef.current;
    const saved = localStorage.getItem(STORAGE_KEY);
    const lang = saved === "en" || saved === "es" ? saved : "es";
    storeRef.current = lang;
    return lang;
  }, []);

  const getServerSnapshot = useCallback((): Language => "es", []);

  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLanguage = useCallback((lang: Language) => {
    storeRef.current = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    window.dispatchEvent(new StorageEvent("storage", { key: STORAGE_KEY }));
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a <LanguageProvider>");
  }
  return context;
}
