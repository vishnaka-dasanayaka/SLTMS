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
import CourseCard from "../../components/Student/CourseCard";

function SpecificTeacher() {

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
            <div className="m-5 w-2/5 rounded-lg border-[2px] border-black h-fit">
              <img className="h-auto p-5 w-fit" src="../img/teacher.jpg" alt="" />
            </div>
            <div className="flex flex-col w-3/5 p-5 m-2 bg-blue-100 rounded-xl h-fit">
              <div className="mt-5"><h1 className="text-2xl font-extrabold tracking-wider uppercase">fName lname</h1></div>
              <div className="mt-3"><h2 className="text-xl font-semibold tracking-wide uppercase">teaching area</h2></div>
              <div className="mt-3"><h3 className="text-lg font-bold"><a className="text-blue-500 underline hover:text-lime-600 hover:no-underline" href="">email</a></h3></div>
              <div className="mt-3 mb-5"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, deleniti illum quia est incidunt pariatur. Commodi, obcaecati perferendis maiores, numquam quam ratione ex esse cumque iusto debitis nesciunt, inventore minus?</p></div>
            </div>
          </div>

          <h1 className="w-full px-5 py-1 mt-10 text-3xl font-extrabold tracking-widest text-center text-white uppercase rounded-full bg-primary">available courses</h1>
          <div className="grid justify-center grid-cols-1 lg:grid-cols-3">
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
            </div>
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default SpecificTeacher
