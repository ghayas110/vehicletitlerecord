import React from "react";
import { FaCar, FaClipboardList, FaCheckCircle } from "react-icons/fa";

const services = [
  {
    icon: <FaCar size={30} className="text-white" />,
    title: "Title History",
    description:
      "Information about a vehicle’s title history as well as data from the National Motor Vehicle Title Information System (NMVTIS).",
  },
  {
    icon: <FaClipboardList size={30} className="text-white" />,
    title: "Junk / Salvage Details",
    description:
      "Junk, salvage, and insurance loss data from auctions, dismantlers, recyclers, and state motor vehicle departments.",
  },
  {
    icon: <FaCheckCircle size={30} className="text-white" />,
    title: "Title Brand Inspection",
    description:
      "Records about fire, flood, Hail Damage, Lemon, Salvage, Rebuilt, True Mileage Unknown, and other title brands.",
  },
  {
    icon: <FaCar size={30} className="text-white" />,
    title: "Odometer Usage Record",
    description:
      "Check reported odometer readings for potential rollback fraud or mileage discrepancies.",
  },
  {
    icon: <FaClipboardList size={30} className="text-white" />,
    title: "Inspection Data",
    description:
      "Technical findings from inspections, including emissions testing and mechanical reviews.",
  },
  {
    icon: <FaCheckCircle size={30} className="text-white" />,
    title: "Vehicle Values",
    description:
      "Vehicle valuation reports based on similar model sales, market trends, and depreciation rates.",
  },
  {
    icon: <FaCar size={30} className="text-white" />,
    title: "Warranty Details",
    description:
      "Warranty coverage information including factory and extended warranties.",
  },
  {
    icon: <FaClipboardList size={30} className="text-white" />,
    title: "Safety Recalls",
    description:
      "Manufacturer recall details including safety issues, affected parts, and repair status.",
  },
  {
    icon: <FaCheckCircle size={30} className="text-white" />,
    title: "Open Liens",
    description:
      "Details about any active liens on the vehicle including loan amounts and lienholders.",
  },
  {
    icon: <FaCar size={30} className="text-white" />,
    title: "Active and Recovered Theft",
    description:
      "Reports about stolen vehicles, recovered thefts, and their current status.",
  },
  {
    icon: <FaClipboardList size={30} className="text-white" />,
    title: "Registration Details",
    description:
      "Vehicle registration history, including ownership transfers and renewal records.",
  },
  {
    icon: <FaCheckCircle size={30} className="text-white" />,
    title: "Additional Details",
    description:
      "More insights into the vehicle’s background including past uses like rental or fleet service.",
  },
];

const ServicesSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Vehicle Report Features
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center bg-red-500 rounded-full mb-4">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
