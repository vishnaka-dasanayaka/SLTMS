import React from 'react'

function Courses() {
  return (
    <div>
      
      <div>
        <h1 className='ml-[20px] text-5xl'>Courses on Edu.com</h1>
      </div>
      <div className='grid grid-cols-4 h-[400px]'>

        <div className='rounded-xl m-5 bg-[#d2d2d2]'>
            <div
                className="backImage bg-center bg-cover rounded-[50%] mt-10 mx-auto w-[170px] h-[170px]">
            </div>

            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-xl mt-10 py-1 px-5 text-white rounded-lg bg-[#373737]'>Web Development</h2>
                <h3 className='mt-5'>by Dr. Kushan Sudheera</h3>
            </div>
        </div>

        <div className='rounded-xl m-5 bg-[#d2d2d2]'>
            <div
                className="backImage bg-center bg-cover rounded-[50%] mt-10 mx-auto w-[170px] h-[170px]">
            </div>

            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-xl mt-10 py-1 px-5 text-white rounded-lg bg-[#373737]'>CIMA</h2>
                <h3 className='mt-5'>by Dr. Manoj Perera</h3>
            </div>
        </div>

        <div className='rounded-xl m-5 bg-[#d2d2d2]'>
            <div
                className="backImage bg-center bg-cover rounded-[50%] mt-10 mx-auto w-[170px] h-[170px]">
            </div>

            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-xl mt-10 py-1 px-5 text-white rounded-lg bg-[#373737]'>Chemistry</h2>
                <h3 className='mt-5'>by Mr. Withanage</h3>
            </div>
        </div>

        <div className='rounded-xl m-5 bg-[#d2d2d2]'>
            <div
                className="backImage bg-center bg-cover rounded-[50%] mt-10 mx-auto w-[170px] h-[170px]">
            </div>

            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-xl mt-10 py-1 px-5 text-white rounded-lg bg-[#373737]'>A/L Mathematics</h2>
                <h3 className='mt-5'>by Mr. Ajantha Dissanayake</h3>
            </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Courses
