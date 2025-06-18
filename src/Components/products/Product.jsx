import React from 'react';
import Item from '../item/Item';
import all_product from '../../assets/all_product';

const Product = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto">
        {/* Header with decorative elements */}
        <div className="text-center mb-14 relative ">
          <h1 className="text-4xl font-bold py-2 text-gray-900 mb-4 relative inline-block">
            POPULAR PRODUCTS
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%]  h-1 bg-blue-600 rounded-full"></span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most loved women's collection. Curated with quality and style in mind.
          </p>
        </div>

        {/* Filter/Sort controls (optional) */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-sm text-gray-500">
            Showing {all_product.length} items
          </div>
          <div className="flex space-x-2">
            <select className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Sort by</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Most Popular</option>
            </select>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          {all_product.map((item, i) => (
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

        {/* Pagination or "Load More" (optional) */}
        <div className="mt-16 flex justify-center">
          <button className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-300">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;