import Navbar from "../../components/Navigation/Navbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PaidIcon from "@mui/icons-material/Paid";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { Link } from "react-router-dom";
import {useParams} from 'react-router-dom'

function UploadLesson() {

  const params = useParams()
  const courseID = params.id;
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

            <li className="py-2">
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
                <label htmlFor="year" className="mb-[1vh] sm:mb-[0]">
                  MONTH
                </label>
              </div>
              <div className="flex justify-center w-full sm:justify-start">
                <select
                  name="cars"
                  id="cars"
                  className="min-w-[200px] border-solid border-4 bg-slate-200"
                >
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
                <label htmlFor="year" className="mb-[1vh] sm:mb-[0] uppercase">
                  lesson TITLE
                </label>
              </div>
              <div className="flex justify-center w-full sm:justify-start">
                <input
                  name="cars"
                  id="cars"
                  className="min-w-[200px] border-solid border-4 bg-slate-200"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row mx-[5vw] mb-[2vh]">
              <div className="flex min-w-[100px] mr-[5vw] sm:justify-start justify-center">
                <label htmlFor="year" className="uppercase mb-[1vh] sm:mb-[0]">
                  Duration
                </label>
              </div>
              <div className="flex justify-center w-full sm:justify-start">
                <input
                  name="cars"
                  id="cars"
                  className="min-w-[200px] border-solid border-4 bg-slate-200"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row mx-[5vw] mb-[2vh]">
              <div className="flex min-w-[100px] mr-[5vw] sm:justify-start justify-center">
                <label htmlFor="year" className="mb-[1vh] uppercase sm:mb-[0]">
                  Description
                </label>
              </div>
              <div className="flex justify-center w-full sm:justify-start ">
                <textarea
                  name="about"
                  id="about"
                  cols="50"
                  rows="3"
                  className="bg-slate-200"
                ></textarea>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row mx-[5vw] mb-[2vh]">
              <div className="flex min-w-[100px] mr-[5vw] sm:justify-start justify-center">
                <label htmlFor="year" className="uppercase mb-[1vh] sm:mb-[0]">
                  Add Files
                </label>
              </div>
              <div className="flex justify-center p-5 w-fit sm:justify-start bg-slate-200">
                <input
                  type="file"
                  name="about"
                  id="about"
                  cols="50"
                  rows="5"
                  className="bg-slate-200"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <input
                type="submit"
                value="Submit"
                className="px-5 py-2 text-white bg-orange-500 rounded-xl border-[1px] border-orange-500 hover:bg-white hover:text-orange-500 cursor-pointer tracking-wider text-xl uppercase"
              />
            </div>
          </div>

          {/* uploaded lessons */}

          <div className="flex flex-col">
            <div className="flex items-center justify-center m-5">
              <div className="flex items-center justify-center w-2/12 h-10 border-black border-[1px] border-b-2 rounded-xl">
                <h2 className="font-mono text-xl ">2023</h2>
              </div>
              <div className="flex items-center justify-center w-10/12 ">
                <div className="flex justify-center items-center hover:bg-black hover:text-white cursor-pointer w-1/12 h-10 mx-1 bg-gray-300 border-black border-[1px] rounded-xl border-b-2">
                  JAN
                </div>
                <div className="flex justify-center items-center hover:bg-black hover:text-white cursor-pointer w-1/12 h-10 mx-1 bg-gray-300 border-black border-[1px] rounded-xl border-b-2">
                  FEB
                </div>
                <div className="flex justify-center items-center hover:bg-black hover:text-white cursor-pointer w-1/12 h-10 mx-1 bg-gray-300 border-black border-[1px] rounded-xl border-b-2">
                  MAR
                </div>
                <div className="flex justify-center items-center hover:bg-black hover:text-white cursor-pointer w-1/12 h-10 mx-1 bg-gray-300 border-black border-[1px] rounded-xl border-b-2">
                  APR
                </div>
                <div className="flex justify-center items-center hover:bg-black hover:text-white cursor-pointer w-1/12 h-10 mx-1 bg-gray-300 border-black border-[1px] rounded-xl border-b-2">
                  MAY
                </div>
                <div className="flex justify-center items-center hover:bg-black hover:text-white cursor-pointer w-1/12 h-10 mx-1 bg-gray-300 border-black border-[1px] rounded-xl border-b-2">
                  JUN
                </div>
                <div className="flex justify-center items-center hover:bg-black hover:text-white cursor-pointer w-1/12 h-10 mx-1 bg-gray-300 border-black border-[1px] rounded-xl border-b-2">
                  JUL
                </div>
                <div className="flex justify-center items-center hover:bg-black hover:text-white cursor-pointer w-1/12 h-10 mx-1 bg-gray-300 border-black border-[1px] rounded-xl border-b-2">
                  AUG
                </div>
                <div className="flex justify-center items-center hover:bg-black hover:text-white cursor-pointer w-1/12 h-10 mx-1 bg-gray-300 border-black border-[1px] rounded-xl border-b-2">
                  SEP
                </div>
                <div className="flex justify-center items-center hover:bg-black hover:text-white cursor-pointer w-1/12 h-10 mx-1 bg-gray-300 border-black border-[1px] rounded-xl border-b-2">
                  OCT
                </div>
                <div className="flex justify-center items-center hover:bg-black hover:text-white cursor-pointer w-1/12 h-10 mx-1 bg-gray-300 border-black border-[1px] rounded-xl border-b-2">
                  NOV
                </div>
                <div className="flex justify-center items-center hover:bg-black hover:text-white cursor-pointer w-1/12 h-10 mx-1 bg-gray-300 border-black border-[1px] rounded-xl border-b-2">
                  DEC
                </div>
              </div>
            </div>







          
              <div className="flex items-center justify-center w-full mt-10">
                <div className="w-1/2 mx-20 border-black border-[1px] rounded-xl h-60">
                  <div className="flex items-center justify-center h-full">
                    <div className="w-1/3 h-full mx-5">
                      <div className="w-full h-full py-5">
                        <img
                          className="w-full h-full"
                          src="../img/book.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center w-2/3 h-full pl-5 font-mono leading-tight">
                      <h3 className="text-sm">2023-05-06</h3>
                      <br />
                      <h2 className="font-bold text-l">Physical Chemistry</h2>
                      <h2 className="font-bold text-l">Part I</h2>
                      <h2 className="font-bold text-l">2 Hrs 30 Min</h2>
                      <br />
                      <h3 className="text-sm">2023 JUL</h3>
                      <br />
                      <div className="flex">
                        <button className="px-3 py-1 border-btn_color border-[1px] rounded-xl text-white hover:bg-white hover:text-btn_color bg-btn_color">
                          Attend
                        </button>
                        <button className="px-3 ml-10 py-1 border-primary border-[1px] rounded-xl text-white hover:bg-white hover:text-primary bg-primary">
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>   
              </div>




              
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadLesson;
