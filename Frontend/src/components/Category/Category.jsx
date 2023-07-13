import React from 'react'

function Category() {
  return (
    <div>
      
      <div>
        <h1 className='ml-[20px] text-5xl'>Top Categories</h1>
      </div>
      <div className='grid grid-cols-4 h-[350px]'>

        <div className='rounded-xl m-5 bg-[#d2d2d2]'>
            <div
                className="categoryBackImage bg-center bg-cover rounded-[50%] mt-10 mx-auto w-[170px] h-[170px]">
            </div>

            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-xl mt-10 py-1 px-5 text-white rounded-lg bg-[#373737]'>For Undergraduates</h2>
                
            </div>
        </div>

        <div className='rounded-xl m-5 bg-[#d2d2d2]'>
            <div
                className="categoryBackImage bg-center bg-cover rounded-[50%] mt-10 mx-auto w-[170px] h-[170px]">
            </div>

            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-xl mt-10 py-1 px-5 text-white rounded-lg bg-[#373737]'>For A/L Students</h2>
                
            </div>
        </div>

        <div className='rounded-xl m-5 bg-[#d2d2d2]'>
            <div
                className="categoryBackImage bg-center bg-cover rounded-[50%] mt-10 mx-auto w-[170px] h-[170px]">
            </div>

            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-xl mt-10 py-1 px-5 text-white rounded-lg bg-[#373737]'>For O/L Students</h2>
                
            </div>
        </div>

        <div className='rounded-xl m-5 bg-[#d2d2d2]'>
            <div
                className="categoryBackImage bg-center bg-cover rounded-[50%] mt-10 mx-auto w-[170px] h-[170px]">
            </div>

            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-xl mt-10 py-1 px-5 text-white rounded-lg bg-[#373737]'>For Grade 5 Students</h2>
                
            </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Category
