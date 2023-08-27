import React from 'react';
import { Link } from 'react-router-dom';
import riceChicken from '../assets/images/rice&chicken.jpeg';
import pancakes from '../assets/images/canjeero.jpeg';
import riceSuqaar from '../assets/images/rice&suqaar.jpg';
import hot from '../assets/images/hot.jpeg';
import cold from '../assets/images/cold.jpeg';

const Menu = () => {
  const foodItems = [
    { id: 1, name: 'Pancakes', price: '$5.99', image: pancakes },
    { id: 2, name: 'Rice and Chicken', price: '$8.99', image: riceChicken },
    { id: 3, name: 'Rice and Meat', price: '$9.99', image: riceSuqaar },
    { id: 4, name: 'Pancakes', price: '$5.99', image: pancakes },
    { id: 5, name: 'Rice and Chicken', price: '$8.99', image: riceChicken }, 
    { id: 6, name: 'Pancakes', price: '$5.99', image: pancakes },
    { id: 7, name: 'Rice and Meat', price: '$9.99', image: riceSuqaar },
  ];

  const drinkItems = [
    { id: 9, name: 'Sprite', price: '$9.99', image: cold },
    { id: 10, name: 'Tea', price: '$9.99', image: hot },
    { id: 11, name: 'Fanta', price: '$9.99', image: cold },
    { id: 12, name: 'Coffee', price: '$9.99', image: hot },
    { id: 13, name: 'COca', price: '$9.99', image: cold },
    { id: 14, name: 'Cappuccino', price: '$9.99', image: hot },




  ];




  return (
    <>
      <div className="flex justify-center items-start mt-10">
        <div className="menu-widgets">
          <div className="menu-details grid grid-cols-1 md:grid-cols-3 gap-4">
            {foodItems.map((item) => (
              <div className="meal-item" key={item.id}>
                <Link to="/order">
                  <div className="w-full relative">
                    <img src={item.image} alt={item.name} className="w-full h-auto max-h-40 object-cover" />
                    <div className="meal-info bg-gray-800 bg-opacity-75 p-2 text-white absolute bottom-0 left-0 w-full">
                      <p className="text-lg font-medium">{item.name}</p>
                      <p className="text-sm">{item.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-start mt-10">
        <div className="menu-widgets">
          <div className="menu-details grid grid-cols-1 md:grid-cols-3 gap-4">
            {drinkItems.map((item) => (
              <div className="drink-item" key={item.id}>
                <Link to="/order">
                  <div className="w-full relative">
                    <img src={item.image} alt={item.name} className="w-full h-auto max-h-40 object-cover" />
                    <div className="meal-info bg-gray-800 bg-opacity-75 p-2 text-white absolute bottom-0 left-0 w-full">
                      <p className="text-lg font-medium">{item.name}</p>
                      <p className="text-sm">{item.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
