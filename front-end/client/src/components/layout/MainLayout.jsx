import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../ui/footer'
import Navbar from './../ui/Navbar'

const MainLayout = ({numCartItems}) => {
  return (
    <>
        <Navbar numCartItems={numCartItems}/>
        <Outlet />
        <Footer />
    </>
  )
}

export default MainLayout