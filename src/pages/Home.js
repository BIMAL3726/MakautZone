import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import collegeImg from '../assets/college.webp';
import { FaCheckCircle } from 'react-icons/fa';

import bibek from '../assets/bibek.png';
import surajit from '../assets/surajit.jpg';
import rohan from '../assets/rohan.jpg';
import zahid from '../assets/zahid.jpg';
import shraban from '../assets/shraban.jpg';
import rahul from '../assets/rahul.jpg';

const teamMembers = [
  {
    name: "Bibek Sarkar",
    role: "Project Manager",
    course: "B.Tech in CSE, 2nd year",
    image: bibek,
  },
  {
    name: "Surajit Pal",
    role: "Technical Leader",
    course: "B.Tech in ECE, 2nd year",
    image: surajit,
  },
  {
    name: "Rohan Hazra",
    role: "Client Representative",
    course: "B.Tech in CSE, 2nd year",
    image: rohan,
  },
  {
    name: "MD ZAHID ANSARI",
    role: "Full stack Developer",
    course: "B.Tech in CSE - AI, 2nd year",
    image: zahid,
  },
  {
    name: "SHRABAN SINGHA",
    role: "Financial Analyst",
    course: "B.Tech in EE, 2nd year",
    image: shraban,
  },
  {
    name: "RAHUL SAW",
    role: "Business Analyst",
    course: "B.Tech in CSE - AI",
    image: rahul,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-14 bg-opacity-30 bg-white/10 backdrop-blur-lg rounded-b-3xl shadow-lg">
        <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
          <h1 className="text-3xl font-extrabold mb-6 leading-tight text-white drop-shadow">
            Welcome to <span className="text-cyan-400">MAKAUTzone</span>
          </h1>
          <p className="text-lg leading-relaxed text-white">
            MAKAUTzone is your academic companion – crafted for students across all departments.
            Easily access structured materials like syllabus, notes, reference resources, and previous year questions for departments including CSE, ECE, ME, CE, AE, IT, and EE etc.
          </p>
          <p className="mt-4 text-sm text-white">
            Our goal is to centralize essential academic resources in one portal so you can spend less time searching and more time learning.
            MAKAUTzone is responsive, and student-friendly.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/register" className="bg-cyan-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-cyan-600 transition">
              Register
            </Link>
            <Link to="/login" className="bg-white text-cyan-700 px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-200 transition">
              Login
            </Link>
          </div>
        </div>

        <div className="md:w-1/2" data-aos="fade-left">
          <img src={collegeImg} alt="College" className="rounded-2xl shadow-xl border-4 border-white/20" />
        </div>
      </div>

    
      <div className="px-6 md:px-20 py-10 text-center bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-3xl">
        <h2 className="text-3xl font-bold mb-10 text-cyan-300">What You Get</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto text-gray-300">
          {[
            "Organized by department for instant access",
            "Up-to-date syllabus and previous year questions",
            "Smart, responsive UI for all devices",
            "Downloadable resources and notes",
            "Detailed notes and study material"
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-lg shadow hover:shadow-xl transition">
              <FaCheckCircle className="text-cyan-400 mt-1" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-20 py-10 text-center bg-gray-900">
        <h2 className="text-3xl font-bold mb-10 text-cyan-300">Our Project Team Members
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-4 shadow-lg hover:shadow-xl transition">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full border-4 border-cyan-400 object-cover shadow"
              />
              <h3 className="text-xl mt-4 font-semibold text-cyan-300">{member.name}</h3>
              <p className="text-sm text-gray-200 font-bold">{member.role}</p>
              <p className="text-sm text-teal-400 italic">{member.course}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
