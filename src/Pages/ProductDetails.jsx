import React, { useContext } from 'react'
import { ShopContext } from '../Context/Context'
import { useParams } from 'react-router-dom';
import BredCrums from '../Components/BredCrums/BredCrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import RelatedProduct from '../Components/RelatedProducts/RelatedProduct';
const ProductDetails = () => {
    const {all_product} =useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id === parseInt(productId))
      console.log("Current Product Category:", product.category); // Debug log

  return (
    <div>
        <BredCrums product={product} />
        <ProductDisplay product = {product} />
        <RelatedProduct currentCategory={product.category}/>
     </div>
  )
}

export default ProductDetails