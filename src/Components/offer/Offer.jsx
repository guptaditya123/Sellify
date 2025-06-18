import React from "react";
import exclusive from '../../assets/exclusive.webp';

const Offer = () => {
  return (
    <div className="w-full bg-gradient-to-br from-[#fff9f9] to-[#ffebeb] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-8 animate-fade-in-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            <span className="block">Exclusive</span>
            <span className="block text-red-600">Offers For You</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-600 font-medium">
            ONLY ON BEST SELLERS PRODUCTS
          </p>
          
          <button className="group relative overflow-hidden px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <span className="relative z-10 flex items-center">
              Check Now
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-3 transition-transform duration-300 group-hover:translate-x-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center animate-fade-in-right">
          <div className="relative max-w-xl w-full">
            <img 
              src={exclusive} 
              alt="Exclusive offer" 
              className="w-full h-auto object-contain z-10 relative transform transition-transform duration-500 hover:scale-105 drop-shadow-2xl" 
            />
            <div className="absolute -inset-8 bg-red-100 rounded-full blur-3xl opacity-40 -z-10"></div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        .animate-fade-in-left {
          animation: fade-in-left 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards 0.2s;
        }
      `}</style>
    </div>
  );
};

export default Offer;