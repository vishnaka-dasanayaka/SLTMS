import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div>
        <div className= 'flex items-center justify-center min-w-full bg-red-500 shadow-lg md:bg-primary lg:bg-btn_color shadow-gray-600 '>

            <div className='px-10'>
                <img className='xl:h-[130px]' src="../img/logo.png" alt="" />
            </div>
            <div className='items-center justify-center hidden sm:flex'>

            <div className='px-10'>
              <Link to={"/"}>
              <h1 className='text-2xl'>Edu.com</h1>
              </Link>
                
            </div>

            <div className='flex px-10'>
              <Link to={"/teachersignup"}>
                <h2 className='px-10'>Teach on Edu.com</h2>
              </Link>   
              
              <Link to={"/studentsignup"}>
              <h2 className='px-10'>Learn on Edu.com</h2>
              </Link>
            </div>
            </div>

            <div className='flex px-10'>
                <Link to={"/signin"}>
                  <button className='hover:text-white hover:bg-[#058d83] mx-10 py-2 px-5 border-[2px] border-black text-[#058d83] bg-white rounded-3xl '>Sign In</button>
                </Link>
                <Link to={"/signup"}>
                    <button className='hover:bg-white hover:text-[#058d83] mx-10 py-2 px-5 border-[2px] border-black text-white bg-[#058d83] rounded-3xl'>Sign Up</button> 
                </Link>
            </div>
        
        </div>

      </div>
    </div>
  )
}

export default Navbar
