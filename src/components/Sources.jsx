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
    <div className="bg-gray-100 py-16 text-center p-30">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        TRUSTED DATA SOURCES FOR ALL VEHICLE TYPES
      </h2>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Vehicle Title Record furnishes information sourced from industry-leading
        data providers and authoritative experts, ensuring reliability and
        trustworthiness.
      </p>

      {/* Moving Logos Section */}
      <div className="overflow-hidden mt-10 ">
        <div className="whitespace-nowrap flex space-x-16 animate-scroll  ">
          {[...sources].map((logo, index) => (
            <div key={index} className="flex justify-center ">
              <Image src={logo.src} alt={logo.alt} width={150} height={180} className="h-20 w-auto " />
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Keyframe Animation */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
