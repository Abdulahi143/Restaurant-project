import React, { useState, useEffect } from 'react';

const ConfirmBooked = () => {
  const [confirmationCode, setConfirmationCode] = useState('');
  const [tableNumber, setTableNumber] = useState('');

  useEffect(() => {
    // Generate a random confirmation code and table number here
    const newConfirmationCode = Math.floor(Math.random() * 10000); // Generates a random 4-digit number
    const newTableNumber = Math.floor(Math.random() * 20) + 1; // Generates a random table number between 1 and 20
    setConfirmationCode(newConfirmationCode);
    setTableNumber(newTableNumber);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-yellow-300 p-8 rounded-lg text-center">
        <h2 className="text-xl font-bold mb-4">Booking Confirmed!</h2>
        <p className="mb-4">
          Your confirmation code: <span className="font-bold">{confirmationCode}</span>
        </p>
        <p>
          Table number: <span className="font-bold">{tableNumber}</span>
        </p>
      </div>
    </div>
  );
};

export default ConfirmBooked;
