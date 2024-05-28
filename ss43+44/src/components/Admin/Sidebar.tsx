import React from 'react';
import {
  FaTachometerAlt, FaShoppingCart, FaChartLine, FaBitcoin, FaHandsHelping, FaHeart, FaDumbbell, FaCog, FaAppStore, FaElementor, FaWpforms, FaPlug, FaTable
} from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white  p-4 w-64">
      <div className="mb-8">
        <div>
          <div className="flex items-center space-x-2">
            <FaTachometerAlt />
            <span className="block w-full text-left">Dashboard  </span>
            <span>🔼</span>
          </div>
          <div className="ml-6 mt-2 space-y-2">
            <div className="flex items-center space-x-2">
              <FaShoppingCart />
              <button className="block w-full text-left">Commerce</button>
            </div>
            <div className="flex items-center space-x-2">
              <FaChartLine />
              <button className="block w-full text-left">Analytics</button>
            </div>
            <div className="flex items-center space-x-2">
              <FaBitcoin />
              <button className="block w-full text-left">Crypto</button>
            </div>
            <div className="flex items-center space-x-2">
              <FaHandsHelping />
              <button className="block w-full text-left">Helpdesk</button>
            </div>
            <div className="flex items-center space-x-2">
              <FaHeart />
              <button className="block w-full text-left">Monitoring</button>
            </div>
            <div className="flex items-center space-x-2">
              <FaDumbbell />
              <button className="block w-full text-left">Fitness</button>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center space-x-2">
            <FaAppStore />
            <span className="block w-full text-left">Application  </span>
            <span>🔽</span>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center space-x-2">
            <FaElementor />
            <span className="block w-full text-left">Elements  </span>
            <span>🔽</span>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center space-x-2">
            <FaWpforms />
            <span className="block w-full text-left">Forms  </span>
            <span>🔽</span>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center space-x-2">
            <FaPlug />
            <span className="block w-full text-left">Plugins  </span>
            <span>🔽</span>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center space-x-2">
            <FaTable />
            <span className="block w-full text-left">Datagrid  </span>
            <span>🔽</span>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center space-x-2">
            <FaCog />
            <span className="block w-full text-left">Settings  </span>
            <span>🔽</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
