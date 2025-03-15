import { BannerPage } from '@/components'
import React from 'react'

const TermsOfService = () => {
  return (
    <div>
      {/* Page Banner */}
      <BannerPage title="Terms of Service" />

      {/* Terms of Service Content */}
      <div className="bg-white py-16 px-6 md:px-12">
        <div className="container mx-auto max-w-5xl text-gray-800">
          
          {/* Section: Interpretation and Definitions */}
          <h2 className="text-2xl font-bold text-gray-900">Terms of Service</h2>
          <h3 className="text-xl font-semibold text-gray-900 mt-4">1.1 Interpretation</h3>
          <p className="mt-4">
            The words of which the initial letter is capitalized have meanings defined under the following conditions. 
            The following definitions shall have the same meaning regardless of whether they appear in singular or plural.
          </p>

          {/* Subsection: Definitions */}
          <h3 className="text-xl font-semibold text-gray-900 mt-6">1.2 Definitions</h3>
          <ul className="mt-2 list-disc pl-6 space-y-2">
            <li><strong>1.2.1 Terms:</strong> Refers to the Terms and Conditions of Use outlined in this document that Users must agree to when accessing or using the services provided by VehicleTitleRecord.com.</li>
            <li><strong>1.2.2 Company:</strong> The owner and operator of the Website, offering virtual vehicle reports through its online platform.</li>
            <li><strong>1.2.3 Website:</strong> Refers to the online platform owned and operated by the Company, accessible at <a href="https://vehicletitlerecord.com/" className="text-red-600 font-semibold">https://vehicletitlerecord.com/</a>, where virtual vehicle reports are provided.</li>
            <li><strong>1.2.4 User:</strong> Refers to any individual accessing or using the services provided by the Website, agreeing to abide by the Terms outlined herein.</li>
          </ul>

          {/* Section: Acceptance of Terms */}
          <h2 className="text-2xl font-bold text-gray-900 mt-8">2. Acceptance of Terms</h2>
          <p className="mt-4">
            By accessing or using the services provided by VehicleTitleRecord.com, User agrees to comply with and be bound by these Terms. 
            If you do not agree to these Terms, you may not use the services.
          </p>

          {/* Section: Description of Services/Products */}
          <h2 className="text-2xl font-bold text-gray-900 mt-8">3. Description of Services/Products</h2>
          <p className="mt-4">
            The services provided include Virtual Vehicle Reports and VIN Decoder, offering insights into vehicle history and identification. 
            Virtual Vehicle Reports provide detailed information on a vehicle, while VIN Decoder decodes Vehicle Identification Numbers, 
            revealing the make, model, and year. The information provided is for general informational purposes only and should not be considered as professional advice.
            The Company reserves the right to update or modify these services at any time.
          </p>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
