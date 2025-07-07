import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-200 text-black font-bold text-center py-4 mt-auto">
      <p className="text-sm">&copy; {new Date().getFullYear()} Bibek Sarkar. All rights reserved.</p>
    </footer>
  );
}
