import React from "react";
import hand_icon from "../../assets/hand_icon.png";
import p8 from "../../assets/p8.webp";
import arrow_icon from "../../assets/arrow_icon.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-400 via-green-100 to-white font-sans">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-green-300 blur-[80px] animate-float-1"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-yellow-200 blur-[80px] animate-float-2"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-green-200 blur-[60px] animate-float-3"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-12 min-h-screen">
        {/* Text content */}
        <div className="flex-1 space-y-8 px-8">
          {/* Badge */}
          <div className="animate-fade-in-up inline-block px-5 py-2 bg-white rounded-full shadow-md">
            <span className="text-lg font-bold text-green-600 tracking-wide">Best Deals! Best Prices!</span>
          </div>

          {/* Headings with staggered animation */}
          <h1 className="space-y-2">
            <span className="animate-fade-in-up block text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight [animation-delay:0.2s]">
              New <img src={hand_icon} alt="hand" className="inline h-14 md:h-16 animate-wiggle ml-2 align-middle" />
            </span>
            <span className="animate-fade-in-up block text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight [animation-delay:0.3s]">
              Collections
            </span>
            <span className="animate-fade-in-up block text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight [animation-delay:0.4s]">
              For Everyone
            </span>
          </h1>

          {/* CTA Button */}
          <button className="animate-fade-in-up [animation-delay:0.5s] relative group overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-lg font-bold shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <span className="relative z-10 flex items-center">
              Latest Collection
              <img src={arrow_icon} alt="arrow" className="h-6 ml-3 transition-transform duration-300 group-hover:translate-x-2" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
          </button>
        </div>

        {/* Product image */}
        <div className="flex-1 flex justify-center relative max-w-2xl">
          <img 
            src={p8} 
            alt="hero" 
            className="w-full max-w-md md:max-w-lg animate-float-4 z-10 relative" 
          />
          <div className="absolute inset-0 bg-green-200 rounded-full blur-[60px] opacity-60 -z-10 translate-y-10"></div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, -20px) rotate(5deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-20px, 20px) rotate(-5deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(15px, -15px); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float-1 { animation: float-1 12s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 15s ease-in-out infinite reverse; }
        .animate-float-3 { animation: float-3 10s ease-in-out infinite 2s; }
        .animate-float-4 { animation: float-4 6s ease-in-out infinite; }
        .animate-wiggle { animation: wiggle 2s ease-in-out infinite; }
        .animate-fade-in-up { 
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;