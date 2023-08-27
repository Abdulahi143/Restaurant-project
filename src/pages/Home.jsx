import React from 'react';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/images/Home.png';

function Home() {
  return (
    <div className="flex justify-center items-center h-55">
      <div className="flex flex-col items-start p-10">
        <span className="text-yellow-500 font-bold text-lg mb-2">50% Off For All Products</span>
        <div className="w-16 h-1 bg-yellow-500 mb-4"></div>
        <h1 className="text-4xl mb-4">
          Maqaayad heer <span className="text-yellow-500">sare ah</span>, <br className="hidden md:inline" />
          <span className="ml-20">dhadhan macaan 🔥</span>
        </h1>

        <p className="text-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Link to="/order">
          <button className="bg-yellow-500 text-white py-2 px-4 rounded cursor-pointer">
            Order Now
          </button>
        </Link>
      </div>
      <img src={HeroImage} alt="" className="w-1/3 h-auto object-cover" />
    </div>
  );
}

export default Home;
