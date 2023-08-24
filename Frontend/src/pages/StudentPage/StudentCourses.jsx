import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navigation/Navbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PaidIcon from "@mui/icons-material/Paid";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { Link } from "react-router-dom";
import StudentCourseCard from "../../components/Student/StudentCourseCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import { useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";

function StudentCourses() {
  const { user } = useSelector((state) => state.auth);

  const studentId = user._id;

  const [enrolledCourses, setEnrolledCourses] = useState();

  const fetchData = async () => {
    try {
      const result = await axios.get(
        `/students/getenrolledcourses/${studentId}`
      );
      setEnrolledCourses(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //console.log(enrolledCourses);

  if (!enrolledCourses) return <Spinner />;

  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="w-1/12 bg-[#d9d9d9] opacity-50 h-[100vh]">
          <ol className="text-center scale-[2] mt-32">
            <li className="py-2 ">
              <Link to={"/studentDashboard"}>
                <DashboardIcon />
              </Link>
            </li>

            <li className="py-2 active">
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
              <Link to={"/studentPay"}>
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
          {/* <div className="flex mb-10">
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
          </div> */}
          <div>
            <h1 className="w-full px-5 py-1 mt-10 text-3xl font-extrabold tracking-widest text-center text-white uppercase rounded-full bg-primary">
              enrolled Courses
            </h1>

            {enrolledCourses.length > 0 ? (
              <div className="grid justify-center grid-cols-1 lg:grid-cols-3">
                {enrolledCourses.map((course) => (
                  <StudentCourseCard
                    key={course._id}
                    course={course}
                    butt={true}
                  />
                ))}
              </div>
            ) : (
              <div className="ml-32 w-fit">
                <h1 className="px-3 py-2 text-2xl font-extrabold tracking-widest text-center text-white uppercase bg-yellow-300">
                  oops ..! there are no any courses in our site by now
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentCourses;
