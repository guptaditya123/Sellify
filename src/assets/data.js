// data_product.js - Updated with all men's and women's items
import p1_img from '../assets/p1.jfif';
import p2_img from '../assets/p2.jfif';
import p3_img from '../assets/p3.avif';
import p4_img from '../assets/p4.jfif';
import men1_img from '../assets/men1.webp';
import men2_img from '../assets/men2.jpg';
import men3_img from '../assets/men3.webp';
import men4_img from '../assets/men4.jfif';

const data_product = [
  {
    id: 1,
    name: "Kurti",
    category: "women",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5
  },
  { 
    id: 2, 
    name: "Slim Fit Jeans", 
    category: "men", 
    image: p2_img, 
    new_price: 60.0, 
    old_price: 90.5 
  },
  { 
    id: 3, 
    name: "Saree", 
    category: "women", 
    image: p3_img, 
    new_price: 75.0, 
    old_price: 120.0 
  },
  { 
    id: 4, 
    name: "Bomber Jacket", 
    category: "men", 
    image: p4_img, 
    new_price: 90.0, 
    old_price: 140.0 
  },
  {
    id: 5,
    name: "Cotton T-Shirt",
    category: "men",
    image: men1_img,
    new_price: 25.0,
    old_price: 40.0
  },
  {
    id: 6,
    name: "Denim Shirt",
    category: "men",
    image: men2_img,
    new_price: 45.0,
    old_price: 65.0
  },
  {
    id: 7,
    name: "Zip Hoodie",
    category: "men",
    image: men3_img,
    new_price: 55.0,
    old_price: 85.0
  },
  {
    id: 8,
    name: "Formal Shirt",
    category: "men",
    image: men4_img,
    new_price: 60.0,
    old_price: 90.0
  }
];

// Add validation to ensure no duplicate IDs
const validateData = (data) => {
  const ids = new Set();
  data.forEach(item => {
    if (ids.has(item.id)) {
      console.error(`Duplicate ID found: ${item.id}`);
    }
    ids.add(item.id);
    
    if (!item.category) {
      console.error(`Missing category for item ${item.id}`);
    }
  });
};

validateData(data_product);

export default data_product;