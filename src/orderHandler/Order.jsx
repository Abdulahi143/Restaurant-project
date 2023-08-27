import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import riceChicken from '../assets/images/rice&chicken.jpeg';
import pancakes from '../assets/images/canjeero.jpeg';
import riceSuqaar from '../assets/images/rice&suqaar.jpg';
import hot from '../assets/images/hot.jpeg';
import cold from '../assets/images/cold.jpeg';

const Order = () => {
  const [showBreakfast, setShowBreakfast] = useState(true);
  const [showLunch, setShowLunch] = useState(false);
  const [showDinner, setShowDinner] = useState(false);

  const [showColdDrinks, setColdDrinks] = useState(false);
  const [showHotDrinks, setHotDrinks] = useState(true);

  const [selectedFoodItems, setSelectedFoodItems] = useState([]);
  const [selectedDrinkItems, setSelectedDrinkItems] = useState([]);

  const handleFoodItemSelection = (item) => {
    setSelectedFoodItems((prevItems) => [...prevItems, item]);
    localStorage.setItem('selectedFoodItems', JSON.stringify([...selectedFoodItems, item]));
  };
  
  const handleDrinkItemSelection = (item) => {
    setSelectedDrinkItems((prevItems) => [...prevItems, item]);
    localStorage.setItem('selectedDrinkItems', JSON.stringify([...selectedDrinkItems, item]));
  };
  

  const renderFoodItems = (items) => {
    return items.map((item) => (
      <div className="meal-item" key={item.id}>
       <div className="w-full relative">
          <img src={item.image} alt={item.name} className="w-full h-auto max-h-40 object-cover" />
          <div className="meal-info bg-gray-800 bg-opacity-75 p-2 text-white absolute bottom-0 left-0 w-full">
            <p className="text-lg font-medium">{item.name}</p>
            <div className="flex justify-between items-center">
              <p className="text-sm">{item.price}</p>
              <button className="text-sm cursor-pointer" onClick={() => handleFoodItemSelection(item)}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const renderDrinkItems = (items) => {
    return items.map((item) => (
      <div className="drink-item" key={item.id}>
         <div className="w-full relative">
          <img src={item.image} alt={item.name} className="w-full h-auto max-h-40 object-cover" />
          <div className="meal-info bg-gray-800 bg-opacity-75 p-2 text-white absolute bottom-0 left-0 w-full">
            <p className="text-lg font-medium">{item.name}</p>
            <div className="flex justify-between items-center">
              <p className="text-sm">{item.price}</p>
              <button className="text-sm cursor-pointer" onClick={() => handleFoodItemSelection(item)}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const breakfastItems = [
    { id: 1, name: 'Pancakes', price: '$5.99', image: pancakes },
    { id: 2, name: 'Pancakes', price: '$5.99', image: pancakes },
    { id: 3, name: 'Pancakes', price: '$5.99', image: pancakes },
  ];

  const lunchItems = [
    { id: 4, name: 'Rice and Chicken', price: '$8.99', image: riceChicken },
    { id: 5, name: 'Rice and Chicken', price: '$8.99', image: riceChicken },
    { id: 6, name: 'Rice and Chicken', price: '$8.99', image: riceChicken },  ];

  const dinnerItems = [
    // Dinner item data    { id: 1, name: 'Rice and Meat', price: '$9.99', image: riceSuqaar },
    { id: 7, name: 'Rice and Meat', price: '$9.99', image: riceSuqaar },
    { id: 8, name: 'Rice and Meat', price: '$9.99', image: riceSuqaar },  ];

  const coldDrinks = [
    { id: 9, name: 'Sprite', price: '$9.99', image: cold },
    { id: 10, name: 'Fanta', price: '$9.99', image: cold },
    { id: 11, name: 'COca', price: '$9.99', image: cold },
  ];

  const hotDrinks = [
    { id: 12, name: 'Coffee', price: '$9.99', image: hot },
    { id: 13, name: 'Tea', price: '$9.99', image: hot },
    { id: 14, name: 'Cappuccino', price: '$9.99', image: hot },
  ];

  return (
    <>
      <div className="flex justify-center items-start mt-10">
        <div className="meal-widgets">
          <div className="widget-container flex overflow-x-auto mb-5">
          <button
              onClick={() => {
                setShowBreakfast(true);
                setShowLunch(false);
                setShowDinner(false);
              }}
              className={`flex-shrink-0 mr-2 px-4 py-2 ${
                showBreakfast ? 'bg-yellow-800' : 'bg-yellow-500'
              } rounded font-medium text-sm cursor-pointer`}
            >
              Breakfast
            </button>
            <button
              onClick={() => {
                setShowBreakfast(false);
                setShowLunch(true);
                setShowDinner(false);
              }}
              className={`flex-shrink-0 mr-2 px-4 py-2 ${
                showLunch ? 'bg-yellow-800' : 'bg-yellow-500'
              } rounded font-medium text-sm cursor-pointer`}
            >
              Lunch
            </button>
            <button
              onClick={() => {
                setShowBreakfast(false);
                setShowLunch(false);
                setShowDinner(true);
              }}
              className={`flex-shrink-0 px-4 py-2 ${
                showDinner ? 'bg-yellow-800' : 'bg-yellow-500'
              } hover:bg-yellow-800 rounded font-medium text-sm cursor-pointer`}
            >
              Dinner
            </button>
          </div>
          <div className="meal-details grid grid-cols-1 md:grid-cols-3 gap-4">
          {showBreakfast && renderFoodItems(breakfastItems)}
            {showLunch && renderFoodItems(lunchItems)}
            {showDinner && renderFoodItems(dinnerItems)}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-start mt-10">
        <div className="drink-widgets">
          <div className="widget-container flex overflow-x-auto mb-5">
          <button
              onClick={() => {
                setHotDrinks(true);
                setColdDrinks(false);
              }}
              className={`flex-shrink-0 mr-2 px-4 py-2 ${
                showHotDrinks ? 'bg-yellow-800' : 'bg-yellow-500'
              } rounded font-medium text-sm cursor-pointer`}
            >
              Hot
            </button>
            <button
              onClick={() => {
                setHotDrinks(false);
                setColdDrinks(true);
              }}
              className={`flex-shrink-0 px-4 py-2 ${
                showColdDrinks ? 'bg-yellow-800' : 'bg-yellow-500'
              } hover:bg-yellow-800 rounded font-medium text-sm cursor-pointer`}
            >
              Cold
            </button>
          </div>
          <div className="meal-details grid grid-cols-1 md:grid-cols-3 gap-4">
          {showHotDrinks && renderDrinkItems(hotDrinks)}
            {showColdDrinks && renderDrinkItems(coldDrinks)}
          </div>
        </div>
      </div>

      {(selectedFoodItems.length > 0 || selectedDrinkItems.length > 0) && (
        <div className="flex justify-center items-center mt-4">
        <div className="ml-auto mr-auto"> {/* Use "ml-auto" and "mr-auto" to center the button */}
          <button className="bg-yellow-500 hover:bg-green-400 text-gray-900 py-2 px-4 rounded">
            <Link to="/complete">Proceed</Link>
          </button>
        </div>
      </div>
      )}
    </>
  );
};

export default Order;
