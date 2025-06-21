import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 text-center px-4">
      <h1 className="text-7xl font-extrabold text-blue-600 mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-6">Oops! Page Not Found</p>
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow transition duration-200"
      >
        ⬅ Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
