import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white/30 p-6 shadow sticky top-0 z-10 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-yellow-500 hover:text-yellow-400">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold ml-4 md:ml-0 md:pl-4 md:border-l md:border-yellow-500">
            Dugsiiye Restaurant
          </h1>
        </Link>
        <nav className="mt-4 md:mt-0 space-x-4">
          <Link to="/" className="text-black hover:text-yellow-400">Home</Link>
          <Link to="/Menu" className="text-black hover:text-yellow-400">Menu</Link>
          <Link to="/Category" className="text-black hover:text-yellow-400">Category</Link>
          <Link to="/Testimonials" className="text-black hover:text-yellow-400">Testimonials</Link>
          <Link to="/Location" className="text-black hover:text-yellow-400">Location</Link>
        </nav>
        <button className="bg-yellow-500 hover:bg-green-400 text-gray-900 py-2 px-4 rounded">
          <Link to="/book">Book A Table?</Link>
        </button>

      </div>
    </header>
  );
};

export default Header;
