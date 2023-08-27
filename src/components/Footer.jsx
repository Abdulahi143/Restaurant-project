import React from 'react';
import { Link } from 'react-router-dom';

const updatedYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-white bg-opacity-70 p-6 shadow mt-auto">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="shortcut-links space-x-4">
          <Link to="/Specials" className="text-black hover:text-yellow-400">
            Specials
          </Link>
          <Link to="/Events" className="text-black hover:text-yellow-400">
            Events
          </Link>
          <Link to="/Contact" className="text-black hover:text-yellow-400">
            Contact
          </Link>
        </div>
        <Link to="/order">
        <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 py-2 px-4 rounded">
          Order Now
        </button>
        </Link>
       
        <div className="social-icons flex space-x-4">
          <a href="#" className="text-black hover:text-yellow-400">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-black hover:text-yellow-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-black hover:text-yellow-400">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <p className="text-black-400 text-center py-4">
        &copy; Abdulahi the devStudent {updatedYear}
      </p>
    </footer>
  );
};

export default Footer;
