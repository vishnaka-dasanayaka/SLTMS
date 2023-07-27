import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div>
      
        <div className='h-[87vh] flex items-center justify-center'>

            <div className='grid w-3/5 grid-rows-3 ml-28 mt-36'>
                <div className='text-6xl'>
                    <h1 className='mb-5 font-bold tracking-widest'>EXPAND YOUR MIND</h1>
                    <h1 className='mb-10 font-bold tracking-widest'>ENRICH YOUR LIFE</h1>
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

            <div className='w-2/5'>
                <img className='-ml-20 mb-10 scale-[1.6]' src="../grp8/img/hero_side.png" alt="" />
            </div>

        </div>
    </div>
  )
}

export default Hero
