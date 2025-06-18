// RelatedProduct.jsx
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Item from '../item/Item';
import data_product from '../../assets/data';

const RelatedProduct = ({ currentCategory = 'men' }) => {
  // Normalize category and filter
  const normalizedCategory = currentCategory?.toLowerCase() || 'men';
  const relatedItems = data_product.filter(item => 
    item?.category?.toLowerCase() === normalizedCategory
  );

  // Carousel settings
  const settings = {
    dots: true,
    infinite: relatedItems.length > 1,
    speed: 500,
    slidesToShow: Math.min(4, relatedItems.length),
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: Math.min(3, relatedItems.length) }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: Math.min(2, relatedItems.length) }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, arrows: false }
      }
    ]
  };

  return (
    <div className="related-products my-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">Related Products</h2>
      <hr className="w-20 mx-auto border-2 border-orange-500 mb-8" />
      
      {relatedItems.length > 0 ? (
        <div className="relative px-8">
          <Slider {...settings}>
            {relatedItems.map((item) => (
              <div key={`${item.id}-${item.category}`} className="px-2">
                <Item {...item} />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No {normalizedCategory} products found.
        </p>
      )}
    </div>
  );
};

// Improved arrow components
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="next-arrow absolute -right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10 focus:outline-none transition-all hover:scale-110"
    aria-label="Next product"
  >
    →
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="prev-arrow absolute -left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10 focus:outline-none transition-all hover:scale-110"
    aria-label="Previous product"
  >
    ←
  </button>
);

export default React.memo(RelatedProduct);