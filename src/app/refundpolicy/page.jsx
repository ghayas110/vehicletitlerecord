"use client";
import { BannerPage } from '@/components'
import React from 'react'


import { useLanguage } from "../../app/providers/LanguageProvider";
import en from "../../../public/locales/en/common.json";
import fr from "../../../public/locales/fr/common.json";
const RefundPolicy = () => {
     const { locale } = useLanguage();
               const t = locale === "fr" ? fr : en;
  return (
    <div>
    <BannerPage title={t.refund_title} />

    <div className="bg-white py-16 px-6 md:px-12">
      <div className="container mx-auto max-w-5xl text-gray-800">
        {Object.entries(t.refund_sections, { returnObjects: true }).map(([key, section]) => (
          <div key={key} className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
            {Array.isArray(section.content) ? (
              section.content.map((paragraph, index) => <p key={index} className="mt-4">{paragraph}</p>)
            ) : (
              <p className="mt-4">{section.content.replace("{email}", <a href="mailto:support@vehicletitlerecord.com" className="text-red-600 font-semibold">support@vehicletitlerecord.com</a>)}</p>
            )}
            {section.points && (
              <ul className="mt-4 list-disc pl-6 space-y-2">
                {section.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default RefundPolicy;
