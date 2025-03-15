import React from "react";
import { FaCarSide, FaCarCrash, FaBolt } from "react-icons/fa";

const stats = [
  {
    icon: <FaCarSide size={30} className="text-white" />,
    title: "All 50 State",
  },
  {
    icon: <FaCarCrash size={30} className="text-white" />,
    title: "All 50 State DMV Jurisdictions",
  },
  {
    icon: <FaBolt size={30} className="text-white" />,
    title: "All 50 State DMV Jurisdictions",
  },
];

const WorkingFor = () => {
  return (
    <div className="bg-gray-100 py-16 text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        SEEN BY MORE THAN 1,600,000 PEOPLE
      </h2>

      {/* Grid Layout */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
          >
            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center bg-red-500 rounded-full mb-4">
              {stat.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900">{stat.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingFor;
