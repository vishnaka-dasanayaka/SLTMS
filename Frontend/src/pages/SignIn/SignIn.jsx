import React from 'react'
import Navbar from '../../components/Navigation/Navbar'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <div>

        <Navbar/>

        <div className='flex flex-col items-center justify-center mt-10'>
            
            <div className='px-5 py-3 rounded-lg bg-primary w-fit h-fit'>
                <h1 className='text-xl font-extrabold text-white uppercase'>log in</h1>
            </div>

            <div className='p-5 mt-5 flex flex-col items-center justify-center border-black border-[2px] rounded-xl'>
                <div className='flex items-start justify-center mt-5'>
                    <label className='text-lg font-bold uppercase' htmlFor="">user name : </label>
                    <input className='px-5 ml-3 bg-gray-200 rounded-md' type="text" />
                </div>

                <div className='flex items-start justify-center mt-5'>
                    <label className='text-lg font-bold uppercase' htmlFor="">password : </label>
                    <input className='px-5 ml-3 bg-gray-200 rounded-md' type="text" />
                </div>

                <div className='flex items-center justify-center mt-10'>
                    <button className='px-3 py-1 font-bold text-white uppercase rounded-md border-btn_color border-[1px] hover:bg-white hover:text-btn_color bg-btn_color'>Log In as Teacher</button>
                    <button className='ml-5 px-3 py-1 font-bold text-white uppercase rounded-md border-btn_color border-[1px] hover:bg-white hover:text-btn_color bg-btn_color'>Log In as student</button>
                </div>

                <div className='mt-5 text-sm'>
                    <h4>Do not have an account?  
                        <Link to={"/signup"}><span className='ml-1 text-blue-700 underline cursor-pointer'>Sign Up</span></Link>
                    </h4>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default SignIn
