import React from 'react';

const departments = ["CSE", "IT", "ME", "ECE", "CE", "AE", "EE"];

export default function Sidebar({ selectedDept, onSelect }) {
  return (
    <div className="w-64 min-h-screen bg-black/60 backdrop-blur-md text-white font-semibold p-6 fixed left-0 top-0 shadow-xl border-r border-gray-700">
      <h2 className="text-2xl font-extrabold mb-8 text-center text-blue-300">Departments</h2>
      <ul className="space-y-3">
        {departments.map((dept) => (
          <li
            key={dept}
            onClick={() => onSelect(dept)}
            className={`px-4 py-3 rounded-lg cursor-pointer text-center transition duration-300 ${
              selectedDept === dept
                ? 'bg-blue-500 text-white font-bold shadow-md'
                : 'hover:bg-blue-600 hover:text-white bg-gray-800 text-gray-300'
            }`}
          >
            {dept}
          </li>
        ))}
      </ul>
    </div>
  );
}