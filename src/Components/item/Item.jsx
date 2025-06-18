import React from 'react';
import { NavLink } from 'react-router-dom';

const Item = ({ 
  id, 
  name, 
  image, 
  new_price, 
  old_price, 
  category = 'undefined' 
}) => {
  // console.log(`Item ${id} - Name: ${name} | Category: ${category} | Image: ${image}`);

  return (
    <div
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer text-center group overflow-hidden relative"
      onClick={() => window.scrollTo(0, 0)}
    >
      {/* Debug badge - remove in production */}
      <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-1 rounded z-20">
        ID: {id} | Cat: {category}
      </div>
      
      <div className="relative overflow-hidden rounded-lg mb-5 h-60">
        <NavLink to={`/product/${id}`}>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              console.error(`Failed to load image for item ${id}: ${image}`);
              e.target.src = '/path/to/fallback-image.jpg';
            }}
          />
        </NavLink>
        {old_price && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {Math.round((1 - new_price/old_price) * 100)}% OFF
          </span>
        )}
      </div>
      
      <p className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
        {name}
      </p>
      
      <div className="flex justify-center items-center gap-3">
        <span className="text-blue-600 font-bold text-xl">${new_price}</span>
        {old_price && (
          <span className="line-through text-gray-400 text-sm">${old_price}</span>
        )}
      </div>
      
      <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-medium transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
        View Details
      </button>
    </div>
  );
};

export default React.memo(Item);