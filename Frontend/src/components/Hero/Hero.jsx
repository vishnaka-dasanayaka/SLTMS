import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div>
      
        {/* <div className='h-[87vh] flex items-center justify-center'>

            <div className='grid w-3/5 grid-rows-3 ml-28 mt-36'>
                <div className='text-6xl'>
                    <h1 className='mb-5 text-3xl font-bold tracking-widest sm:text-5xl md:text-6xl'>EXPAND YOUR MIND</h1>
                    <h1 className='mb-10 text-3xl font-bold tracking-widest sm:text-5xl md:text-6xl'>ENRICH YOUR LIFE</h1>
                </div>

                <div className= ' w-[550px] tracking-wide leading-loose '>
                    <p>
                        Start, switch, or advance your career with more than 5,400 courses,
                        Professional Certificates, and degrees from world-class universities
                        and companies.
                    </p>
                </div>

                <div className='-mt-10'>
                    <Link to="/signup">
                    
                    <button className='
                            border
                            border-btn_color
                            border-2px
                            bg-btn_color
                            px-5
                            py-2
                            rounded-xl
                            text-white
                            hover:bg-white
                            hover:text-[#ff8400]
                            '>GET STARTED</button></Link>
                </div>
            </div>

            <div className='hidden w-2/5 sm:block'>
                <img className='-ml-20 mb-10 scale-[1.6]' src="../img/hero_side.png" alt="" />
            </div>

        </div> */}

        <div className='flex h-[80vh] mt-[5vh]'>

            <div className='flex flex-col justify-center w-[50vw] mb-[5vh] ml-[8vw]'>

                <div>
                    <h1 className='mb-5 text-3xl font-bold tracking-widest sm:text-4xl md:text-5xl'>EXPAND YOUR MIND</h1>
                    <h1 className='mb-10 text-3xl font-bold tracking-widest sm:text-4xl md:text-5xl'>ENRICH YOUR LIFE</h1>
                </div>

                <div className= 'mb-10'>
                    <p>
                        Start, switch, or advance your career with more than 5,400 courses,
                        Professional Certificates, and degrees from world-class universities
                        and companies.
                    </p>
                </div>

                <div>
                 <Link to="/signup">
                    <button className='
                            border
                            border-btn_color
                            border-2px
                            bg-btn_color
                            px-5
                            py-2
                            rounded-xl
                            text-white
                            hover:bg-white
                            hover:text-[#ff8400]
                            '>GET STARTED</button>
                </Link>
                </div>

            </div>

            <div className='items-center hidden w-[60vw] scale-[1.0] lg:flex mb-[-1vh]'>
                <img className='' src="../img/hero_side.png" alt="" />
            </div>

        </div>


    </div>
  )
}

export default Hero
