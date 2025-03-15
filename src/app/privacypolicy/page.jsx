import { BannerPage } from '@/components'
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div>
      {/* Page Banner */}
      <BannerPage title="Privacy Policy" />

      {/* Privacy Policy Content */}
      <div className="bg-white py-16 px-6 md:px-12">
        <div className="container mx-auto max-w-5xl text-gray-800">
          
          {/* Section: Collection of Personal Information */}
          <h2 className="text-2xl font-bold text-gray-900">COLLECTION OF PERSONAL INFORMATION</h2>
          <p className="mt-4">
            We collect personal information in the following scenarios:
          </p>
          <ul className="mt-2 list-disc pl-6 space-y-2">
            <li><strong>Account Creation:</strong> We gather information such as your name, mailing address, email address, phone number, and other pertinent details.</li>
            <li><strong>Product or Service Purchases:</strong> We collect additional data, including payment information and transaction history.</li>
            <li><strong>IP Address:</strong> We log each visit with your IP address and referring web page to analyze user demographics, diagnose server issues, and enhance site administration.</li>
          </ul>

          {/* Section: Cookies and Action Tags */}
          <h2 className="text-2xl font-bold text-gray-900 mt-8">COOKIES AND ACTION TAGS</h2>
          <p className="mt-4">
            We utilize cookies to improve your experience. Upon your initial visit, we assign an identification number to your email and deploy a cookie on your device. This cookie allows us to recognize you on subsequent visits and remember your preferences.
          </p>
          <p className="mt-4">
            Action Tags/Web Beacons: These 1x1 pixel images enable us to track interactions with our advertisements and content, assisting us in refining our services and personalizing your experience. This information remains confidential and is not shared with third parties.
          </p>

          {/* Section: Third-Party Information Sharing */}
          <h2 className="text-2xl font-bold text-gray-900 mt-8">THIRD-PARTY INFORMATION SHARING</h2>
          <p className="mt-4">
            We share personal information with third-party service providers for transaction completion and service delivery. These providers are contractually obligated to safeguard your data and utilize it solely for the intended purpose.
          </p>

          {/* Section: Marketing and Communications */}
          <h2 className="text-2xl font-bold text-gray-900 mt-8">MARKETING AND COMMUNICATIONS</h2>
          <p className="mt-4">
            By providing your personal information, you agree to receive marketing communications from us and our partners. You may opt out at any time by following the instructions in our emails or contacting us directly.
          </p>

          {/* Section: Data Security */}
          <h2 className="text-2xl font-bold text-gray-900 mt-8">DATA SECURITY</h2>
          <p className="mt-4">
            We prioritize the protection of your personal information. Our servers are secured in protected environments, and we use SSL encryption for sensitive data transmission. While we strive to ensure maximum security, no Internet transmission can be guaranteed 100% secure, and you assume the risk associated with data transmission.
          </p>

          {/* Section: User Rights and Opt-Out */}
          <h2 className="text-2xl font-bold text-gray-900 mt-8">USER RIGHTS AND OPT-OUT</h2>
          <p className="mt-4">
            You have the right to request the removal of your personal information from our database. Please contact us at <a href="mailto:support@vehicletitlerecord.com" className="text-red-600 font-semibold">support@vehicletitlerecord.com</a> to make such requests. Note that opting out does not affect information already shared with third parties.
          </p>

          {/* Section: Minors */}
          <h2 className="text-2xl font-bold text-gray-900 mt-8">MINORS</h2>
          <p className="mt-4">
            We do not knowingly collect or solicit personal information from individuals under the age of 18. If we become aware that we have inadvertently collected personal information from a minor, we will take steps to delete it as soon as possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
