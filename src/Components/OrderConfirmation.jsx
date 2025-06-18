import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useLocation } from "react-router-dom";
import { ShopContext } from '../Context/Context';

const OrderConfirmation = () => {

    const location = useLocation();
  const { clearCart } = useContext(ShopContext);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const shouldClearCart = params.get('clearCart') === 'true';

    if (shouldClearCart && typeof clearCart === 'function') {
      clearCart();
    }
  }, [location, clearCart]);


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg text-center">
        <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Thank you for your purchase!</h1>
        <p className="text-gray-600 mb-6">
          Your order has been confirmed. You will receive an email with the details shortly.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
