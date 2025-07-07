import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import bgImage from '../assets/dashboard.jpg';

const semesters = ["Semester 1", "Semester 2", "Semester 3", "Semester 4", "Semester 5", "Semester 6", "Semester 7", "Semester 8"];
const categories = ["Syllabus", "Notes", "Resources", "PYQ"];

export default function UserDashboard() {
  const [selectedDept, setSelectedDept] = useState("CSE");
  const [selectedSem, setSelectedSem] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className="flex flex-col md:flex-row min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Desktop sidebar */}
      <div className="hidden md:block">
        <Sidebar selectedDept={selectedDept} onSelect={setSelectedDept} />
      </div>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-80 md:hidden flex">
          <div className="bg-gray-900 w-64 p-4 overflow-y-auto">
            <Sidebar selectedDept={selectedDept} onSelect={(dept) => {
              setSelectedDept(dept);
              setSidebarOpen(false);
            }} />
          </div>
          <div className="flex-1" onClick={() => setSidebarOpen(false)} />
        </div>
      )}

      <div className="w-full md:ml-64 bg-black bg-opacity-60">
        <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <div className="p-4 sm:p-6 text-white">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Department: <span className="text-blue-300">{selectedDept}</span>
          </h1>

          {!selectedSem ? (
            <>
              <h2 className="text-xl text-blue-400 mb-4">Select a Semester</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {semesters.map((sem, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedSem(sem)}
                    className="bg-gray-800 bg-opacity-80 text-center py-6 sm:py-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer border border-blue-400"
                  >
                    <span className="text-base sm:text-lg font-semibold text-blue-200">{sem}</span>
                    <p className="text-sm text-gray-300 mt-2">Unlock All - ₹799/-</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <h2 className="text-xl text-blue-400 mb-4">{selectedSem} - Unlock Access</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {categories.map((cat) => (
                  <div
                    key={cat}
                    className="bg-gray-800 bg-opacity-80 text-center py-6 sm:py-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer border border-yellow-400"
                  >
                    <span className="text-base sm:text-lg font-semibold text-yellow-200">🔒 {cat}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center">
                <p className="text-lg text-white font-semibold bg-blue-600 inline-block px-6 py-2 rounded-full shadow cursor-pointer">Total Price: ₹799/-</p>
              </div>
              <div className="mt-10 text-right">
                <button
                  onClick={() => setSelectedSem(null)}
                  className="bg-white text-black font-bold px-4 py-2 rounded-full shadow-md transition"
                >
                  ← Back
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
