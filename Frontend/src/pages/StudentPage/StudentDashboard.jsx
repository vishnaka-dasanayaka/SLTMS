import Navbar from "../../components/Navigation/Navbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PaidIcon from "@mui/icons-material/Paid";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { Link } from "react-router-dom";
// import SearchBar from "../../components/SearchBar/SearchBar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TeacherCard from "../../components/Student/TeacherCard";
import StudentCourseCard from "../../components/Student/StudentCourseCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses, reset } from "../../features/courses/courseSlice";
import { getAllTeachers } from "../../features/user/userSlice";
import Spinner from "../../components/Spinner/Spinner";

function StudentDashboard() {
  const dispatch = useDispatch();

  const { allCourses, isLoading, isError, message } = useSelector(
    (state) => state.courses
  );

  const {teachers} = useSelector(
    (state)=>state.users
    )

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getAllCourses());
    dispatch(getAllTeachers());

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="w-1/12 bg-[#d9d9d9] opacity-50 h-[100vh]">
          <ol className="text-center scale-[2] mt-32">
            <li className="py-2 active">
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
            <h2 className="text-3xl font-extrabold tracking-wider text-center uppercase">
              courses
            </h2>

            {allCourses.length > 0 ? (
              <div className="grid justify-center grid-cols-1 lg:grid-cols-3">
                {allCourses.map((course) => (
                  <StudentCourseCard key={course._id} course={course} />
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
          <br />
          <div>
            <h2 className="text-3xl font-extrabold tracking-wider text-center uppercase">
              teachers
            </h2>

            {teachers.length > 0 ? (
            <div className="grid justify-center grid-cols-1 lg:grid-cols-3">
            {teachers.map((teacher) => (
                  <TeacherCard key={teacher._id} teacher={teacher} />
                ))}
              </div>
            ) : (
              <div className="ml-32 w-fit">
                <h1 className="px-3 py-2 text-2xl font-extrabold tracking-widest text-center text-white uppercase bg-yellow-300">
                  oops ..! there are no any teachers in our site by now
                </h1>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
