import React from "react";

const packages = [
  {
    title: "ESSENTIAL",
    price: "74.99",
    bgColor: "bg-gray-100",
    textColor: "text-red-600",
    features: [
      "Custom build",
      "Accident History",
      "Market Value Range",
      "Ownership History",
      "Cost of Ownership",
      "Vehicle Specifications",
      "Recalls and Defects",
      "Sales and Transaction Records",
      "Warranty Information",
      "Salvage History",
      "Theft Records",
      "Flood Damage History",
      "Fuel Efficiency",
      "Equipment and Features",
      "Single Boat Report",
      "Single RV Report",
      "Single Truck Report",
      "Industrial Equipment Report",
      "Single Trailer Report",
      "Heavy Equipment Report",
    ],
  },
  {
    title: "ELITE",
    price: "119.99",
    bgColor: "bg-red-600",
    textColor: "text-white",
    features: [
      "Aviation, Marine, and Commercial",
      "Aero Plan Comprehensive Report",
      "Helicopter Report",
      "Yacht Report",
      "Commercial Truck Report",
      "Commercial Equipment Report",
    ],
  },
];

const Packages = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row gap-12">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`w-full md:w-1/2 p-10 rounded-lg shadow-lg ${pkg.bgColor}`}
          >
            {/* Package Title */}
            <h3 className={`text-2xl font-bold uppercase ${pkg.textColor}`}>
              {pkg.title}
            </h3>

            {/* Price */}
            <p className={`text-4xl font-extrabold mt-2 ${pkg.textColor}`}>
              ${pkg.price}
              <span className="text-lg font-medium"> /PER REPORT</span>
            </p>

            {/* Features List */}
            <ul className={`mt-4 space-y-2 text-lg ${pkg.textColor === "text-white" ? "text-white" : "text-gray-700"}`}>
              {pkg.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>

            {/* Get a Quote Button */}
            <div className="mt-6">
              <button
                className={`w-full py-3 text-lg font-semibold rounded-lg ${
                  pkg.bgColor === "bg-red-600"
                    ? "bg-white text-red-600 hover:bg-gray-200"
                    : "bg-red-600 text-white hover:bg-red-700"
                }`}
              >
                Get a Quote
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
