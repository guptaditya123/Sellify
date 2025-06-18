import React, { useContext, useState } from 'react'
import { ShopContext } from '../Context/Context'
import { FiChevronDown, FiFilter } from "react-icons/fi";
import Item from '../Components/item/Item'
import { motion } from 'framer-motion'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext)
  const [sortOpen, setSortOpen] = useState(false)
  const [activeSort, setActiveSort] = useState('Default')
  
  const sortOptions = [
    'Default', 'Price: Low to High', 
    'Price: High to Low', 'Newest', 'Popular'
  ]

  const filteredProducts = all_product.filter(item => props.category === item.category)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Banner with Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden mb-10 shadow-lg"
      >
        <img 
          src={props.banner} 
          alt="Category Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white capitalize">
            {props.category}
          </h1>
        </div>
      </motion.div>

      {/* Filter and Sort Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <p className="text-gray-600">
          Showing <span className="font-bold text-gray-900">{filteredProducts.length}</span> products
        </p>
        
        <div className="relative">
          <button 
            onClick={() => setSortOpen(!sortOpen)}
            className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all"
          >
            <FiFilter className="text-gray-600" />
            <span className="text-gray-700">{activeSort}</span>
            <FiChevronDown className={`transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {sortOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg z-10 overflow-hidden"
            >
              {sortOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveSort(option)
                    setSortOpen(false)
                  }}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${
                    activeSort === option ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {option}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {filteredProducts.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Item 
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      {filteredProducts.length > 8 && (
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all">
            <span className="relative z-10">Load More Products</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
          <p className="mt-4 text-gray-500">Showing 8 of {filteredProducts.length} products</p>
        </motion.div>
      )}
    </div>
  )
}

export default ShopCategory