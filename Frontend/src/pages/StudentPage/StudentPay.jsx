import React from "react";
import Navbar from "../../components/Navigation/Navbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PaidIcon from "@mui/icons-material/Paid";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { Link } from "react-router-dom";

function Payment() {
  return (
    <div>
          <Navbar />
          <div className="flex ">

            <div className="w-1/12 bg-[#d9d9d9] opacity-50 h-[100vh]">
              <ol className="text-center scale-[2] mt-32">
                <li className="py-2">
                  <Link to={"/teacherDashboard"}>
                    <DashboardIcon />
                  </Link>
                </li>
    
                <li className="py-2 ">
                  <Link to={"/courseCRUD"}>
                    <LibraryBooksIcon />
                  </Link>
                </li>
    
                <li className="py-2 active">
                  <Link to={"/teacherProfile"}>
                    <AccountBoxIcon />
                  </Link>
                </li>
    
                <li className="py-2 ">
                  <Link to={"/teacherPay"}>
                    <PaidIcon />
                  </Link>
                </li>
    
                <li className="py-2 ">
                  <Link to={"/teacherHelp"}>
                    <HelpCenterIcon />
                  </Link>
                </li>
              </ol>
            </div>

            <div className="flex flex-col mx-[5vw] w-10/12 justify-start">
                <div className="mt-[8vh] mb-[3vh] font-bold text-2xl">
                    <h1>Order Details</h1>
                </div>

                <div className="flex items-center">

                    <div className="scale-[0.4] -ml-[6vw]">
                        <img src="../img/math-teacher.jpg" alt="" />
                    </div>

                    <div className="flex justify-between w-full bg-gradient-to-r from-slate-100 to-slate-300 -ml-[2vw] px-[1vw] items-center py-[2vh]">
                        <div className="">
                            <div className="text-lg font-bold">
                                <h1>Matlab for Beginners</h1>
                            </div>
                            <div>
                                 <h3>3 Month course-Certificate</h3>
                            </div>  
                        </div>
                        <div className="text-lg font-bold">
                         <h1>Rs. 25000</h1>
                        </div>
                         
                    </div>

                </div>

                <div className="flex">
                    <div className="flex flex-col w-1/2 mr-2 border border-black">
                        <div className="pl-3 mt-2 text-lg font-bold">
                            <h1>Payment Method</h1>
                        </div>
                        <div className="flex flex-col pl-3">
                            <div className="w-[90%] my-4 border border-black p-2">
                                <input type="radio" id="creditCard" name="creditCard" value="creditCard"/>
                                <label for="creditCard" className="ml-2"> Credit Card</label>
                            </div>
                            <div className="w-[90%] my-4 border border-black p-2">
                                <input type="radio" id="creditCard" name="creditCard" value="creditCard"/>
                                <label for="creditCard" className="ml-2"> Debit Card</label>
                            </div>
                            <div className="w-[90%] my-4 border border-black p-2">
                                <input type="radio" id="creditCard" name="creditCard" value="creditCard"/>
                                <label for="creditCard" className="ml-2"> Debit Card</label>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-1/2 ml-2 border border-black bg-gradient-to-b from-slate-300 to-slate-200">
                        <div className="pl-5 my-2 mb-6 text-lg font-bold">
                            <h1>Summary</h1>
                        </div>

                        <div className="flex flex-col">
                            <div className="flex px-5 mb-3 text-lg">
                                <div className="min-w-[120px]">
                                    <h1>Course Price</h1>
                                </div>
                                <div className="min-w-[200px]">
                                  <h1>:</h1>
                                </div>
                                <div>
                                    <h1>Rs. 25000</h1>
                                </div>
                            </div>

                            <div className="flex px-5 mb-3 text-lg">
                                <div className="min-w-[120px]">
                                    <h1>Discounts</h1>
                                </div>
                                <div className="min-w-[200px]">
                                  <h1>:</h1>
                                </div>
                                <div>
                                    <h1>Rs. 200</h1>
                                </div>
                            </div>

                            <div >
                                <hr className="ml-5 mr-10 border border-black"/>
                            </div>

                            <div className="flex px-5 mb-8 text-lg">
                                <div className="min-w-[120px]">
                                    <h1>Total Price</h1>
                                </div>
                                <div className="min-w-[200px]">
                                  <h1>:</h1>
                                </div>
                                <div>
                                    <h1>Rs. 24800</h1>
                                </div>
                            </div>

                        </div>

                        <div className="flex justify-center">
                            <input type="submit" value="Proceed" className="px-10 py-2 text-white bg-orange-500 rounded-xl border-[1px] border-orange-500 hover:bg-white hover:text-orange-500 cursor-pointer tracking-wider text-xl uppercase"/>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>  
       
  )
}

export default Payment