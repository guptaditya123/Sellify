import React from 'react'

const NewsLetter = () => {
  return (
    <div className="w-full md:w-4/5 lg:w-3/5 h-80 flex flex-col items-center justify-center mx-auto my-0 px-4 md:px-36 mb-36 bg-gradient-to-b from-pink-100 to-green-50/10 gap-8">
      <h1 className="text-gray-700 text-4xl md:text-5xl font-semibold text-center">
        Get Exclusive Offers on Your Email
      </h1>
      <p className="text-gray-700 text-lg md:text-xl">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="flex items-center justify-between bg-white w-full max-w-3xl h-20 rounded-full border border-gray-200">
        <input
          type="email"
          placeholder="Your Email id"
          className="w-full md:w-96 ml-6 md:ml-8 border-none outline-none"
        />
        <button className="w-52 h-20 rounded-full bg-black text-white text-base cursor-pointer hover:bg-gray-800 transition-colors">
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default NewsLetter