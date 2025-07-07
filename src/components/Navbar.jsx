import React from 'react';

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="p-4 flex justify-between items-center shadow-md dark:shadow-gray-800">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <div>
        <button onClick={() => setDarkMode(!darkMode)} className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">
          {darkMode ? '🌕 Light' : '🌑 Dark'}
        </button>
      </div>
    </nav>
  );
}
