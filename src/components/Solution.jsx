import React from "react";
import Image from "next/image";

const Solution = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side - Image with Badge */}
        <div className="relative w-full md:w-1/2">
          <Image
            src="/images/cardeal.jpg" // Replace with actual image path
            alt="Data-Driven Automotive Solutions"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          {/* Experience Badge */}
          <div className="absolute bottom-4 left-4 bg-white shadow-lg rounded-lg p-4 md:p-6">
            <span className="text-4xl md:text-5xl font-bold text-red-600">5+</span>
            <p className="text-gray-700 font-semibold text-sm">YEARS EXPERIENCE</p>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            DATA-DRIVEN AUTOMOTIVE SOLUTIONS
          </h2>
          <p className="text-gray-600 mt-4">
            Vehicle Title Record aggregates information from a multitude of reputable
            automobile sources, delivering comprehensive solutions supported by robust
            data. Our suite of tools is tailored to provide car buyers and businesses
            with all-encompassing details about a vehicle and its complete history in
            a single report.
          </p>
          <p className="text-gray-600 mt-4">
            Our data-driven auto solutions are unparalleled, catering to car dealerships,
            motor vehicle owners, vehicle buyers, car insurance companies, and hobbyists.
            Gain quick and easy insights into major accidents, car market trends, open
            recalls, warranty details, previous owners, airbag deployments, the complete
            history of the vehicle, and much more!
          </p>
          <p className="text-gray-600 mt-4">
            Trust Vehicle Title Record – we collaborate with industry-standard brands like
            J.D. Power and the NMVTIS (National Motor Vehicle Title Information System) to
            deliver the most current and accurate vehicle data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Solution;
