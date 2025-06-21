import React from "react";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { authUser } = useAuth();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-blue-100 px-4">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-lg w-full">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4">Welcome to CommerceCraft 🛒</h1>
        {authUser ? (
          <p className="text-lg text-gray-700">
            Hello, <span className="font-semibold text-blue-600">{authUser.name}</span>!<br />
            Explore your dashboard and manage your products with ease.
          </p>
        ) : (
          <p className="text-lg text-gray-600">
            Please <span className="font-semibold text-blue-500">register</span> or{" "}
            <span className="font-semibold text-blue-500">login</span> to access your store.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
