import React from "react";
import logo from "../../assets/logo.webp";
import instagram_icon from "../../assets/instagram.png";
import facebook_icon from "../../assets/facebook.png";
import whatsapp_icon from "../../assets/whatsapp.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Shopify Logo" className="h-10" />
              <span className="text-2xl font-bold text-white">SELLIFY</span>
            </div>
            <p className="text-gray-400">
              Your one-stop destination for quality products and exceptional
              service since 2010.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gradient-to-br from-purple-600 via-pink-600 to-yellow-500 p-2 rounded-full hover:opacity-80 transition duration-300"
              >
                <img
                  src={instagram_icon}
                  alt="Instagram"
                  className="h-6 w-6 filter brightness-0 invert"
                />
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="bg-blue-600 p-2 rounded-full hover:opacity-80 transition duration-300"
              >
                <img
                  src={facebook_icon}
                  alt="Facebook"
                  className="h-6 w-6 filter brightness-0 invert"
                />
              </a>

              {/* WhatsApp */}
              <a
                href="#"
                className="bg-green-500 p-2 rounded-full hover:opacity-80 transition duration-300"
              >
                <img
                  src={whatsapp_icon}
                  alt="WhatsApp"
                  className="h-6 w-6 filter brightness-0 invert"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Shipping Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Return Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>123 Main Street, New York, NY 10001</p>
              <p>Email: info@shopify.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Hours: Mon-Fri 9am-6pm EST</p>
            </address>
            <div>
              <h4 className="text-white mb-2">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-900"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods and Copyright */}
      </div>
    </footer>
  );
};

export default Footer;
