import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import loginBg from '../assets/registerPhoto.jpg';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    const { name, email, mobile, password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      await axios.post("https://makautzone.onrender.com/api/auth/register", {
        name,
        email,
        mobile,
        password,
      });
      alert("Registration Successful");
      window.location.href = "/login";
    } catch (err) {
      alert(err.response?.data?.msg || "Something went wrong");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="animate-slide-in backdrop-blur-lg bg-gray-900/80 text-white p-8 rounded-2xl shadow-2xl w-full max-w-md mx-4 border border-gray-700">

       <div className="mb-6 text-center">
            <Link to="/" className="inline-block bg-white text-blue-700 px-4 py-1.5 rounded-full font-semibold shadow hover:bg-blue-100 transition">Go to Home</Link>
        </div>


        <h2 className="text-2xl font-extrabold text-center text-blue-400 mb-6">
          Create an Account
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="bg-gray-800 border border-gray-600 rounded px-4 py-2 w-full mb-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="bg-gray-800 border border-gray-600 rounded px-4 py-2 w-full mb-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          className="bg-gray-800 border border-gray-600 rounded px-4 py-2 w-full mb-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="bg-gray-800 border border-gray-600 rounded px-4 py-2 w-full mb-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="bg-gray-800 border border-gray-600 rounded px-4 py-2 w-full mb-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
        />

        <button
          onClick={handleRegister}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition"
        >
          Register
        </button>

        <p className="mt-6 text-center text-sm text-gray-300">
          Already have an account?
          <Link to="/login" className="text-blue-400 font-medium ml-1 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
