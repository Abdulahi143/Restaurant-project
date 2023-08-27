import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CompleteOrder = () => {
  const [selectedFoodItems, setSelectedFoodItems] = useState([]);
  const [selectedDrinkItems, setSelectedDrinkItems] = useState([]);

  const [userInfo, setUserInfo] = useState({
    name: '',
    address: '',
    city: '',
    postcode: '',
    phoneNumber: '',
  });

  useEffect(() => {
    const savedFoodItems = JSON.parse(localStorage.getItem('selectedFoodItems')) || [];
    setSelectedFoodItems(savedFoodItems);

    const savedDrinkItems = JSON.parse(localStorage.getItem('selectedDrinkItems')) || [];
    setSelectedDrinkItems(savedDrinkItems);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleQuantityChange = (itemId, itemType, newQuantity) => {
    if (newQuantity === 0) {
      if (itemType === 'food') {
        setSelectedFoodItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
      } else if (itemType === 'drink') {
        setSelectedDrinkItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
      }
    } else {
      if (itemType === 'food') {
        const updatedItems = selectedFoodItems.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        );
        setSelectedFoodItems(updatedItems);
      } else if (itemType === 'drink') {
        const updatedItems = selectedDrinkItems.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        );
        setSelectedDrinkItems(updatedItems);
      }
    }
  };

  const isFormFilled =
    userInfo.name.trim() !== '' &&
    userInfo.address.trim() !== '' &&
    userInfo.city.trim() !== '' &&
    userInfo.postcode.trim() !== '' &&
    userInfo.phoneNumber.trim() !== '';

  const totalOrderedItems = selectedFoodItems.length + selectedDrinkItems.length;

  const handleConfirmOrder = () => {
    if (!isFormFilled || totalOrderedItems === 0 || hasInvalidQuantities()) {
      return;
    }

    localStorage.removeItem('selectedFoodItems');
    localStorage.removeItem('selectedDrinkItems');
  };

  const hasInvalidQuantities = () => {
    const invalidFoodQuantity = selectedFoodItems.some((item) => item.quantity < 1);
    const invalidDrinkQuantity = selectedDrinkItems.some((item) => item.quantity < 1);
    return invalidFoodQuantity || invalidDrinkQuantity;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Complete Your Order</h1>
      <form className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <label className="block text-gray-600 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium">Address</label>
          <input
            type="text"
            name="address"
            value={userInfo.address}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium">City</label>
          <input
            type="text"
            name="city"
            value={userInfo.city}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium">Postcode</label>
          <input
            type="text"
            name="postcode"
            value={userInfo.postcode}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-gray-600 font-medium">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={userInfo.phoneNumber}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2 mt-1"
          />
        </div>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Your Order</h2>
        <ul>
        {selectedFoodItems.map((foodItem) => (
      <li key={foodItem.id}>
        {foodItem.name}{' '}
        <button
              className="bg-yellow-500 hover:bg-yellow-600 px-2 py-1 rounded"
              onClick={() =>
                handleQuantityChange(foodItem.id, 'food', Math.max(0, foodItem.quantity - 1))
              }
            >
              -
            </button>
        <input
          placeholder='1'
          type="number"
          value={foodItem.quantity || 0}
          min={0}
          onChange={(e) =>
            handleQuantityChange(foodItem.id, 'food', parseInt(e.target.value) || 0)
          }
          className="w-16 text-center border rounded"
        />
         <button
              className="bg-yellow-500 hover:bg-yellow-600 px-2 py-1 rounded"
              onClick={() =>
                handleQuantityChange(foodItem.id, 'food', foodItem.quantity + 1)
              }
            >
              +
            </button>
        {/* Display error message if quantity is invalid */}
        {foodItem.quantity < 1 && (
          <p className="text-red-500 text-sm">Please enter a valid quantity.</p>
        )}
      </li>
    ))}
    {selectedDrinkItems.map((drinkItem) => (
      <li key={drinkItem.id}>
        {drinkItem.name}{' '}
        <button
          className="bg-yellow-500 hover:bg-yellow-600 px-2 py-1 rounded"
          onClick={() =>
            handleQuantityChange(drinkItem.id, 'drink', Math.max(1, drinkItem.quantity - 1))
          }
        >
          -
        </button>
        <input
          placeholder='1'
          type="number"
          value={drinkItem.quantity || 0}  // Initialize with 0 if quantity is undefined
          min={0}
          onChange={(e) =>
            handleQuantityChange(drinkItem.id, 'drink', parseInt(e.target.value) || 0)
          }
          className="w-16 text-center border rounded"
        />
        <button
          className="bg-yellow-500 hover:bg-yellow-600 px-2 py-1 rounded"
          onClick={() => handleQuantityChange(drinkItem.id, 'drink', drinkItem.quantity + 1)}
        >
          +
        </button>
        {/* Display error message if quantity is invalid */}
        {drinkItem.quantity < 1 && (
          <p className="text-red-500 text-sm">Please enter a valid quantity.</p>
        )}
      </li>
    ))}
        </ul>
      </div>

      {/* Confirmation button and form validation message */}
      {(isFormFilled && totalOrderedItems > 0 && !hasInvalidQuantities()) && (
        <Link to="/confirm">
          <button
            className="bg-yellow-500 hover:bg-green-400 text-gray-900 py-2 px-4 rounded mt-4"
            onClick={handleConfirmOrder}
          >
            Confirm Order
          </button>
        </Link>
      )}

      {!isFormFilled && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4">
          <p>Please fill in all the required information before confirming the order.</p>
        </div>
      )}

      {/* Display error message for invalid quantity */}
      {(selectedFoodItems.concat(selectedDrinkItems)).map((item) => (
        item.quantity === 0 && (
          <div
            key={item.id}
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-2"
          >
            <p>Please enter a valid quantity for {item.name}.</p>
          </div>
        )
      ))}
    </div>
  );
};

export default CompleteOrder;
