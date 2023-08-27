import React from 'react';
import { Link } from 'react-router-dom';
import confirmImage from '../assets/images/confirm.png';

const OrderConfirm = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-100">
      <h1 className="text-3xl font-semibold mb-4 text-yellow-800">
        Thanks for Ordering from Dugsiiye Restaurant
      </h1>
      <img src={confirmImage} alt="Order Confirmed" className="w-32 h-auto mb-4" />
      <h2 className="text-xl text-yellow-700 mb-8">
        Be ready to eat. Your order is on its way and will arrive in approximately 15 minutes.
      </h2>
      <Link
        to="/"
        className="bg-yellow-500 hover:bg-green-400 text-gray-900 py-2 px-4 rounded inline-block text-sm"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default OrderConfirm;
