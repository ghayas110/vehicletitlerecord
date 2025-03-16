"use client";
import React from "react";
import { useLanguage } from "@/app/providers/LanguageProvider";
import en from "../../public/locales/en/common.json";
import fr from "../../public/locales/fr/common.json";


const Packages = () => {
    const { locale } = useLanguage();
           const t = locale === "fr" ? fr : en;
  return (
    <div className="bg-white py-16 px-4 sm:px-6 md:px-12">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          {t.Choose_Your_sPackage}
        </h2>

        {/* Packages Grid - Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.packages.map((pkg, index) => (
            <div
              key={index}
              className={`w-full p-6 sm:p-8 rounded-lg shadow-lg flex flex-col justify-between ${pkg.bgColor}`}
            >
              {/* Package Title */}
              <h3 className={`text-2xl font-bold uppercase text-center ${pkg.textColor}`}>
                {pkg.title}
              </h3>

              {/* Price */}
              <p className={`text-4xl font-extrabold mt-2 text-center ${pkg.textColor}`}>
                ${pkg.price}
                <span className="text-lg font-medium"> / PER REPORT</span>
              </p>

              {/* Features List - Scrollable for Mobile */}
              <div className="mt-4">
                <ul className={`text-sm sm:text-lg space-y-2 max-h-48 overflow-y-auto px-2 ${pkg.textColor === "text-white" ? "text-white" : "text-gray-700"}`}>
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>

              {/* Get a Quote Button */}
              <div className="mt-6 flex justify-center">
                <button
                  className={`w-full sm:w-auto px-6 py-3 text-lg font-semibold rounded-lg transition ${
                    pkg.bgColor === "bg-red-600"
                      ? "bg-white text-red-600 hover:bg-gray-200"
                      : "bg-red-600 text-white hover:bg-red-700"
                  }`}
                >
                  Get a Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
