import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const DashboardLayout = () => {
  return (
    <div className='min-h-screen flex font-poppins '>
      <div className='w-1/6'>
        <Sidebar/>
      </div>
      <div className='w-5/6'>
      <Navbar/>
      <Outlet/>
      </div>
    </div>
  )
}

export default DashboardLayout
