import React from 'react';
import { FaDollarSign, FaMoneyBillWave, FaUsers, FaShoppingCart, FaEdit, FaTrashAlt, FaExclamationCircle } from 'react-icons/fa';

const Dashboard: React.FC = () => {
  return (
    <div className="p-4 flex-1">
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 shadow rounded flex items-center">
          <FaDollarSign className="text-green-500 text-3xl mr-4" />
          <div>
            <h2 className="text-gray-800">Total Sales</h2>
            <p className="text-gray-600">$2,456</p>
          </div>
        </div>
        <div className="bg-white p-4 shadow rounded flex items-center">
          <FaMoneyBillWave className="text-red-500 text-3xl mr-4" />
          <div>
            <h2 className="text-gray-800">Total Expenses</h2>
            <p className="text-gray-600">$3,326</p>
          </div>
        </div>
        <div className="bg-white p-4 shadow rounded flex items-center">
          <FaUsers className="text-blue-500 text-3xl mr-4" />
          <div>
            <h2 className="text-gray-800">Total Visitors</h2>
            <p className="text-gray-600">5,325</p>
          </div>
        </div>
        <div className="bg-white p-4 shadow rounded flex items-center">
          <FaShoppingCart className="text-purple-500 text-3xl mr-4" />
          <div>
            <h2 className="text-gray-800">Total Orders</h2>
            <p className="text-gray-600">1,326</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-gray-800">Form title</h2>
        <p className="text-gray-600">Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</p>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex items-center mb-4" role="alert">
          <FaExclamationCircle className="mr-2" />
          <span className="block sm:inline">Senectus malesuada suspendisse bibendum elit amet vitae.</span>
        </div>
        <table className="w-full mt-4 table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border">Table Title</th>
              <th className="px-4 py-2 border">Table Title</th>
              <th className="px-4 py-2 border">Table Title</th>
              <th className="px-4 py-2 border">Table Title</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border">Etiam purus in</td>
              <td className="px-4 py-2 border">Curabitur donec duis</td>
              <td className="px-4 py-2 border">Morbi pharetra, accumsan</td>
              <td className="px-4 py-2 border flex justify-around">
                <button className="text-blue-500 hover:text-blue-700"><FaEdit />Edit</button>
                <button className="text-red-500 hover:text-red-700"><FaTrashAlt />Delete</button>
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border">Duis eget habitant</td>
              <td className="px-4 py-2 border">At amet odio</td>
              <td className="px-4 py-2 border">Commodo eget scelerisque</td>
              <td className="px-4 py-2 border flex justify-around">
                <button className="text-blue-500 hover:text-blue-700"><FaEdit />Edit</button>
                <button className="text-red-500 hover:text-red-700"><FaTrashAlt />Delete</button>
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border">Aliquam velit lacus</td>
              <td className="px-4 py-2 border">Pellentesque egestas placerat</td>
              <td className="px-4 py-2 border">Tortor habitant sit</td>
              <td className="px-4 py-2 border flex justify-around">
                <button className="text-blue-500 hover:text-blue-700"><FaEdit />Edit</button>
                <button className="text-red-500 hover:text-red-700"><FaTrashAlt />Delete</button>
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border">Fermentum scelerisque ultricies</td>
              <td className="px-4 py-2 border">Morbi sagittis nulla</td>
              <td className="px-4 py-2 border">Quam semper quis</td>
              <td className="px-4 py-2 border flex justify-around">
                <button className="text-blue-500 hover:text-blue-700"><FaEdit />Edit</button>
                <button className="text-red-500 hover:text-red-700"><FaTrashAlt />Delete</button>
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border">Integer semper pellentesque</td>
              <td className="px-4 py-2 border">Neque turpis enim</td>
              <td className="px-4 py-2 border">Egestas non sociis</td>
              <td className="px-4 py-2 border flex justify-around">
                <button className="text-blue-500 hover:text-blue-700"><FaEdit />Edit</button>
                <button className="text-red-500 hover:text-red-700"><FaTrashAlt />Delete</button>
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border">Parturient at id</td>
              <td className="px-4 py-2 border">Sem neque, mattis</td>
              <td className="px-4 py-2 border">Pellentesque facilisis massa</td>
              <td className="px-4 py-2 border flex justify-around">
                <button className="text-blue-500 hover:text-blue-700"><FaEdit />Edit</button>
                <button className="text-red-500 hover:text-red-700"><FaTrashAlt />Delete</button>
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border">Amet, pretium eget</td>
              <td className="px-4 py-2 border">In ipsum volutpat</td>
              <td className="px-4 py-2 border">Ut feugiat egestas</td>
              <td className="px-4 py-2 border flex justify-around">
                <button className="text-blue-500 hover:text-blue-700"><FaEdit />Edit</button>
                <button className="text-red-500 hover:text-red-700"><FaTrashAlt />Delete</button>
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border">Risus consequat sollicitudin</td>
              <td className="px-4 py-2 border">Adipiscing odio nulla</td>
              <td className="px-4 py-2 border">Pharetra id sit</td>
              <td className="px-4 py-2 border flex justify-around">
                <button className="text-blue-500 hover:text-blue-700"><FaEdit />Edit</button>
                <button className="text-red-500 hover:text-red-700"><FaTrashAlt />Delete</button>
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border">Risus consequat sollicitudin</td>
              <td className="px-4 py-2 border">Adipiscing odio nulla</td>
              <td className="px-4 py-2 border">Pharetra id sit</td>
              <td className="px-4 py-2 border flex justify-around">
                <button className="text-blue-500 hover:text-blue-700"><FaEdit />Edit</button>
                <button className="text-red-500 hover:text-red-700"><FaTrashAlt />Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          <nav>
            <ul className="inline-flex items-center">
              <li>
                <button className="px-3 py-1 rounded-l border bg-gray-200 text-gray-600 hover:bg-gray-300">«</button>
              </li>
              <li>
                <button className="px-3 py-1 border bg-gray-200 text-gray-600 hover:bg-gray-300">1</button>
              </li>
              <li>
                <button className="px-3 py-1 border bg-blue-600 text-gray-600 hover:bg-gray-300">2</button>
              </li>
              <li>
                <button className="px-3 py-1 border bg-gray-200 text-gray-600 hover:bg-gray-300">3</button>
              </li>
              <li>
                <button className="px-3 py-1 border bg-gray-200 text-gray-600 hover:bg-gray-300">4</button>
              </li>
              <li>
                <button className="px-3 py-1 border bg-gray-200 text-gray-600 hover:bg-gray-300">5</button>
              </li>
              <li>
                <button className="px-3 py-1 rounded-r border bg-gray-200 text-gray-600 hover:bg-gray-300">»</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
