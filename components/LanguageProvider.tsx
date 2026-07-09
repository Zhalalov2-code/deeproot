"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { localizedSiteContent, type Language, type SiteContent } from "@/src/data/siteContent";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  content: SiteContent;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("de");

  useEffect(() => {
    const stored = window.localStorage.getItem("deeproot-language");
    if (stored === "de" || stored === "en") {
      setLanguageState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  useEffect(() => {
    const currentContent = localizedSiteContent[language];
    document.documentElement.lang = language;
    document.title = currentContent.meta.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (description) {
      description.content = currentContent.meta.description;
    }
  }, [language]);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("deeproot-language", nextLanguage);
    document.documentElement.lang = nextLanguage;
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      content: localizedSiteContent[language]
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}

export function useSiteContent() {
  return useLanguage().content;
}
