"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../app/providers/LanguageProvider";
import en from "../../public/locales/en/common.json";
import fr from "../../public/locales/fr/common.json";

export default function Banner() {
  const { locale } = useLanguage();
  const t = locale === "fr" ? fr : en; // Select language based on the current locale

  return (
    <div className="relative h-[50vh] md:h-[60vh] w-full flex items-center justify-center text-white text-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image 
          src="/images/bannerimg.jpg" // Ensure the image path is correct
          alt="Background"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40"></div> {/* Dark overlay */}
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold uppercase">
          {t.title} {/* Dynamically change title */}
        </h1>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#"
            className="bg-black text-white px-5 py-2 md:px-6 md:py-3 text-lg font-semibold rounded-lg hover:bg-gray-800 transition"
          >
            {t.get_vin_report}
          </Link>
          <Link
            href="#"
            className="bg-black text-white px-5 py-2 md:px-6 md:py-3 text-lg font-semibold rounded-lg hover:bg-gray-800 transition"
          >
            {t.get_vrm_report}
          </Link>
        </div>
      </div>
    </div>
  );
}
