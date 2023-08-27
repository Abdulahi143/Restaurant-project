

import React from 'react';
import Profile1 from '../assets/images/profile1.jpg'; // Replace with actual image imports
import Profile2 from '../assets/images/profile2.jpg';
import Profile3 from '../assets/images/profile3.jpg';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'John Doe',
      image: Profile1,
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Jane Smith',
      image: Profile2,
      testimonial: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      name: 'Aisha Ali',
      image: Profile3,
      testimonial: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  return (
    <div className="bg-white-100 min-h-screen py-8"> {/* Add min-h-screen class */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4 text-center">Testimonials</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-gray-600">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
