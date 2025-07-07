import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import loginBg from '../assets/loginPhoto.jpg';

export default function Login() {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
      try {
        const res = await axios.post("https://makautzone.onrender.com/api/auth/login", {
          mobile,
          password,
        });
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/dashboard");
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
          Login to MAKAUTzone
        </h2>

        <input
          type="text"
          placeholder="Mobile Number"
          className="bg-gray-800 border border-gray-600 rounded px-4 py-2 w-full mb-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setMobile(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-gray-800 border border-gray-600 rounded px-4 py-2 w-full mb-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition"
        >
          Login
        </button>
        <p className="mt-6 text-center text-sm text-gray-300">
          Don't have an account?
          <Link to="/register" className="text-blue-400 font-medium ml-1 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
