import React from 'react'
import Navbar from '../../components/Navigation/Navbar'
import SchoolIcon from '@mui/icons-material/School';
import Sidebar from '../../components/Navigation/Sidebar';


function TeacherDashboard() {

  return (
    <div>
        <Navbar/>
        <div className="flex justify-center">
        <div className="w-2/12 md:w-1/12">
        <Sidebar/>
        </div>

        <div className="flex w-10/12 p-24 md:w-11/12">
          <div className='bg-gradient-to-bl from-[#c5774a] to-[#E3E3E3] w-[350px] h-[141px]'>
            <div className='flex text-left justify-self-end'>
              <div className='pl-5 pt-7'>
              <label className='text-xl font-extrabold ' htmlFor="">Enrolled Students</label>
              <br />
              <p className='mt-5 text-2xl font-extrabold text-center' >25</p>
              </div>

              <div className='scale-[4] mt-[70px] ml-16'>
                <SchoolIcon/>
              </div>
            </div>
          </div>

          <div className='bg-gradient-to-bl from-[#F84B4C] ml-20 to-[#E3E3E3] w-[350px] h-[141px]'>
            <div className='flex text-left justify-self-end'>
              <div className='pl-5 pt-7'>
              <label className='text-xl font-extrabold ' htmlFor="">Enrolled Students</label>
              <br />
              <p className='mt-5 text-2xl font-extrabold text-center' >25</p>
              </div>

              <div className='scale-[4] mt-[70px] ml-16'>
                <SchoolIcon/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherDashboard
