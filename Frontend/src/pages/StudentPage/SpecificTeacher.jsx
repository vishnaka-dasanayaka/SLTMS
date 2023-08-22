import Navbar from "../../components/Navigation/Navbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PaidIcon from "@mui/icons-material/Paid";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { Link, useParams } from "react-router-dom";
//import SearchBar from "../../components/SearchBar/SearchBar";
//import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StudentCourseCard from "../../components/Student/StudentCourseCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOneTeacher, reset } from "../../features/user/userSlice";
import Spinner from "../../components/Spinner/Spinner";
import { getTeachersCourse } from "../../features/courses/courseSlice";

function SpecificTeacher() {
  const params = useParams();
  const teacherID = params.id;

  const dispatch = useDispatch();

  const { teacher, isLoading, isError, message } = useSelector(
    (state) => state.users
  );

  const { teachersCourses } = useSelector((state) => state.courses);
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getOneTeacher(teacherID));
    dispatch(getTeachersCourse(teacherID));

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch, teacherID] );

  if (isLoading) {
    return <Spinner />;
  }

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

          <div className="flex flex-col">
            <div className="flex items-center justify-center">
              <div className="m-5 w-2/5 rounded-lg border-[2px] border-black h-fit">
                <img
                  className="h-auto p-5 w-fit"
                  src="../img/teacher.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col w-3/5 p-5 m-2 bg-blue-100 rounded-xl h-fit">
                <div className="mt-5">
                  <h1 className="text-2xl font-extrabold tracking-wider uppercase">
                    {teacher.firstName} {teacher.lastName}
                  </h1>
                </div>
                <div className="mt-3">
                  <h2 className="text-xl font-semibold tracking-wide uppercase">
                    {teacher.teachingArea}
                  </h2>
                </div>
                <div className="mt-3">
                  <h3 className="text-lg font-bold">
                    <a
                      className="text-blue-500 underline hover:text-lime-600 hover:no-underline"
                      href={`mailto:${teacher.email}`}
                    >
                      {teacher.email}
                    </a>
                  </h3>
                </div>
                <div className="mt-3 mb-5">
                  <p>{teacher.about}</p>
                </div>
              </div>
            </div>

            <h1 className="w-full px-5 py-1 mt-10 text-3xl font-extrabold tracking-widest text-center text-white uppercase rounded-full bg-primary">
              available courses
            </h1>

            {teachersCourses.length > 0 ? (
              <div className="grid justify-center grid-cols-1 lg:grid-cols-3">
                {teachersCourses.map((course) => (
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
        </div>
      </div>
    </div>
  );
}

export default SpecificTeacher;
