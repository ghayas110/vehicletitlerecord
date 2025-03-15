import React from "react";
import Image from "next/image";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left Section - Company Info */}
          <div className="w-full md:w-1/3">
            <Image
              src="/images/logo.png" // Replace with actual logo image path
              alt="Vehicle Title Record"
              width={200}
              height={60}
            />
            <p className="mt-4 text-gray-400">4323 Oak Lane, Preston, Georgia 31824</p>
            <div className="flex items-center mt-2 text-gray-400">
              <FaEnvelope className="text-red-500 mr-2" />
              <span>support@vehicletitlerecord.com</span>
            </div>
            <div className="flex items-center mt-2 text-gray-400">
              <FaPhone className="text-red-500 mr-2" />
              <span>(404) 900-0746</span>
            </div>
          </div>

          {/* Middle Section - Services */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="h-1 w-10 bg-red-500 mt-2"></div>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">FAQ's</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Right Section - Policies */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold">Policies</h3>
            <div className="h-1 w-10 bg-red-500 mt-2"></div>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms And Conditions</li>
              <li className="hover:text-white cursor-pointer">Refund Policy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
        Copyright © 2024 Vehicle Title Record
      </div>
    </footer>
  );
};

export default Footer;
