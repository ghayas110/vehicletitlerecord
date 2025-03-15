import React from "react";
import Image from "next/image";

const History = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side - Content */}
        <div className="w-full md:w-1/2">
          <p className="text-red-600 font-bold uppercase text-sm">
            WHETHER BUYING OR SELLING!
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            UNCOVER THE HISTORY OF YOUR VEHICLE
          </h2>
          <p className="text-gray-600 mt-4">
            Whether you are in the market to purchase or sell a vehicle, acquiring
            comprehensive knowledge about it is crucial. Uncover details about previous
            owners, significant damages (like fire, collisions, floods, etc.), original
            or added equipment, title brands, and more through Vehicle Title Record VIN
            Check!
          </p>
          <p className="text-gray-600 mt-4">
            This information significantly impacts the vehicle's value, safety, and
            reliability. Therefore, it is essential to have a clear understanding before
            making any vehicle transaction.
          </p>
          <p className="text-gray-600 mt-4">
            Rely on the latest industry standard – VIN checks. Our data is sourced from
            trustworthy public and private databases, and we are an authorized provider
            for the National Motor Vehicle Title Information System (NMVTIS) database.
          </p>
          <p className="text-gray-600 mt-4">
            Initiate a free VIN lookup to access a detailed vehicle history report!
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/red-car.jpg" // Replace with actual image path
            alt="Red Car"
            width={600}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default History;
