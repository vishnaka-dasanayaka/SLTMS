import React from 'react'
import Navbar from '../../components/Navigation/Navbar'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div>
      <Navbar/>
      <h1 className='mt-20 text-2xl font-extrabold tracking-widest text-center uppercase'>smart teaching and learning management system</h1>
      <div className='flex items-center justify-center mt-24'>
      <Link to="/studentsignup">
        <div className='flex justify-center items-center h-40 m-10 bg-gradient-to-l from-[#e99f69] shadow-lg w-96'>
            <div className='ml-10 text-3xl font-extrabold uppercase'>student</div>
            <div>
                <img className='scale-[0.7]' src="../grp8/img/student.png" alt="" />
            </div>
        </div>
        </Link>
        <Link to="/teachersignup">
          <div className='flex justify-center items-center h-40 m-10 bg-gradient-to-l from-[#e99f69] shadow-lg w-96'>
            
            <div className='ml-10 text-3xl font-extrabold uppercase'>teacher</div>
            <div>
                <img className='mb-5 scale-[0.8]' src="../grp8/img/teacher.png" alt="" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default SignUp
