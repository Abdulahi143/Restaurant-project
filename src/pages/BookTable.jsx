import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BookTable = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAdultsChange = (event) => {
    setAdults(event.target.value);
  };

  const handleChildrenChange = (event) => {
    setChildren(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleBookClick = () => {
    // Handle the booking logic here
    console.log('Booking:', { name, adults, children, phoneNumber });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-yellow-300 p-8 rounded-lg text-center">
        <h2 className="text-xl font-bold mb-4">Book a Table</h2>
        <input
          type="text"
          placeholder="Name of the Booker"
          value={name}
          onChange={handleNameChange}
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={handleEmailChange}
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Number of Adults"
          value={adults}
          onChange={handleAdultsChange}
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Number of Children"
          value={children}
          onChange={handleChildrenChange}
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          className="w-full mb-3 p-2 border rounded"
        />
        <Link to="/bookingConfirmation">
          <button
            className="bg-yellow-300 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded"
            onClick={handleBookClick}
          >
            Book
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookTable;
