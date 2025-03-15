"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaPhone } from "react-icons/fa";

const faqs = [
  {
    question: "How Extensive Are Your VIN Reports?",
    answer:
      "Our reports encompass crucial details such as Brand Records, Junk/Salvage/Total Loss status, Odometer Readings, Title Records, Prior Theft Records, and more. We provide comprehensive information to support your informed decision-making process!",
  },
  {
    question: "Do You Cover All Vehicle Makes?",
    answer:
      "Yes, our database includes information for most vehicle makes and models available in the market.",
  },
  {
    question: "What If I Can not Find Any Information?",
    answer:
      "If no information is found for your VIN, it may not have been registered in the available databases. Contact our support team for further assistance.",
  },
  {
    question: "How Can I Cancel My Account?",
    answer:
      "You can cancel your account anytime by navigating to your account settings and selecting 'Cancel Subscription'.",
  },
  {
    question: "How Many Reports Can I Generate?",
    answer:
      "The number of reports you can generate depends on the package you choose. Visit our pricing page for details.",
  },
  {
    question: "Is Your VIN Lookup Service Accurate and Reliable?",
    answer:
      "Yes, we source our data from trusted industry sources, ensuring high accuracy and reliability.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Side - Accordion */}
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            MOST POPULAR QUESTIONS
          </h2>

          <div className="mt-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300">
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full flex justify-between items-center px-4 py-4 text-lg font-semibold text-gray-900 ${
                    openIndex === index ? "bg-black text-white" : "bg-white"
                  }`}
                >
                  {faq.question}
                  {openIndex === index ? (
                    <FaChevronUp className="text-white" />
                  ) : (
                    <FaChevronDown className="text-gray-900" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="bg-gray-100 text-gray-700 px-4 py-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Contact Section */}
        <div className="w-full md:w-1/3">
          {/* Call Us Section */}
          <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold">NEED HELP?</h3>
            <div className="mt-4">
              <button className="bg-red-500 hover:bg-red-600 px-6 py-2 text-white font-semibold rounded-lg flex items-center mx-auto">
                <FaPhone className="mr-2" /> Call Us
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-100 mt-6 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 text-center">
              CAN'T FIND ANSWER? ASK US.
            </h3>
            <form className="mt-4 space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-lg text-black"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg text-black"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded-lg text-black"
              />
              <textarea
                placeholder="Message"
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-lg text-black"
              ></textarea>
              <button className="w-full bg-red-500 hover:bg-red-600 text-white p-3 font-semibold rounded-lg">
                Get a Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
