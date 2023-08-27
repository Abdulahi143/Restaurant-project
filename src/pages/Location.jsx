import React from 'react';

const Location = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white-100">
      <main className="flex-grow container mx-auto py-10">
        <section className="flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-3xl font-semibold mb-4">Our Location</h2>
            <p className="text-gray-600 mb-6">
              Visit us at our cozy restaurant located in the heart of the city.
            </p>
            <address className="text-gray-700">
              <p className="mb-1">Wadada Liido</p>
              <p className="mb-1">Muqdisho, Somalia</p>
              <p className="mb-1">Phone: +36736269711</p>
            </address>
            <div className="mt-6">
              
            </div>

            <div className="mapouter relative text-right w-96 h-64">
      <div className="gmap_canvas overflow-hidden bg-transparent w-full h-full">
        <iframe
          className="gmap_iframe w-full h-full"
          title="Zeytuun Restaurant Map"

          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Zeytuun%20Restaurant&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <a
          href="https://gachanox.io/"
          className="absolute bottom-4 left-4 text-blue-500"
        >
          Gacha Nox APK
        </a>
      </div>
    </div>
            
          </div>
        </section>
      </main>
    </div>
  );
};

export default Location;
