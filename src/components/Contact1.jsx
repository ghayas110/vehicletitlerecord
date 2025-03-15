import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Contact1 = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row gap-12">
        
        {/* Left Side - Contact Form */}
        <div className="w-full md:w-1/2 bg-gray-100 p-10 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900">GET IN TOUCH.</h2>
          
          <form className="mt-6 space-y-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-gray-700 font-semibold">NAME</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 font-semibold">PHONE</label>
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">EMAIL</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">SUBJECT</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold">MESSAGE</label>
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg bg-gray-50"
              ></textarea>
            </div>

            {/* Send Message Button */}
            <button className="w-full bg-red-500 hover:bg-red-600 text-white p-3 font-semibold rounded-lg flex items-center justify-center gap-2">
              <FaEnvelope /> Send a message
            </button>
          </form>
        </div>

        {/* Right Side - Google Map */}
        <div className="w-full md:w-1/2">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.0811852715737!2d-84.539324!3d32.0614069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888e9267f7e2b31f%3A0x65a88a6c67f63d49!2sOak%20Ln%2C%20Preston%2C%20GA%2031824%2C%20USA!5e0!3m2!1sen!2s!4v1647212037938!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact1;
