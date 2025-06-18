import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiPlus,
  FiMinus,
  FiTrash2,
  FiCreditCard,
  FiDollarSign,
} from "react-icons/fi";
import { FaPaypal } from "react-icons/fa";
import { loadStripe } from "@stripe/stripe-js";
import { ShopContext } from "../../Context/Context";

// Load Stripe with environment variable
const stripeKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
const stripePromise = stripeKey ? loadStripe(stripeKey) : null;

const CartItems = () => {
  const {
    getTotalCartAmount,
    all_product,
    cartItems,
    removeFromCart,
    addToCart,
    decreaseCartQuantity,
    clearCart,
  } = useContext(ShopContext);

  const [selectedPayment, setSelectedPayment] = useState("credit-card");
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    if (!stripePromise && selectedPayment === "credit-card") {
      alert("Stripe is not initialized properly. Please check your Stripe key.");
      return;
    }

    setIsProcessing(true);

    try {
      if (selectedPayment === "credit-card") {
        const stripe = await stripePromise;

        const response = await fetch("http://localhost:5000/api/create-checkout-session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: all_product
              .filter((product) => cartItems[product.id] > 0)
              .map((product) => ({
                id: product.id,
                quantity: cartItems[product.id],
                price: product.new_price,
                name: product.name,
              })),
          }),
        });

        if (!response.ok) throw new Error("Failed to create Stripe checkout session");

        const session = await response.json();
        const result = await stripe.redirectToCheckout({ sessionId: session.id });

        if (result.error) throw result.error;
      } else if (selectedPayment === "paypal") {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        alert("✅ Payment successful via PayPal!");
        clearCart();
        navigate("/order-confirmation");
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        alert("✅ Order placed with Cash on Delivery!");
        clearCart();
        navigate("/order-confirmation");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("❌ Payment failed: " + (error.message || error));
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Shopping Cart</h1>

      <div className="space-y-4">
        {all_product.map((product) => {
          if (cartItems[product.id] > 0) {
            return (
              <div
                key={product.id}
                className="grid grid-cols-1 md:grid-cols-6 items-center gap-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="md:col-span-2 flex items-center space-x-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-contain rounded-lg bg-gray-50 p-2 border border-gray-200"
                  />
                  <p className="font-medium text-gray-800 text-lg">{product.name}</p>
                </div>

                <p className="text-gray-700 font-medium">${product.new_price.toFixed(2)}</p>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => decreaseCartQuantity(product.id)}

                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 text-gray-600"
                  >
                    <FiMinus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-1 bg-gray-50 rounded-md text-gray-800 font-medium">
                    {cartItems[product.id]}
                  </span>
                  <button
                    onClick={() => addToCart(product.id)}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 text-gray-600"
                  >
                    <FiPlus className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-green-600 font-semibold text-lg">
                  ${(product.new_price * cartItems[product.id]).toFixed(2)}
                </p>

                <button
                  onClick={() => removeFromCart(product.id)}
                  className="p-2 rounded-full bg-red-50 hover:bg-red-100 transition-colors duration-200 text-red-500"
                  aria-label="Remove item"
                >
                  <FiTrash2 className="w-5 h-5" />
                </button>
              </div>
            );
          }
          return null;
        })}
      </div>

      {getTotalCartAmount() === 0 && (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">Your cart is empty</h3>
          <p className="text-gray-500 mb-6">Looks like you haven't added any items yet.</p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Continue Shopping
          </button>
        </div>
      )}

      {getTotalCartAmount() > 0 && (
        <div className="flex flex-col lg:flex-row gap-8 mt-10">
          {/* Promo Section */}
          <div className="w-full lg:w-2/5">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Apply Promo Code</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">
                  Apply
                </button>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                * Promo codes are not functional in this demo.
              </p>
            </div>
          </div>

          {/* Payment Section */}
          <div className="w-full lg:w-3/5 space-y-6">
            <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Payment Method</h3>

              <div className="flex flex-col space-y-4">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="credit-card"
                    checked={selectedPayment === "credit-card"}
                    onChange={() => setSelectedPayment("credit-card")}
                    className="form-radio text-blue-600"
                  />
                  <FiCreditCard className="w-6 h-6 text-gray-700" />
                  <span className="ml-2 font-medium">Stripe</span>
                </label>
                {selectedPayment === "credit-card" && (
                  <p className="text-gray-600 italic">
                    You will be redirected to Stripe to complete your payment.
                  </p>
                )}

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={selectedPayment === "paypal"}
                    onChange={() => setSelectedPayment("paypal")}
                    className="form-radio text-blue-600"
                  />
                  <FaPaypal className="w-6 h-6 text-gray-700" />
                  <span className="ml-2 font-medium">PayPal</span>
                </label>

                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={selectedPayment === "cash"}
                    onChange={() => setSelectedPayment("cash")}
                    className="form-radio text-blue-600"
                  />
                  <FiDollarSign className="w-6 h-6 text-gray-700" />
                  <span className="ml-2 font-medium">Cash on Delivery</span>
                </label>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
              <h4 className="text-lg font-semibold">Total:</h4>
              <p className="text-xl font-bold text-green-600">
                ${getTotalCartAmount().toFixed(2)}
              </p>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isProcessing}
              className={`w-full py-4 rounded-xl font-semibold text-white transition-colors duration-300 ${
                isProcessing
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {isProcessing ? "Processing..." : "Checkout"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
