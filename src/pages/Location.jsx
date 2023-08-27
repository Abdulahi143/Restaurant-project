import React from 'react';
import { Link } from 'react-router-dom';


const Location = () => {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-100">
      
      <main className="flex-grow container mx-auto py-10">
        <section className="flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-3xl font-semibold mb-4">Our Location</h2>
            <p className="text-gray-600 mb-6">
              Visit us at our cozy restaurant located in the heart of the city.
            </p>
            <address className="text-gray-700">
              <p className="mb-1">123 Sunshine Street</p>
              <p className="mb-1">Cityville, ABC 12345</p>
              <p className="mb-1">Phone: (123) 456-7890</p>
            </address>
            <div className="mt-6">
              <iframe
                title="Restaurant Location"
                width="100%"
                height="300"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890123456!2d-0.12345678901234567!3d12.345678901234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1234567890abcdef!2sDugsiiye%20Restaurant!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
};

export default Location;
