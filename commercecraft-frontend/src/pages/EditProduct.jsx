import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';

const EditProduct = () => {
  const [product, setProduct] = useState({ name: '', price: '' });
  const [error, setError] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axiosInstance.get(`/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        setError('Failed to fetch product. Unauthorized or not found.');
      }
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) =>
    setProduct({ ...product, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await axiosInstance.put(`/products/${id}`, product);
      navigate('/products');
    } catch (err) {
      setError('Failed to update product. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-blue-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Edit Product</h2>

        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-100 px-3 py-2 rounded">
            {error}
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter product name"
            value={product.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="price" className="block text-gray-700 font-medium mb-1">
            Price (in ₹)
          </label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Enter product price"
            value={product.price}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-all duration-200"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
