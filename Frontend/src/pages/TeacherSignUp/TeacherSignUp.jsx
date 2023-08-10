import React, {useState} from 'react';
import axios from "axios";
import Navbar from '../../components/Navigation/Navbar'
import { Link } from 'react-router-dom';
import {url} from '../../config';

function TeacherSignUp() {

  return (
    <div className=' h-screen bg-gradient-to-l from-[#79e2db]'>
    <Navbar/>
    <div className='flex flex-col w-8/12 m-auto rounded-xl bg-[#265451] mt-[5vh] pb-[5vh]'>

            <div className='flex mt-[5vh] justify-between mx-[5vw] md:flex-row flex-col'>

                <div className='flex mb-5 md:mb-0'>
                    <div className='text-white min-w-[150px]'>
                        <label htmlFor="">First Name</label>
                    </div>
                    <div>
                        <input type="text" className='min-w-[15vw] h-7'/>
                    </div>
                </div>

                <div className='flex'>
                    <div className='text-white min-w-[150px]'>
                        <label htmlFor="">Last Name</label>
                    </div>
                    <div>
                        <input type="text" className='w-[15vw] h-7'/>
                    </div>
                </div>

            </div>

            <div className='flex mt-[5vh] justify-between mx-[5vw]'>

                <div className='flex'>
                    <div className='text-white min-w-[150px]'>
                        <label htmlFor="">E-mail</label>
                    </div>
                    <div>
                        <input type="text" className='w-[15vw] h-7'/>
                    </div>
                </div>

                <div className='flex'>
                    <div className='text-white min-w-[150px]'>
                        <label htmlFor="">Teaching Area</label>
                    </div>
                    <div>
                        <input type="text" className='w-[15vw] h-7'/>
                    </div>
                </div>

            </div>

            <div className='flex flex-col mx-[5vw] mt-[5vh]'>
                <div className='text-white mb-[2vh]'>
                    <label htmlFor="">About:</label>
                </div>
                <div>
                   <input type="text" className='w-full h-[16vh]'/>
                </div>
            </div>

            <div className='flex mt-[5vh] justify-between mx-[5vw]'>

                <div className='flex'>
                    <div className='text-white min-w-[150px]'>
                        <label htmlFor="">Enter password</label>
                    </div>
                    <div>
                        <input type="text" className='w-[15vw] h-7'/>
                    </div>
                </div>

                <div className='flex'>
                    <div className='text-white min-w-[150px]'>
                        <label htmlFor="">Re-Enter password</label>
                    </div>
                    <div>
                        <input type="text" className='w-[15vw] h-7'/>
                    </div>
                </div>

            </div>

            <div className='flex flex-col items-center w-full mt-[5vh]'>

                <div className='mb-5'>
                    <input type="submit" value="Sign Up" className='px-5 py-2 text-xl tracking-wider text-white cursor-pointer bg-btn_color rounded-xl hover:bg-white hover:text-btn_color'/>
                </div>
                <div className='text-white'>
                    <p>Already Have an Account ? <span className='tracking-widest underline text-btn_color hover:cursor-pointer'>Sign In</span></p>
                </div>

            </div>

        </div> 

    </div>
      
    
  )
}

export default TeacherSignUp
