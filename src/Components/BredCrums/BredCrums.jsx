import React from "react";
import arrow_icon from '../../assets/arrow_icon.png';

const BreadCrumbs = (props) => {
  const { product } = props;
  
  return (
    <div className="w-full py-4 px-4 sm:px-6 lg:px-8 ">
      <div className="flex items-center text-sm text-gray-600 justify-center font-medium space-x-2">
        <span className="hover:text-blue-600 cursor-pointer">Home</span>
        <img src={arrow_icon} alt=">" className="h-3 w-3 opacity-50" />
        <span className="hover:text-blue-600 cursor-pointer">SHOP</span>
        <img src={arrow_icon} alt=">" className="h-3 w-3 opacity-50" />
        <span className="hover:text-blue-600 cursor-pointer capitalize">
          {product.category}
        </span>
        <img src={arrow_icon} alt=">" className="h-3 w-3 opacity-50" />
        <span className="text-gray-900 font-semibold truncate max-w-xs">
          {product.name}
        </span>
      </div>
    </div>
  );
};

export default BreadCrumbs;