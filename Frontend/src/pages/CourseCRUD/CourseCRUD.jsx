import Navbar from "../../components/Navigation/Navbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PaidIcon from "@mui/icons-material/Paid";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { useEffect, useState } from "react";
import CreatePopup from "../../components/Popups/CreatePopup/CreatePopup";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import { Link } from "react-router-dom";
import Owner from "../../components/Owner/Owner";
import { getCourses, reset } from "../../features/courses/courseSlice";
import CourseCard from "../../components/Courses/CourseCard";

export default function CourseCRUD(props) {
  const [createButtonPop, setCreateButtonPopup] = useState(false);
  const dispatch = useDispatch();

  const { courses, isLoading, isError, message } = useSelector(
    (state) => state.courses
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getCourses());

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
            <li className="py-2 ">
              <Link to={"/teacherDashboard"}>
                <DashboardIcon />
              </Link>
            </li>

            <li className="py-2 active">
              <Link to={"/courseCRUD"}>
                <LibraryBooksIcon />
              </Link>
            </li>

            <li className="py-2 ">
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

        <div className="flex flex-col w-11/12">
          <div>
            <div className="mt-5 ml-10 ">
              <Owner />
            </div>
            <div className="flex justify-between">
              <div>
                <h1 className="mt-10 ml-32 text-2xl font-extrabold tracking-widest uppercase ">
                  your courses
                </h1>
              </div>

              <div className="mt-10 mr-36">
                <button
                  onClick={() => setCreateButtonPopup(true)}
                  className="px-5 py-1 mx-5 font-extrabold tracking-wider text-white uppercase bg-black border-2 border-black rounded-lg hover:bg-white hover:text-black"
                >
                  add
                </button>
              </div>
            </div>

            <div className="mt-10 ml-10">
              {(courses.length > 0) ? (
                <div className="grid justify-center grid-cols-1 md:grid-cols-3 ">
                  {courses.map((course) => (
                    <CourseCard key={course._id} course={course} />
                  ))}
                </div>
              ) : (
                <div className="ml-32 w-fit"><h1 className="px-3 py-2 text-2xl font-extrabold tracking-widest text-center text-white uppercase bg-yellow-300">No courses added yet</h1></div>
              )}
            </div>
          </div>
        </div>
      </div>

      <CreatePopup
        createTrigger={createButtonPop}
        setCreateTrigger={setCreateButtonPopup}
      ></CreatePopup>
    </div>
  );
}
