import p1_img from "../assets/women1.jfif";
import p2_img from "../assets/men1.webp";
import p3_img from "../assets/women2.jpg";
import p4_img from "../assets/men2.jpg";
import p5_img from "../assets/men3.webp";
import p6_img from "../assets/women3.jpg";
import p7_img from "../assets/men4.jfif";
import p8_img from "../assets/women4.webp";
import p9_img from "../assets/men5.webp";
import p10_img from "../assets/women5.webp";
import p11_img from "../assets/men6.webp";
import p12_img from "../assets/women6.webp";
import p13_img from "../assets/men7.jfif";
import p14_img from "../assets/women7.webp";
import p15_img from "../assets/men8.jpg";
import p16_img from "../assets/women8.jfif";
// import p17_img from '../assets/p1.jpg'
// import p18_img from '../assets/p1.jpg'
// import p19_img from '../assets/p1.jpg'
// import p20_img from '../assets/p1.jpg'
import p21_img from "../assets/kid1.jpg";
// import p22_img from '../assets/p1.jpg'
import p23_img from "../assets/kid2.jfif";
// import p24_img from '../assets/p1.jpg'
import p25_img from "../assets/kid3.jfif";
// import p26_img from '../assets/p1.jpg'
import p27_img from "../assets/kid4.webp";
// import p28_img from '../assets/p1.jpg'
import p29_img from "../assets/kid5.jfif";
// import p30_img from '../assets/p1.jpg'
import p31_img from "../assets/kid6.jfif";
// import p32_img from '../assets/p1.jpg'
import p33_img from "../assets/kid7.webp";
// import p34_img from '../assets/p1.jpg'
import p35_img from "../assets/kid8.jfif";
// import p36_img from '../assets/p1.jpg'
let all_product = [
  {
    id: 1,
    name: "Floral Print Kurti",
    category: "women",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
    sizes: ["S", "M", "L", "XL"],
    description:
      "Beautiful floral print kurti with comfortable cotton fabric. Perfect for casual outings and summer wear.",
    reviews: [
      { user: "Priya S.", rating: 4, comment: "Lovely fabric and fit!" },
      {
        user: "Anjali M.",
        rating: 5,
        comment: "The colors are more vibrant than shown.",
      },
    ],
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    category: "men",
    image: p2_img,
    new_price: 60.0,
    old_price: 90.5,
    sizes: ["28", "30", "32", "34", "36"],
    description:
      "Premium denim jeans with stretch technology for maximum comfort and style.",
    reviews: [
      {
        user: "Rahul K.",
        rating: 5,
        comment: "Perfect fit and very comfortable.",
      },
      {
        user: "Vikram P.",
        rating: 4,
        comment: "Good quality but runs slightly large.",
      },
    ],
  },
  {
    id: 3,
    name: "Silk Saree",
    category: "women",
    image: p3_img,
    new_price: 75.0,
    old_price: 120.0,
    sizes: ["Free Size"],
    description:
      "Elegant silk saree with intricate zari work. Ideal for weddings and special occasions.",
    reviews: [
      {
        user: "Neha G.",
        rating: 5,
        comment: "Absolutely stunning! Worth every penny.",
      },
    ],
  },
  {
    id: 4,
    name: "Bomber Jacket",
    category: "men",
    image: p4_img,
    new_price: 90.0,
    old_price: 140.0,
    sizes: ["S", "M", "L", "XL"],
    description:
      "Trendy bomber jacket with water-resistant outer layer and soft inner lining.",
    reviews: [
      { user: "Arjun S.", rating: 4, comment: "Great for chilly evenings." },
      { user: "Karan M.", rating: 5, comment: "Excellent quality and fit." },
    ],
  },
  {
    id: 5,
    name: "Cotton T-Shirt",
    category: "men",
    image: p5_img,
    new_price: 45.0,
    old_price: 70.0,
    sizes: ["S", "M", "L", "XL"],
    description:
      "100% cotton crew neck t-shirt available in multiple colors. Breathable and comfortable.",
    reviews: [
      {
        user: "Amit R.",
        rating: 5,
        comment: "Very soft fabric, true to size.",
      },
    ],
  },
  {
    id: 6,
    name: "Summer Dress",
    category: "women",
    image: p6_img,
    new_price: 85.0,
    old_price: 130.0,
    sizes: ["S", "M", "L"],
    description:
      "Lightweight summer dress with floral pattern and comfortable fit.",
    reviews: [
      { user: "Divya P.", rating: 5, comment: "Perfect for summer vacations!" },
      {
        user: "Shreya K.",
        rating: 4,
        comment: "Beautiful design but slightly long.",
      },
    ],
  },
  {
    id: 7,
    name: "Zip Hoodie",
    category: "men",
    image: p7_img,
    new_price: 95.0,
    old_price: 150.0,
    sizes: ["S", "M", "L", "XL"],
    description:
      "Premium quality hoodie with front pocket and adjustable drawstrings.",
    reviews: [
      {
        user: "Rohan D.",
        rating: 5,
        comment: "Extremely comfortable and warm.",
      },
    ],
  },
  {
    id: 8,
    name: "Yoga Leggings",
    category: "women",
    image: p8_img,
    new_price: 55.0,
    old_price: 100.0,
    sizes: ["S", "M", "L"],
    description:
      "High-waisted leggings with moisture-wicking fabric for workouts or casual wear.",
    reviews: [
      { user: "Maya T.", rating: 5, comment: "Best leggings I've ever owned!" },
      {
        user: "Pooja S.",
        rating: 4,
        comment: "Great fit but could be more stretchy.",
      },
    ],
  },
  {
    id: 9,
    name: "Formal Shirt",
    category: "men",
    image: p9_img,
    new_price: 70.0,
    old_price: 110.0,
    sizes: ["S", "M", "L", "XL"],
    description:
      "Classic formal shirt with premium cotton fabric and slim fit design.",
    reviews: [
      { user: "Aditya K.", rating: 5, comment: "Perfect for office wear." },
    ],
  },
  {
    id: 10,
    name: "Denim Jumpsuit",
    category: "women",
    image: p10_img,
    new_price: 88.0,
    old_price: 135.0,
    sizes: ["S", "M", "L"],
    description:
      "Trendy denim jumpsuit with adjustable straps and multiple pockets.",
    reviews: [
      {
        user: "Tanvi M.",
        rating: 4,
        comment: "Love the style but runs slightly small.",
      },
    ],
  },
  {
    id: 11,
    name: "Wool Sweater",
    category: "men",
    image: p11_img,
    new_price: 92.0,
    old_price: 145.0,
    sizes: ["S", "M", "L", "XL"],
    description: "Warm wool sweater with crew neck design for winter comfort.",
    reviews: [
      { user: "Nikhil P.", rating: 5, comment: "Very warm and stylish." },
    ],
  },
  {
    id: 12,
    name: "Evening Gown",
    category: "women",
    image: p12_img,
    new_price: 99.0,
    old_price: 160.0,
    sizes: ["S", "M", "L"],
    description:
      "Elegant evening gown with sequin details and flowing silhouette.",
    reviews: [
      {
        user: "Ananya R.",
        rating: 5,
        comment: "Got so many compliments at the party!",
      },
    ],
  },
  {
    id: 13,
    name: "Cargo Shorts",
    category: "men",
    image: p13_img,
    new_price: 40.0,
    old_price: 65.0,
    sizes: ["28", "30", "32", "34"],
    description:
      "Casual cargo shorts with multiple pockets and comfortable fit.",
    reviews: [
      { user: "Vivek S.", rating: 4, comment: "Great for summer outings." },
    ],
  },
  {
    id: 14,
    name: "Crop Top",
    category: "women",
    image: p14_img,
    new_price: 52.0,
    old_price: 85.0,
    sizes: ["S", "M", "L"],
    description: "Stylish crop top with lace detailing and comfortable fabric.",
    reviews: [
      { user: "Ishita M.", rating: 5, comment: "Perfect fit and very trendy." },
    ],
  },
  {
    id: 15,
    name: "Cotton Kurta",
    category: "men",
    image: p15_img,
    new_price: 78.0,
    old_price: 115.0,
    sizes: ["S", "M", "L", "XL"],
    description:
      "Traditional cotton kurta with mandarin collar and side slits.",
    reviews: [
      {
        user: "Rajat K.",
        rating: 5,
        comment: "Very comfortable for daily wear.",
      },
    ],
  },
  {
    id: 16,
    name: "Pleated Skirt",
    category: "women",
    image: p16_img,
    new_price: 73.0,
    old_price: 110.0,
    sizes: ["S", "M", "L"],
    description:
      "Elegant pleated skirt with comfortable waistband and flowing fabric.",
    reviews: [
      {
        user: "Sneha P.",
        rating: 4,
        comment: "Beautiful skirt but needs ironing.",
      },
    ],
  },
  {
    id: 21,
    name: "Denim Shirt",
    category: "kid",
    image: p21_img,
    new_price: 85.0,
    old_price: 140.0,
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
    description:
      "Classic denim shirt for kids with button-down design and chest pocket.",
    reviews: [
      { user: "Parent1", rating: 5, comment: "My son loves this shirt!" },
    ],
  },
  {
    id: 23,
    name: "Cargo Pants",
    category: "kid",
    image: p23_img,
    new_price: 88.0,
    old_price: 130.0,
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
    description:
      "Durable cargo pants with multiple pockets and adjustable waistband.",
    reviews: [
      { user: "Parent2", rating: 4, comment: "Great for active kids." },
    ],
  },
  {
    id: 25,
    name: "School Trousers",
    category: "kid",
    image: p25_img,
    new_price: 76.0,
    old_price: 120.0,
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
    description: "Formal school trousers with reinforced knees for durability.",
    reviews: [
      { user: "Parent3", rating: 5, comment: "Perfect for school uniform." },
    ],
  },
  {
    id: 27,
    name: "Tank Top",
    category: "kid",
    image: p27_img,
    new_price: 49.0,
    old_price: 80.0,
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
    description: "Comfortable cotton tank top for summer playtime.",
    reviews: [
      { user: "Parent4", rating: 4, comment: "Great for hot weather." },
    ],
  },
  {
    id: 29,
    name: "Formal Pants",
    category: "kid",
    image: p29_img,
    new_price: 98.0,
    old_price: 160.0,
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
    description:
      "Elegant formal pants for special occasions and family events.",
    reviews: [{ user: "Parent5", rating: 5, comment: "Perfect for weddings." }],
  },
  {
    id: 31,
    name: "Leather Jacket",
    category: "kid",
    image: p31_img,
    new_price: 150.0,
    old_price: 250.0,
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
    description: "Stylish faux leather jacket for kids with zip closure.",
    reviews: [
      {
        user: "Parent6",
        rating: 5,
        comment: "My daughter looks so cool in this!",
      },
    ],
  },
  {
    id: 33,
    name: "Gym Shorts",
    category: "kid",
    image: p33_img,
    new_price: 55.0,
    old_price: 90.0,
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
    description:
      "Comfortable gym shorts with elastic waistband for active kids.",
    reviews: [
      { user: "Parent7", rating: 4, comment: "Great for sports practice." },
    ],
  },
  {
    id: 35,
    name: "Casual Blazer",
    category: "kid",
    image: p35_img,
    new_price: 105.0,
    old_price: 170.0,
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
    description:
      "Smart casual blazer for kids with notched lapels and two-button closure.",
    reviews: [
      { user: "Parent8", rating: 5, comment: "Perfect for family photos." },
    ],
  },
];

export default all_product;
