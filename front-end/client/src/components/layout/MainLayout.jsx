import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../ui/footer'
import Navbar from './../ui/Navbar'

const MainLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default MainLayout