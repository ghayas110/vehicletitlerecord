import { BannerPage } from '@/components'
import React from 'react'

const RefundPolicy = () => {
  return (
    <div>
      {/* Page Banner */}
      <BannerPage title="Refund Policy" />

      {/* Refund Policy Content */}
      <div className="bg-white py-16 px-6 md:px-12">
        <div className="container mx-auto max-w-5xl text-gray-800">
          
          {/* Section: Introduction */}
          <h2 className="text-2xl font-bold text-gray-900">1. Introduction</h2>
          <p className="mt-4">
            Thank you for choosing vehicletitlerecord.com, a service provided by Vehicle Title Record.
            We strive to ensure your satisfaction with our virtual vehicle report services.
            Please review our refund policy outlined below to understand the conditions under which refunds are applicable.
          </p>

          {/* Section: Refund Request Procedure */}
          <h2 className="text-2xl font-bold text-gray-900 mt-8">2. Refund Request Procedure</h2>
          <p className="mt-4">
            Customers who wish to request a refund must follow the specified procedure outlined below:
          </p>
          <ul className="mt-2 list-disc pl-6 space-y-2">
            <li>Send an email to <a href="mailto:support@vehicletitlerecord.com" className="text-red-600 font-semibold">support@vehicletitlerecord.com</a> within 48 hours of placing the order(s).</li>
            <li>Use the subject line “Refund Request” in the email.</li>
            <li>Include the Order Number or any other order identifier in the email.</li>
            <li>Provide a clear and detailed reason for the refund request.</li>
            <li>Include evidence supporting the case, such as screenshots or relevant documents.</li>
          </ul>

          {/* Section: Eligibility for Refund */}
          <h2 className="text-2xl font-bold text-gray-900 mt-8">3. Eligibility for Refund</h2>
          <p className="mt-4">
            A refund will be considered under the following circumstances:
          </p>

          {/* Subsection: Non-Delivery */}
          <h3 className="text-xl font-semibold text-gray-900 mt-6">3.1 Non-Delivery</h3>
          <p className="mt-4">
            If the customer does not receive the report due to reasons such as an incorrect email address, email provider issues, 
            mail server errors, or spam settings, the following steps should be taken:
          </p>
          <ul className="mt-2 list-disc pl-6 space-y-2">
            <li>Customer informs us via email or live chat support about non-delivery.</li>
            <li>The subject of the email should be “Report Not Delivered”.</li>
            <li>The email or live chat should include the order number and an alternate email address.</li>
            <li>We will resend the report to the provided alternate email and on live chat support (if requested).</li>
            <li>If the report is not delivered within 2 hours of the complaint email, the customer is eligible for a refund.</li>
          </ul>

          {/* Subsection: Errors in Report */}
          <h3 className="text-xl font-semibold text-gray-900 mt-6">3.2 Errors or Shortcomings in Report</h3>
          <p className="mt-4">
            In the event of errors or shortcomings in the report, customers should:
          </p>
          <ul className="mt-2 list-disc pl-6 space-y-2">
            <li>Inform us via email about errors or shortcomings in the report.</li>
            <li>The subject of the email should be “Errors or Shortcomings in Report”.</li>
            <li>The email should include the order number and highlight specific issues, providing documentation as proof.</li>
            <li>We will send the corrected report if errors are established.</li>
            <li>If the corrected report is not delivered within 48 hours of the complaint email, the customer is eligible for a refund.</li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
