import React, { useEffect, useRef } from 'react';
import Item from '../item/Item';
import new_collections from '../../assets/newcollections';

const NewCollections = () => {
  const underlineRef = useRef(null);

  useEffect(() => {
    const underline = underlineRef.current;
    if (underline) {
      // Trigger animation after component mounts
      setTimeout(() => {
        underline.style.width = '100%';
      }, 100);
    }
  }, []);

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header with animated underline */}
        <div className="text-center mb-12 relative">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            NEW COLLECTIONS
          </h1>
          <div className="relative h-1 mx-auto max-w-xs">
            <div 
              ref={underlineRef}
              className="absolute bottom-0 left-0 h-full bg-red-600 rounded-full"
              style={{
                width: '0%',
                transition: 'width 0.8s cubic-bezier(0.65, 0, 0.35, 1)',
              }}
            ></div>
          </div>
          <p className="text-gray-600 mt-4">Discover our latest arrivals for the season</p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {new_collections.map((item, i) => (
            <Item 
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-white border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-colors duration-300">
            View All Collections
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCollections;