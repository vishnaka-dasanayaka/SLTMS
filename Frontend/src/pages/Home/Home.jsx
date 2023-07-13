import React from 'react'
import Navbar from '../../components/Navigation/Navbar'
import Hero from '../../components/Hero/Hero'
import Courses from '../../components/Courses/Courses'
import Category from '../../components/Category/Category'
import BecomeATeacher from '../../components/BecomeATeacher/BecomeATeacher'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <div  className='h-screen bg-gradient-to-l from-[#09605a]'>
        <Navbar/>
        <Hero/>
        <Courses/>
        <br />
        <br />
        <Category/>
        <br />
        <br />
        <BecomeATeacher/>
        <br />
        <br />
        <Footer/>
      </div>
    </div>
  )
}

export default Home
