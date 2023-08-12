import React from 'react'
import Navbar from '../../components/Navigation/Navbar'
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PaidIcon from "@mui/icons-material/Paid";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { Link } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';


function TeacherDashboard() {
  return (
    <div>
        <Navbar/>
        <div className="flex justify-center">
        <div className="w-1/12 bg-[#d9d9d9] opacity-50 h-[100vh]">
          <ol className="text-center scale-[2] mt-32">
          <li className="py-2 active">
            <Link to={"/teacherDashboard"}>
            <DashboardIcon />
              </Link>  
              
            </li>

            
            <li className="py-2 ">
            <Link to={"/courseCRUD"}>
            <LibraryBooksIcon />
              </Link>  
              
            </li>

            <li className="py-2 ">
            <Link to={"/teacherProfile"}>
            <AccountBoxIcon />
              </Link>  
              
            </li>

            <li className="py-2 ">
            <Link to={"/teacherPay"}>
            <PaidIcon />
              </Link>  
              
            </li>

            <li className="py-2 ">
            <Link to={"/teacherHelp"}>
            <HelpCenterIcon />
              </Link>  
              
            </li>
          </ol>
        </div>

        <div className="flex flex-col justify-start w-11/12 p-24 sm:justify-center sm:flex-row min-w-fit">

          <div className='bg-gradient-to-bl from-[#c5774a] to-[#E3E3E3] w-[350px] h-[141px] mb-[10vh] sm:mb-0'>
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

          <div className='bg-gradient-to-bl from-[#F84B4C] sm:ml-10 to-[#E3E3E3] w-[350px] h-[141px]'>
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
