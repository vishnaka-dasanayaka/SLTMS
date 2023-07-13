import React from 'react'
import { Link} from 'react-router-dom'

function Footer() {
  return (
    <div>
      
        <div className='flex items-center justify-center -mt-10'>
            <div>
                <h1 className='-ml-20 text-5xl font-extrabold leading-loose tracking-widest'>Contact Us</h1>
                <table>
                    <tr className='text-2xl'>
                        <td >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                        </svg>

                        </td>
                        <td className='px-10 py-5'>customersupport@edu.com</td>
                    </tr>

                    <tr className='text-2xl'>
                        <td >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <   path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                        </svg>


                        </td>
                        <td className='px-10 py-5'>@edu.com</td>
                    </tr>

                    <tr className='text-2xl'>
                        <td >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                        </svg>


                        </td>
                        <td className='px-10 py-5'>@edu.com</td>
                    </tr>

                    <tr className='text-2xl'>
                        <td >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>

                        </td>
                        <td className='px-10 py-5'>+94 22 222 2222</td>
                    </tr>
                </table>

                <a href={"/about"}>
                    <h1 className='-ml-20 text-5xl font-extrabold leading-loose tracking-widest'>About Us</h1>
                </a>
            </div>
            <div className='flex flex-col ml-96'>
                <a href={"/"}>
                    <h2 className='py-8 text-2xl font-semibold text-center'>Home</h2>
                </a>
                
                <Link to={"/signup"}>
                    <h2 className='py-8 text-2xl font-semibold text-center'>Start Learning</h2>
                </Link>

                <Link to={"/signup"}>
                    <h2 className='py-8 text-2xl font-semibold text-center'>Start Teaching</h2>
                </Link>
                
                <h2 className='py-8 text-2xl font-semibold text-center'>Sign In</h2>
                
                <Link to={"/signup"}>
                    <h2 className='py-8 text-2xl font-semibold text-center'>Sign Up</h2>
                </Link>
                
                
                
                
            </div>
        </div>

        <br />

        <div className='h-7 bg-[#058d83]'>
            <h6 className='text-center text-white '>© 2023 VINTAGE SOFTWARE inc. All rights reserved.</h6>
        </div>

    </div>
  )
}

export default Footer
