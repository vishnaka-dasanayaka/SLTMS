import React from 'react'
import Navbar from '../../components/Navigation/Navbar'
import Footer from '../../components/Footer/Footer'
import AboutUs from '../../components/AboutUs/AboutUs'

function About() {
  return (
    <div className='h-screen bg-gradient-to-l from-[#09605a]'>
      <Navbar/>
      <AboutUs/>
      <Footer/>

    </div>
  )
}

export default About
