"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "@/app/providers/LanguageProvider";
import en from "../../public/locales/en/common.json";
import fr from "../../public/locales/fr/common.json";
const Solution = () => {
     const { locale } = useLanguage();
       const t = locale === "fr" ? fr : en;
  return (
    <div className="bg-white py-16 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side - Image with Badge */}
        <div className="relative w-full md:w-1/2">
          <Image
            src="/images/cardeal.jpg" // Replace with actual image path
            alt="Data-Driven Automotive Solutions"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          {/* Experience Badge */}
          <div className="absolute bottom-4 left-4 bg-white shadow-lg rounded-lg p-4 md:p-6">
            <span className="text-4xl md:text-5xl font-bold text-red-600">5+</span>
            <p className="text-gray-700 font-semibold text-sm">YEARS EXPERIENCE</p>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
           {t.solTitle}
          </h2>
          <p className="text-gray-600 mt-4">
           {t.soldes}
          </p>
 
        
        </div>
      </div>
    </div>
  );
};

export default Solution;
