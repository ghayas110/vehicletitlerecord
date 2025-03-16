"use client";
import { BannerPage } from '@/components'
import Contact1 from '@/components/Contact1'
import ContactCards from '@/components/ContactCard'
import React from 'react'
import { useLanguage } from "../../app/providers/LanguageProvider";
import en from "../../../public/locales/en/common.json";
import fr from "../../../public/locales/fr/common.json";
const Contact = () => {
     const { locale } = useLanguage();
               const t = locale === "fr" ? fr : en;
  return (
    <div>
      <BannerPage title="Contact Us"/>
      <Contact1 />
      <ContactCards/>
    </div>
  )
}

export default Contact
