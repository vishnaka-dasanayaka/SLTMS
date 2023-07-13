import React from 'react'
import Navbar from '../../components/Navigation/Navbar';
import { Link } from 'react-router-dom'

function StudentSignUp() {
  return (
    <div className=' h-full bg-gradient-to-l from-[#79e2db]'>
    <Navbar/>
    <div className='mt-5 m-auto h-full rounded-xl w-6/12 bg-[#265451]'>

      <form className='m-auto' action="" method="post">
          <br />
          <br />
          <table className='m-auto text-lg text-white'>
              <tr className=''>
                  <td className='w-40'><label htmlFor="">First Name</label></td>
                  <td className='w-80'><input type="text" /></td>
                  </tr><br /><br />
                  <tr><td><label htmlFor="">Last Name</label></td>
                  <td><input type="text" /></td>
              </tr>
              <br />
              <br />

              <tr>
                  <td><label htmlFor="">E-mail</label></td>
                  <td><input type="text" /></td>
    
              </tr><br /><br />
          
              <tr className='text-lg text-white'>
                  <td className='w-[195px]'><label htmlFor="">Enter a password</label></td>
                  <td className='w-52'><input type="text" name="" id="" /></td>
                  </tr><br /><br />
                  <tr className='text-lg text-white'><td><label htmlFor="">Re-Enter password</label></td>
                  <td><input type="text" name="" id="" /></td>
              </tr>
          </table>
      </form>

      

  

      <br />
      <div className='text-center'>
          <button className='px-5 py-2 text-white bg-orange-400 rounded-xl hover:text-orange-400 hover:bg-white'>
          <a href="/studentDashboard">
              Sign Up
          </a>
          </button>
      </div>
      <br />
      <div className='text-center text-white'>
          <h3>Already Have an Account ? <span className='text-orange-500 underline'><Link to={"/signin"}>Sign In</Link></span></h3>
      </div>
  
    </div>
  </div>
  )
}

export default StudentSignUp
