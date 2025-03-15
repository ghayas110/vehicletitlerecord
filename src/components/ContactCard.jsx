import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaMapMarkerAlt size={30} className="text-white" />,
    title: "Location",
    description: "4323 Oak Lane, Preston, Georgia 31824, USA",
  },
  {
    icon: <FaEnvelope size={30} className="text-white" />,
    title: "Email us",
    description: "support@vehicletitlerecord.com",
  },
  {
    icon: <FaPhoneAlt size={30} className="text-white" />,
    title: "Phone us",
    description: "+1(404) 900-0746",
  },
];

const ContactCards = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {contactInfo.map((info, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center transition duration-300 hover:shadow-2xl"
          >
            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center bg-red-500 rounded-full mb-4">
              {info.icon}
            </div>
            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900">{info.title}</h3>
            {/* Description */}
            <p className="text-gray-600 mt-2">{info.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCards;
