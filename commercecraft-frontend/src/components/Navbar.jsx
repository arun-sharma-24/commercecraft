import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { authUser, logout } = useAuth(); // ✅ logout now properly received
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // ✅ calls logout from context
    navigate("/");
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white tracking-wide">
          🛍️ CommerceCraft
        </Link>
        <div className="space-x-4 text-sm">
          {authUser ? (
            <>
              <Link
                to="/products"
                className="hover:text-blue-400 transition duration-200"
              >
                Products
              </Link>
              <Link
                to="/products/add"
                className="hover:text-blue-400 transition duration-200"
              >
                Add Product
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded transition duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:text-green-400 transition duration-200"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="hover:text-green-400 transition duration-200"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
