"use client";
import Image from "next/image";

const sources = [
  { src: "/images/kbb.png", alt: "Kelley Blue Book" },
  { src: "/images/every.png", alt: "EveryCarListed" },
  { src: "/images/blackbox.png", alt: "Black Book" },
  { src: "/images/nvs.png", alt: "Kelley Blue Book" },
];

export default function Sources() {
  return (
    <div className="bg-gray-100 py-10 text-center px-6">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
        TRUSTED DATA SOURCES FOR ALL VEHICLE TYPES
      </h2>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
        Vehicle Title Record furnishes information sourced from industry-leading
        data providers and authoritative experts, ensuring reliability and trustworthiness.
      </p>

      {/* Moving Logos Section */}
      <div className="overflow-hidden mt-10">
        <div className="flex items-center space-x-10 md:space-x-16 animate-scroll w-max">
          {[...sources, ...sources].map((logo, index) => (
            <div key={index} className="flex justify-center">
              <Image 
                src={logo.src} 
                alt={logo.alt} 
                width={100} 
                height={100} 
                className="w-24 md:w-32 lg:w-40 h-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Keyframe Animation */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
