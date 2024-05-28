import React from 'react'
import Login from './components/Loginpage/LoginPage'
import LoginPage from './components/Loginpage/LoginPage'
import Sidebar from './components/Admin/Sidebar'
import Navbar from './components/Admin/Navbar'
import Dashboard from './components/Admin/Dashboard'

export default function App() {
  return (
    <div>
      App
      
      <LoginPage></LoginPage>
      <div className="flex flex-col h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-4">
          <Dashboard />
        </div>
      </div>
    </div>
    </div>
  )
}
