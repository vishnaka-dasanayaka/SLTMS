import React from "react";
import Navbar from "../../components/Navigation/Navbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PaidIcon from "@mui/icons-material/Paid";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function SpecificCourse() {
  return (
    <div>
    <Navbar />
    <div className="flex justify-center">
      <div className="w-1/12 bg-[#d9d9d9] opacity-50 h-[100vh]">
        <ol className="text-center scale-[2] mt-32">
          <li className="py-2">
            <Link to={"/studentDashboard"}>
              <DashboardIcon />
            </Link>
          </li>

          <li className="py-2 ">
            <Link to={"/studentCourses"}>
              <LibraryBooksIcon />
            </Link>
          </li>

          <li className="py-2 ">
            <Link to={"/studentProfile"}>
              <AccountBoxIcon />
            </Link>
          </li>

          <li className="py-2 ">
            <Link to={"/studentProfile"}>
              <PaidIcon />
            </Link>
          </li>

          <li className="py-2 ">
            <Link to={"/studentProfile"}>
              <HelpCenterIcon />
            </Link>
          </li>
        </ol>
      </div>

      <div className="flex flex-col w-11/12 p-10">
        <div className="flex mb-10">
          <div className="w-1/2">
            <SearchBar />
          </div>
          <div className="flex w-1/2 mt-2 ml-32">
            <div className="w-1/4 text-gray-300 scale-[2] hover:text-gray-600 cursor-pointer">
              <AccountCircleIcon />
            </div>
            <div className="w-1/4 text-gray-300 scale-[2] hover:text-gray-600 cursor-pointer">
              <AccountCircleIcon />
            </div>
          </div>
        </div>
        <div>{/*detail*/}
          <div className="flex flex-col">
            <div className="flex items-center justify-center">
              <div className="w-1/4 h-64 mx-5 bg-gray-200">
                <div className="w-full h-full p-5"><img className="w-full h-full" src="../img/chemistry.jpg" alt="" /></div>
              </div>
              <div className="w-3/4 h-64 mx-5 font-mono">
                <div className="flex flex-col items-start justify-center h-full">
                  <h3 className="font-semibold" >Dr. Rajitha Udawalpola</h3><br />
                  <h2 className="text-xl font-extrabold">Physical Chemistry Theory Class | 2025</h2><br />
                  <h3>Kandy - Sensip</h3><br />
                  <h3>2025</h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-center m-5">
                <div className="flex items-center justify-center w-2/12 h-10 border-black border-[1px] border-b-2 rounded-xl"><h2 className="font-mono text-xl ">2023</h2></div>
                <div className="flex items-center justify-center w-10/12 ">
                  <div className="flex justify-center items-center hover:bg-black hover:text-white cursor-pointer w-1/12 h-10 mx-1 bg-gray-300 border-black border-[1px] rounded-xl border-b-2">JAN</div>
                  <div className="flex justify-center items-center hover:bg-black hover:text-white cursor-pointer w-1/12 h-10 mx-1 bg-gray-300 border-black border-[1px] rounded-xl border-b-2">FEB</div>
                  <div className="flex justify-center items-center hover:bg-black hover:text-white cursor-pointer w-1/12 h-10 mx-1 bg-gray-300 border-black border-[1px] rounded-xl border-b-2">MAR</div>
                  <div className="flex justify-center items-center hover:bg-black hover:text-white cursor-pointer w-1/12 h-10 mx-1 bg-gray-300 border-black border-[1px] rounded-xl border-b-2">APR</div>
                  <div className="flex justify-center items-center hover:bg-black hover:text-white cursor-pointer w-1/12 h-10 mx-1 bg-gray-300 border-black border-[1px] rounded-xl border-b-2">MAY</div>
                  <div className="flex justify-center items-center hover:bg-black hover:text-white cursor-pointer w-1/12 h-10 mx-1 bg-gray-300 border-black border-[1px] rounded-xl border-b-2">JUN</div>
                  <div className="flex justify-center items-center hover:bg-black hover:text-white cursor-pointer w-1/12 h-10 mx-1 bg-gray-300 border-black border-[1px] rounded-xl border-b-2">JUL</div>
                  <div className="flex justify-center items-center hover:bg-black hover:text-white cursor-pointer w-1/12 h-10 mx-1 bg-gray-300 border-black border-[1px] rounded-xl border-b-2">AUG</div>
                  <div className="flex justify-center items-center hover:bg-black hover:text-white cursor-pointer w-1/12 h-10 mx-1 bg-gray-300 border-black border-[1px] rounded-xl border-b-2">SEP</div>
                  <div className="flex justify-center items-center hover:bg-black hover:text-white cursor-pointer w-1/12 h-10 mx-1 bg-gray-300 border-black border-[1px] rounded-xl border-b-2">OCT</div>
                  <div className="flex justify-center items-center hover:bg-black hover:text-white cursor-pointer w-1/12 h-10 mx-1 bg-gray-300 border-black border-[1px] rounded-xl border-b-2">NOV</div>
                  <div className="flex justify-center items-center hover:bg-black hover:text-white cursor-pointer w-1/12 h-10 mx-1 bg-gray-300 border-black border-[1px] rounded-xl border-b-2">DEC</div>
                </div>
              </div>
              <div className="flex flex-col">

                <div className="flex items-center justify-center w-full mt-10">
                  <div className="w-1/2 mx-20 border-black border-[1px] rounded-xl h-60">
                    <div className="flex items-center justify-center h-full">

                    <div className="w-1/3 h-full mx-5">
                      <div className="w-full h-full py-5"><img className="w-full h-full" src="../img/book.png" alt="" /></div>
                    </div>
                      <div className="flex flex-col items-start justify-center w-2/3 h-full pl-5 font-mono leading-tight">
                        <h3 className="text-sm">2023-05-06</h3><br />
                        <h2 className="font-bold text-l">Physical Chemistry</h2>
                        <h2 className="font-bold text-l">Part I</h2>
                        <h2 className="font-bold text-l">2 Hrs 30 Min</h2><br />
                        <h3 className="text-sm">2023 JUL</h3><br />
                        <div className="flex">
                          <button className="px-3 py-1 border-btn_color border-[1px] rounded-xl text-white hover:bg-white hover:text-btn_color bg-btn_color">Attend</button>
                          <button className="px-3 ml-10 py-1 border-primary border-[1px] rounded-xl text-white hover:bg-white hover:text-primary bg-primary">View</button>
                          
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="w-1/2 mx-20 border-black border-[1px] rounded-xl h-60">
                    <div className="flex items-center justify-center h-full">

                    <div className="w-1/3 h-full mx-5">
                      <div className="w-full h-full py-5"><img className="w-full h-full" src="../img/book.png" alt="" /></div>
                    </div>
                      <div className="flex flex-col items-start justify-center w-2/3 h-full pl-5 font-mono leading-tight">
                        <h3 className="text-sm">2023-05-06</h3><br />
                        <h2 className="font-bold text-l">Physical Chemistry</h2>
                        <h2 className="font-bold text-l">Part I</h2>
                        <h2 className="font-bold text-l">2 Hrs 30 Min</h2><br />
                        <h3 className="text-sm">2023 JUL</h3><br />
                        <div className="flex">
                          <button className="px-3 py-1 border-btn_color border-[1px] rounded-xl text-white hover:bg-white hover:text-btn_color bg-btn_color">Attend</button>
                          <button className="px-3 ml-10 py-1 border-primary border-[1px] rounded-xl text-white hover:bg-white hover:text-primary bg-primary">View</button>
                          
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center w-full mt-10">
                <div className="w-1/2 mx-20 border-black border-[1px] rounded-xl h-60">
                    <div className="flex items-center justify-center h-full">

                    <div className="w-1/3 h-full mx-5">
                      <div className="w-full h-full py-5"><img className="w-full h-full" src="../img/book.png" alt="" /></div>
                    </div>
                      <div className="flex flex-col items-start justify-center w-2/3 h-full pl-5 font-mono leading-tight">
                        <h3 className="text-sm">2023-05-06</h3><br />
                        <h2 className="font-bold text-l">Physical Chemistry</h2>
                        <h2 className="font-bold text-l">Part I</h2>
                        <h2 className="font-bold text-l">2 Hrs 30 Min</h2><br />
                        <h3 className="text-sm">2023 JUL</h3><br />
                        <div className="flex">
                          <button className="px-3 py-1 border-btn_color border-[1px] rounded-xl text-white hover:bg-white hover:text-btn_color bg-btn_color">Attend</button>
                          <button className="px-3 ml-10 py-1 border-primary border-[1px] rounded-xl text-white hover:bg-white hover:text-primary bg-primary">View</button>
                          
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="w-1/2 mx-20 border-black border-[1px] rounded-xl h-60">
                    <div className="flex items-center justify-center h-full">

                    <div className="w-1/3 h-full mx-5">
                      <div className="w-full h-full py-5"><img className="w-full h-full" src="../img/book.png" alt="" /></div>
                    </div>
                      <div className="flex flex-col items-start justify-center w-2/3 h-full pl-5 font-mono leading-tight">
                        <h3 className="text-sm">2023-05-06</h3><br />
                        <h2 className="font-bold text-l">Physical Chemistry</h2>
                        <h2 className="font-bold text-l">Part I</h2>
                        <h2 className="font-bold text-l">2 Hrs 30 Min</h2><br />
                        <h3 className="text-sm">2023 JUL</h3><br />
                        <div className="flex">
                          <button className="px-3 py-1 border-btn_color border-[1px] rounded-xl text-white hover:bg-white hover:text-btn_color bg-btn_color">Attend</button>
                          <button className="px-3 ml-10 py-1 border-primary border-[1px] rounded-xl text-white hover:bg-white hover:text-primary bg-primary">View</button>
                          
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                
                
                
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SpecificCourse
