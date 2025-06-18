import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Shop from "./Pages/Shop";
import Navbar from "./Components/Navbar/Navbar";
import ShopCategory from "./Pages/ShopCategory";
import Footer from "./Components/footer/Footer";
import mens_banner from "./assets/banner.jpg";
import women_banner from "./assets/women_banner.avif";
import kid_banner from "./assets/kids_banner.jpg";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";
import OrderConfirmation from "./Components/OrderConfirmation";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={mens_banner} category={"men"} />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={women_banner} category={"women"} />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category={"kid"} />}
          />
          <Route
            path="/product"
            element={<ProductDetails />}
            category={"products"}
          />
          <Route
            path="/product/:productId"
            element={<ProductDetails />}
            category={"products"}
          />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
