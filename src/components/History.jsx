"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "@/app/providers/LanguageProvider";
import en from "../../public/locales/en/common.json";
import fr from "../../public/locales/fr/common.json";

// icon: <FaCarSide size={30} className="text-white" />,
// icon: <FaCarCrash size={30} className="text-white" />,
// icon: <FaBolt size={30} className="text-white" />,
const History = () => {
   const { locale } = useLanguage();
     const t = locale === "fr" ? fr : en;
  return (
    <div className="bg-white py-16 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side - Content */}
        <div className="w-full md:w-1/2">
          <p className="text-red-600 font-bold uppercase text-sm">
            {t.hissub}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            {t.hisTitle}
          </h2>
          <p className="text-gray-600 mt-4">
            {t.hisp1}
          </p>
          <p className="text-gray-600 mt-4">
            {t.hisp2}
          </p>
          <p className="text-gray-600 mt-4">
            {t.hisp3}
          </p>
          <p className="text-gray-600 mt-4">
            {t.hisp4}
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/red-car.jpg" // Replace with actual image path
            alt="Red Car"
            width={600}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default History;
