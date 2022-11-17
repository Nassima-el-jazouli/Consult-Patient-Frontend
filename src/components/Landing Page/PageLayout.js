import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Partials/Navbar'
import Footer from '../Partials/Footer'

function PageLayout() {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default PageLayout