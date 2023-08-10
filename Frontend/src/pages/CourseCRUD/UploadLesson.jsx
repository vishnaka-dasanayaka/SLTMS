import React from "react";
import Navbar from "../../components/Navigation/Navbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PaidIcon from "@mui/icons-material/Paid";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

function UploadLesson(){
    return (
        <div>
          <Navbar />
          <div className="flex justify-center">
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
    
            <div className="flex flex-col w-11/12 mt-10">
              <div className="flex flex-col justify-center mb-5">

                <div className="flex flex-col sm:flex-row mx-[5vw] mb-[2vh]">
                  <div className="flex min-w-[100px] mr-[5vw] sm:justify-start justify-center">
                    <label htmlFor="year" className="mb-[1vh] sm:mb-[0]">YEAR</label>
                  </div>
                  <div className="flex justify-center w-full sm:justify-start">
                    <select name="cars" id="cars" className="min-w-[200px] border-solid border-4 bg-slate-200">
                      <option value="a">A</option>
                      <option value="b">B</option>
                      <option value="c">C</option>
                      <option value="d">D</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row mx-[5vw] mb-[2vh]">
                  <div className="flex min-w-[100px] mr-[5vw] sm:justify-start justify-center">
                    <label htmlFor="year" className="mb-[1vh] sm:mb-[0]">MONTH</label>
                  </div>
                  <div className="flex justify-center w-full sm:justify-start">
                  <select name="cars" id="cars" className="min-w-[200px] border-solid border-4 bg-slate-200">
                      <option value="a">January</option>
                      <option value="b">February</option>
                      <option value="c">March</option>
                      <option value="d">April</option>
                      <option value="a">May</option>
                      <option value="b">June</option>
                      <option value="c">July</option>
                      <option value="d">August</option>
                      <option value="a">September</option>
                      <option value="b">October</option>
                      <option value="c">November</option>
                      <option value="d">December</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row mx-[5vw] mb-[2vh]">
                  <div className="flex min-w-[100px] mr-[5vw] sm:justify-start justify-center">
                    <label htmlFor="year" className="mb-[1vh] sm:mb-[0]">TITLE</label>
                  </div>
                  <div className="flex justify-center w-full sm:justify-start">
                    <select name="cars" id="cars" className="min-w-[200px] border-solid border-4 bg-slate-200">
                      <option value="a">Mr</option>
                      <option value="b">Mrs</option>
                      <option value="c">Ms</option>
                      <option value="d">Rev</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row mx-[5vw] mb-[2vh]">
                  <div className="flex min-w-[100px] mr-[5vw] sm:justify-start justify-center">
                    <label htmlFor="year" className="mb-[1vh] sm:mb-[0]">Category</label>
                  </div>
                  <div className="flex justify-center w-full sm:justify-start">
                    <select name="cars" id="cars" className="min-w-[200px] border-solid border-4 bg-slate-200">
                      <option value="a">OL</option>
                      <option value="b">AL</option>
                      <option value="c">Scholarship</option>
                      <option value="c">University</option>
                    </select>
                  </div>
                </div>


                <div className="flex flex-col sm:flex-row mx-[5vw] mb-[2vh]">
                  <div className="flex min-w-[100px] mr-[5vw] sm:justify-start justify-center">
                    <label htmlFor="year" className="mb-[1vh] sm:mb-[0]">Type</label>
                  </div>
                  <div className="flex justify-center w-full sm:justify-start">
                    <select name="cars" id="cars" className="min-w-[200px] border-solid border-4 bg-slate-200">
                      <option value="a">OL</option>
                      <option value="b">AL</option>
                      <option value="c">Scholarship</option>
                      <option value="c">University</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row mx-[5vw] mb-[2vh]">
                  <div className="flex min-w-[100px] mr-[5vw] sm:justify-start justify-center">
                    <label htmlFor="year" className="mb-[1vh] sm:mb-[0]">About</label>
                  </div>
                  <div className="flex justify-center w-full sm:justify-start ">
                   <textarea name="about" id="about" cols="50" rows="3" className="bg-slate-200"></textarea>
                  </div>
                </div>

                <div className="flex flex-col mx-[5vw] mb-[2vh]">
                  <div className="flex min-w-[100px] mr-[5vw] sm:justify-start justify-center">
                    <label htmlFor="year" className="mb-[1vh] sm:mb-[0]">Add Files</label>
                  </div>
                  <div className="flex justify-center w-full sm:justify-start bg-slate-200">
                   <textarea name="about" id="about" cols="50" rows="5" className="bg-slate-200"></textarea>
                  </div>
                </div>

                <div className="flex justify-center">
                  <input type="submit" value="Submit" className="bg-[#058d83] text-white p-[10px] rounded-xl"/>
                </div>
                
              </div>
                
              
             
            </div>
          </div>
        </div>
      );
}

export default UploadLesson;