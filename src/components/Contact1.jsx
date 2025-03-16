import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../app/providers/LanguageProvider";
import en from "../../public/locales/en/common.json";
import fr from "../../public/locales/fr/common.json";
const Contact1 = () => {
   const { locale } = useLanguage();
    const t = locale === "fr" ? fr.contact : en.contact; // Select language based on the current locale
  return (
    <div className="bg-white py-16 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row gap-12">
        
        {/* Left Side - Contact Form */}
        <div className="w-full md:w-1/2 bg-gray-100 p-10 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900">{t.title}</h2>
          
          <form className="mt-6 space-y-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-gray-700 font-semibold">{t.name}</label>
                <input
                  type="text"
                  placeholder={t.name}
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 font-semibold">{t.phone}</label>
                <input
                  type="text"
                  placeholder={t.phone}
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">{t.email}</label>
              <input
                type="email"
                placeholder={t.email}
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">{t.subject}</label>
              <input
                type="text"
                placeholder={t.subject}
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">{t.message}</label>
              <textarea
                placeholder={t.message}
                rows="4"
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg bg-gray-50"
              ></textarea>
            </div>

            {/* Send Message Button */}
            <button className="w-full bg-red-500 hover:bg-red-600 text-white p-3 font-semibold rounded-lg flex items-center justify-center gap-2">
              <FaEnvelope /> {t.sendMessage}
            </button>
          </form>
        </div>

        {/* Right Side - Google Map */}
        <div className="w-full md:w-1/2">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.0811852715737!2d-84.539324!3d32.0614069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888e9267f7e2b31f%3A0x65a88a6c67f63d49!2sOak%20Ln%2C%20Preston%2C%20GA%2031824%2C%20USA!5e0!3m2!1sen!2s!4v1647212037938!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact1;
