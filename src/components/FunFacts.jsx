"use client";


import { useLanguage } from "../app/providers/LanguageProvider";
import en from "../../public/locales/en/common.json";
import fr from "../../public/locales/fr/common.json";
export default function FunFacts() {
    const { locale } = useLanguage();
    const t = locale === "fr" ? fr : en; // Select language based on the current locale
  
  return (
    <div className="relative w-full flex justify-center items-center py-12">
      {/* Fun Fact Box */}
      <div className="bg-gray-100 w-[90%] max-w-5xl rounded-lg shadow-lg px-6 py-10 md:py-12 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          {t.description}
        </h2>
      </div>
    </div>
  );
}
