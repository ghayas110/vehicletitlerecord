import Image from "next/image";
import Link from "next/link";

export default function BannerPage({ title }) {
  return (
    <div className="relative h-[50vh] md:h-[60vh] w-full flex items-center justify-center text-white text-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image 
          src="/images/bannerimg.jpg" // Replace with actual image path
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
          {title}
        </h1>

        {/* Buttons */}
   
      </div>
    </div>
  );
}
