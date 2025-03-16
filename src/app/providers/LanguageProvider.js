"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState("en"); // Default: English
  const router = useRouter();

  const changeLanguage = (newLocale) => {
    setLocale(newLocale);
    router.refresh(); // Refresh page to load new language
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
