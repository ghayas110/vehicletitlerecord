"use client";
import { BannerPage, Packages } from '@/components'
import React from 'react'
import { useLanguage } from "../../app/providers/LanguageProvider";
import en from "../../../public/locales/en/common.json";
import fr from "../../../public/locales/fr/common.json";
const Pricing = () => {
    const { locale } = useLanguage();
           const t = locale === "fr" ? fr : en;
  return (
    <div>
      <BannerPage title={t.VIN_Pricing} />
      <Packages/>
    </div>
  )
}

export default Pricing
