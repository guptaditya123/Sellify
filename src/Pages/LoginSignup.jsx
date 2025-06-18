import React, { useState, useContext, useCallback } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { ShopContext } from "../Context/Context";
import { FiLogOut, FiUser, FiMail, FiLock, FiCheck } from "react-icons/fi";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [justLoggedIn, setJustLoggedIn] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [logoutProgress, setLogoutProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { isLoggedIn, login, logout } = useContext(ShopContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleLogout = () => {
    setIsLoggingOut(true);
    setLogoutProgress(0);
    
    // Simulate a progressive logout with buffer animation
    const interval = setInterval(() => {
      setLogoutProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Actual logout action
          logout();
          setMessage("✅ Successfully logged out");
          setTimeout(() => navigate("/"), 800);
          return 100;
        }
        return prev + 10;
      });
    }, 150); // Adjust timing for smoother/faster animation
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const endpoint = isLogin ? "login" : "signup";

    try {
      const { data } = await axios.post(
        `http://localhost:5000/api/auth/${endpoint}`,
        form
      );

      if (isLogin) {
        login(data.token);
        setMessage("✅ Login successful!");
        setJustLoggedIn(true);

        setTimeout(() => {
          const from = location.state?.from?.pathname || "/";
          navigate(from, { replace: true });
        }, 1200);
      } else {
        setMessage("✅ Account created! Please log in.");
        setIsLogin(true);
        setForm({ name: "", email: "", password: "" });
      }
    } catch (err) {
      setMessage("❌ " + (err.response?.data?.message || "Something went wrong."));
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleMode = () => {
    setIsLogin((prev) => !prev);
    setMessage("");
    setForm({ name: "", email: "", password: "" });
  };

  const renderMessage = () => (
    message && (
      <div
        className={`mb-4 text-center text-sm p-3 rounded-lg ${
          message.startsWith("✅") 
            ? "text-green-700 bg-green-100" 
            : "text-red-700 bg-red-100"
        }`}
      >
        {message}
      </div>
    )
  );

  const inputStyle =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200";

  // if (isLoggedIn && !justLoggedIn) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-white px-4">
  //       <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl w-full max-w-md text-center">
  //         <div className="mb-6 flex justify-center">
  //           <div className="bg-blue-100 p-4 rounded-full">
  //             <FiUser className="text-blue-600 text-3xl" />
  //           </div>
  //         </div>
  //         <h2 className="text-3xl font-bold text-gray-800 mb-6">
  //           You're Logged In! 👋
  //         </h2>
          
  //         {renderMessage()}
          
  //         <div className="space-y-4">
  //           <button
  //             onClick={() => navigate("/profile")}
  //             className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-lg flex items-center justify-center gap-2"
  //           >
  //             <FiUser /> View Profile
  //           </button>
            
  //           <button
  //             onClick={handleLogout}
  //             disabled={isLoggingOut}
  //             className="w-full py-3 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold text-lg relative overflow-hidden"
  //           >
  //             <div className="flex items-center justify-center gap-2 relative z-10">
  //               {isLoggingOut ? (
  //                 <>
  //                   <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
  //                   <span>Logging Out ({logoutProgress}%)</span>
  //                 </>
  //               ) : (
  //                 <>
  //                   <FiLogOut /> Logout
  //                 </>
  //               )}
  //             </div>
              
  //             {isLoggingOut && (
  //               <div 
  //                 className="absolute bottom-0 left-0 h-full bg-red-700 transition-all duration-150"
  //                 style={{ width: `${logoutProgress}%` }}
  //               ></div>
  //             )}
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-white px-4">
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl w-full max-w-md">
        <div className="mb-6 flex justify-center">
          <div className="bg-blue-100 p-4 rounded-full">
            <FiUser className="text-blue-600 text-3xl" />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          {isLogin ? "Welcome Back 👋" : "Create an Account 🚀"}
        </h2>
        <p className="text-center text-gray-600 mb-6">
          {isLogin ? "Sign in to continue" : "Join us today"}
        </p>

        {renderMessage()}

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                <FiUser className="inline mr-2" />
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className={inputStyle}
              />
            </div>
          )}

          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              <FiMail className="inline mr-2" />
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className={inputStyle}
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              <FiLock className="inline mr-2" />
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              minLength="6"
              className={inputStyle}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-lg flex items-center justify-center gap-2 ${
              isSubmitting ? "opacity-80" : ""
            }`}
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : isLogin ? (
              "Login"
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={toggleMode}
            className="text-blue-600 hover:text-blue-800 ml-1 cursor-pointer font-medium"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;