import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-black/60 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center border-b border-gray-800 shadow-lg z-20">
  
      <div className="text-2xl font-extrabold text-blue-400 tracking-wide">
        <Link to={user ? "/dashboard" : "/"} className="hover:text-white transition">
          MAKAUT<span className="text-white">zone</span>
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        {user ? (
          <>
            {/* this is welcome  + avatar */}
            <div className="hidden sm:flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white uppercase shadow-inner">
                {user.name?.[0] || "U"}
              </div>
              <span className="text-blue-300 font-medium">Hi, {user.name.split(" ")[0]}</span>
            </div>
            
            <button
              onClick={handleLogout}
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm transition duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-blue-300 hover:text-white px-3 py-1 rounded transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-blue-300 hover:text-white px-3 py-1 rounded transition"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
