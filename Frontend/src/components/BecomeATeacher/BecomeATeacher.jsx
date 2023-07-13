import React from 'react'
import { Link } from 'react-router-dom'

function BecomeATeacher() {
  return (
    <div>

        <div>
            <h1 className='ml-[20px] font-extrabold text-4xl'>Become a <span className='text-[#058d83] uppercase'>Teacher</span></h1>
        </div>
      
      <div className='flex items-center justify-center'>

        <div className='p-10 mr-36'>
            <div className='w-[350px]'>
                <p className='text-xl font-bold leading-loose tracking-widest'>Instructors from around the world 
                    teach millions of students on 
                    Edu.com. We provide the tools 
                    and skills to teach what 
                    you love.
                </p>
            </div>

            <div>
              <Link to={"/signup"}>
              
                <button className=' mt-10 
                                    ml-72 
                                    uppercase 
                                    py-2 px-5 
                                    bg-[#ff8400]
                                    text-white
                                    border-2
                                    border-[#ff8400]
                                    rounded-xl
                                    hover:bg-white
                                    hover:text-[#ff8400]
                                    '>start teaching</button></Link>
            </div>
        </div>

        <div className='w-[400px]'>
            <img src="../img/teacher.jpg" alt="" />
        </div>

      </div>

    </div>
  )
}

export default BecomeATeacher
