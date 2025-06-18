import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import star_icon from '../../assets/star_icon.png';
import star_dull_icon from '../../assets/star_dull_icon.png';
import { ShopContext } from "../../Context/Context";

const ProductDisplay = (props) => {
  const { product } = props;
  const [selectedSize, setSelectedSize] = useState(null);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const { addToCart, isLoggedIn } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleGoToCart = () => {
    if (isLoggedIn) {
      navigate("/cart");
    } else {
      setShowLoginPrompt(true);
    }
  };

  const handleLoginRedirect = () => {
    setShowLoginPrompt(false);
    navigate("/login");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Images */}
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-1/2">
          {/* Thumbnail Images */}
          <div className="flex flex-row md:flex-col gap-2 order-2 md:order-1">
            <img 
              src={product.image} 
              alt="Product thumbnail 1" 
              className="w-20 h-20 object-cover border border-gray-200 rounded cursor-pointer hover:border-blue-500 transition" 
            />
            <img 
              src={product.image} 
              alt="Product thumbnail 2" 
              className="w-20 h-20 object-cover border border-gray-200 rounded cursor-pointer hover:border-blue-500 transition" 
            />
            <img 
              src={product.image} 
              alt="Product thumbnail 3" 
              className="w-20 h-20 object-cover border border-gray-200 rounded cursor-pointer hover:border-blue-500 transition" 
            />
          </div>
          
          {/* Main Product Image */}
          <div className="order-1 md:order-2 flex-1">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto max-h-[500px] object-contain border border-gray-200 rounded-lg"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          
          {/* Star Ratings */}
          <div className="flex items-center gap-1">
            <div className="flex">
              {[1, 2, 3, 4].map((star) => (
                <img key={star} src={star_icon} alt="star" className="h-5 w-5" />
              ))}
              <img src={star_dull_icon} alt="half star" className="h-5 w-5" />
            </div>
            <p className="text-gray-500 text-sm ml-2">(130 reviews)</p>
          </div>

          {/* Prices */}
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold text-gray-900">
              ${product.new_price}
            </div>
            <div className="text-lg text-gray-500 line-through">
              ${product.old_price}
            </div>
            {product.old_price > product.new_price && (
              <div className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                {Math.round((1 - product.new_price/product.old_price) * 100)}% OFF
              </div>
            )}
          </div>

          {/* Description */}
          <div className="text-gray-700">
            {product.description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, eaque. Amet reiciendis minus modi eum soluta hic autem, rem corrupti quibusdam? Quam omnis saepe et expedita ratione, quasi unde repudiandae."}
          </div>

          {/* Size Selection */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">Select Size</h2>
            <div className="flex flex-wrap gap-2">
              {product.sizes?.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-14 h-12 flex items-center justify-center border rounded transition ${
                    selectedSize === size
                      ? "border-blue-600 bg-blue-100 text-blue-700 font-semibold"
                      : "border-gray-300 hover:border-blue-500 hover:bg-blue-50"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons: Add to Cart + Go to Cart */}
          <div className="flex gap-4">
            <button
              onClick={() => addToCart(product.id)}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              ADD TO CART
            </button>
            <button
              onClick={handleGoToCart}
              className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors shadow-md hover:shadow-lg"
            >
              GO TO CART
            </button>
          </div>

          {/* Category & Tags */}
          <div className="text-sm text-gray-600 space-y-2">
            <div>
              <span className="font-medium">Category: </span>
              <span className="capitalize">{product.category}</span>
            </div>
            <div>
              <span className="font-medium">Tags: </span>
              <span>Modern, Latest, Trend</span>
            </div>
          </div>
        </div>
      </div>

      {/* Login Required Modal */}
      {showLoginPrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/10 backdrop-blur-[6px]">
          <div className="bg-white/40 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl p-10 text-center w-[90%] max-w-sm animate-scaleIn">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              To proceed, you have to login
            </h2>
            <button
              onClick={handleLoginRedirect}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:from-purple-700 hover:to-indigo-700 transition duration-200"
            >
              Proceed to Login
            </button>
            <button
              onClick={() => setShowLoginPrompt(false)}
              className="mt-4 px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition duration-200"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDisplay;
