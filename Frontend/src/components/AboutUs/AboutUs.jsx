import React from 'react'

function AboutUs() {
  return (
    <div>
      <div className='flex items-center justify-center'>

        <div className='flex flex-col w-1/2 gap-5 ml-16'>
            <div>
                <h1 className='-mt-20 text-6xl capitalize'>About us</h1>
            </div>

            <div>
                <h2 className='text-4xl'>Company <span className='text-red-500'>Vision</span></h2>
                <br />
                <p>Our vision is to become a leading provider of innovative, 
                    user-friendly software solutions that empower businesses 
                    and individuals to achieve their goals and improve their productivity. 
                    Here, we are focusing on creating a technology that solves 
                    real-world problems and addresses the needs of its customers. 
                    The company would strive to have a positive impact on society 
                    by developing software that is accessible to all, easy to use, 
                    and helps to make the world a better place.</p>
            </div>

            <br /><br />
            
            <div>
                <h2 className='text-4xl'>Company <span className='text-red-500'>Mision</span></h2>
                <br />
                <p>Our mission is to create innovative, user-friendly software 
                    that solves real- world problems and improves the 
                    lives of our customers.</p>
            </div>

        </div>

        <div className='w-1/2'>
            <img src="../img/about.png" alt="" />
        </div>

      </div>
    </div>
  )
}

export default AboutUs
