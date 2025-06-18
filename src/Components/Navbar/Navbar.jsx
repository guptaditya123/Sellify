import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.webp";
import cart_icon from "../../assets/cart_icon.png";
import { Menu, X, LogOut, Loader2 } from "lucide-react";
import "./Navbar.css";
import { ShopContext } from "../../Context/Context";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const { getTotalCartItems, isLoggedIn, logout } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setShowLogoutConfirm(false);
    setIsLoggingOut(true);
    
    // Simulate API call delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    logout();
    setIsLoggingOut(false);
    navigate("/");
  };

  const handleCartClick = () => {
    if (isLoggedIn) {
      navigate("/cart");
    } else {
      setShowLoginPrompt(true);
    }
  };

  const handleLoginRedirect = () => {
    setShowLoginPrompt(false);
    navigate("/login");
  };

  return (
    <div className="bg-white shadow-md font-poppins w-full relative">
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="ReBazaar" className="h-12" />
          <h1 className="text-2xl font-bold text-gray-800">ReBazaar</h1>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-14 text-2xl items-center">
          <NavLink
            to="/"
            end
            onClick={() => window.scrollTo(0, 0)}
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "text-gray-700 hover:text-blue-500 transition-colors"
            }
          >
            Home
          </NavLink>
          {[
            { to: "/mens", label: "Men" },
            { to: "/women", label: "Women" },
            { to: "/kids", label: "Kids" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                  : "text-gray-700 hover:text-blue-500 transition-colors"
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Login / Logout & Cart */}
        <div className="flex items-center gap-12 relative">
          {isLoggedIn ? (
            <button
              onClick={() => setShowLogoutConfirm(true)}
              disabled={isLoggingOut}
              className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoggingOut ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Logging Out...
                </>
              ) : (
                <>
                  <LogOut size={20} />
                  Logout
                </>
              )}
            </button>
          ) : (
            <NavLink
              to="/login"
              className="hidden md:block px-12 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              Login
            </NavLink>
          )}

          <div className="relative">
            <button onClick={handleCartClick}>
              <img
                src={cart_icon}
                alt="Cart"
                className="h-10 cursor-pointer hover:scale-105 transition-transform"
              />
            </button>
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-[2px] rounded-full">
              {getTotalCartItems()}
            </div>
          </div>

          {/* Hamburger menu */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            disabled={isLoggingOut}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 text-lg">
          <NavLink
            to="/"
            end
            onClick={() => {
              window.scrollTo(0, 0);
              setMenuOpen(false);
            }}
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "text-gray-700 hover:text-blue-500 transition-colors"
            }
          >
            Home
          </NavLink>
          {[
            { to: "/mens", label: "Men" },
            { to: "/women", label: "Women" },
            { to: "/kids", label: "Kids" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                  : "text-gray-700 hover:text-blue-500 transition-colors"
              }
            >
              {label}
            </NavLink>
          ))}

          {isLoggedIn ? (
            <button
              onClick={() => setShowLogoutConfirm(true)}
              disabled={isLoggingOut}
              className="flex items-center justify-center gap-2 px-6 py-2 rounded-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoggingOut ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Logging Out...
                </>
              ) : (
                <>
                  <LogOut size={20} />
                  Logout
                </>
              )}
            </button>
          ) : (
            <NavLink
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200 text-center"
            >
              Login
            </NavLink>
          )}
        </div>
      )}

      {/* Login Required Modal */}
      {showLoginPrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/10 backdrop-blur-[6px]">
          <div className="bg-white/40 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl p-10 text-center w-[90%] max-w-sm animate-scaleIn">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              To proceed, you have to login
            </h2>
            <button
              onClick={handleLoginRedirect}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:from-purple-700 hover:to-indigo-700 transition duration-200"
            >
              Proceed to Login
            </button>
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-sm w-[90%] animate-scaleIn">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Confirm Logout
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to log out of your account?
            </p>
            <div className="flex gap-4 justify-end">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition flex items-center gap-2"
              >
                {isLoggingOut ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : (
                  <LogOut size={18} />
                )}
                {isLoggingOut ? "Logging Out..." : "Logout"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;