import React from 'react'
import Header from './Header'
import Services from './Services'
import Plans from './Plans'
import ContactUs from './ContactUs'

function LandingPage() {
  return (
    <div>
        <Header/>
        <Services/>
        <Plans />
        <ContactUs />
    </div>
  )
}

export default LandingPage