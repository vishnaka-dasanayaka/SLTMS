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
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {toast} from 'react-toastify'
import { useSelector } from "react-redux";
function SpecificTeacher() {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      toast.warning('First, you should login to the system')
      navigate("/signin");
    }
  }, [user, navigate]);
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

        <div className="flex flex-col">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center w-1/3 h-10 mx-5 bg-gray-400">
              <h1 className="">Dr. Rajitha Udawalpola</h1>
            </div>
            <div className="flex items-center justify-center w-1/3 h-10 mx-5 bg-gray-400">
              {/* drop-down  */}
              <h2>All Subjects</h2>
            </div>
            <div className="flex items-center justify-center w-1/3 mx-5">
              <div className="flex items-center justify-center w-1/3 h-10 mx-5 bg-gray-400"><h3>2023</h3></div>
              <div className="flex items-center justify-center w-1/3 h-10 mx-5 bg-gray-400"><h3>2023</h3></div>
              <div className="flex items-center justify-center w-1/3 h-10 mx-5 bg-gray-400"><h3>2023</h3></div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-start">
              <div className="w-1/4 m-5 rounded-xl bg-[#F9EBD7] h-72 flex flex-col items-center">
                <div className="rounded-xl w-11/12 m-3 bg-[#028D83] h-2/3 flex justify-center items-center">
                  <img className="w-11/12 h-auto border-black border-[3px]" src="../img/chemistry.jpg" alt="" />
                </div>

                <div className="flex flex-col items-center justify-center w-full font-mono h-1/3">
                  <h3>2024 Theory | Chemistry</h3>
                  <h4>Physical Chemistry</h4>
                </div>
              </div>

              <div className="w-1/4 m-5 rounded-xl bg-[#F9EBD7] h-72 flex flex-col items-center">
                <div className="rounded-xl w-11/12 m-3 bg-[#028D83] h-2/3 flex justify-center items-center">
                  <img className="w-11/12 h-auto border-black border-[3px]" src="../img/chemistry.jpg" alt="" />
                </div>

                <div className="flex flex-col items-center justify-center w-full font-mono h-1/3">
                  <h3>2024 Theory | Chemistry</h3>
                  <h4>Physical Chemistry</h4>
                </div>
              </div>

              <div className="w-1/4 m-5 rounded-xl bg-[#F9EBD7] h-72 flex flex-col items-center">
                <div className="rounded-xl w-11/12 m-3 bg-[#028D83] h-2/3 flex justify-center items-center">
                  <img className="w-11/12 h-auto border-black border-[3px]" src="../img/chemistry.jpg" alt="" />
                </div>

                <div className="flex flex-col items-center justify-center w-full font-mono h-1/3">
                  <h3>2024 Theory | Chemistry</h3>
                  <h4>Physical Chemistry</h4>
                </div>
              </div>

              <div className="w-1/4 m-5 rounded-xl bg-[#F9EBD7] h-72 flex flex-col items-center">
                <div className="rounded-xl w-11/12 m-3 bg-[#028D83] h-2/3 flex justify-center items-center">
                  <img className="w-11/12 h-auto border-black border-[3px]" src="../img/chemistry.jpg" alt="" />
                </div>

                <div className="flex flex-col items-center justify-center w-full font-mono h-1/3">
                  <h3>2024 Theory | Chemistry</h3>
                  <h4>Physical Chemistry</h4>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start">
            <div className="w-1/4 m-5 rounded-xl bg-[#F9EBD7] h-72 flex flex-col items-center">
                <div className="rounded-xl w-11/12 m-3 bg-[#028D83] h-2/3 flex justify-center items-center">
                  <img className="w-11/12 h-auto border-black border-[3px]" src="../img/chemistry.jpg" alt="" />
                </div>

                <div className="flex flex-col items-center justify-center w-full font-mono h-1/3">
                  <h3>2024 Theory | Chemistry</h3>
                  <h4>Physical Chemistry</h4>
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

export default SpecificTeacher
