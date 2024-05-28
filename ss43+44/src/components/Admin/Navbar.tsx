import React from 'react';
import { FaHome, FaClipboardList, FaThList, FaCog } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="p-4 flex justify-between items-center border-b border-gray-700">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1">
            <FaHome />
            <span>Home</span>
          </button>
          <button className="flex items-center space-x-1">
            <FaClipboardList />
            <span>Contents</span>
          </button>
          <button className="flex items-center space-x-1">
            <FaThList />
            <span>Categories</span>
          </button>
          <button className="flex items-center space-x-1">
            <FaCog />
            <span>Settings</span>
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.j1JwxgWAI4yZpNGLfy5ihgHaHa&pid=Api&P=0&h=180"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <span>Admin</span>
        </div>
      </div>
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button className="bg-white text-gray-800 px-4 py-2 rounded shadow">
            + New Item
          </button>
          <span className="text-gray-400">|</span>
          <span>Add new post</span>
          <button className="text-gray-500">+ Add Content</button>
          <button className="text-gray-500">⚙ Settings</button>
        </div>
        <div className="relative">
          <input
            type="text"
            className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700"
            placeholder="Search content..."
          />
          <button className="absolute right-2 top-2">
            🔍
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
