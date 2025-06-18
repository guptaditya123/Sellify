import React from 'react'
import Hero from '../Components/Hero/Hero'
import Product from '../Components/products/Product'
import Offer from '../Components/offer/Offer'
import NewCollections from '../Components/newCollections/NewCollections'
import Footer from '../Components/footer/Footer' 
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <Hero />
      <Product />
      <Offer />
      <NewCollections />
      <NewsLetter />
    </div>
  )
}

export default Shop