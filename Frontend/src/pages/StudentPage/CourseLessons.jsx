import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PaidIcon from "@mui/icons-material/Paid";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navigation/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";

function CourseLessons() {
  const params = useParams();
  const navigate = useNavigate();

  const courseId = params.cId;
  const teacherId = params.tId;

  const [lessons, setLessons] = useState();

  const getLessons = async () => {
    try {
      const requiredLessons = await axios.get(
        `/lessons/getlessonsbycourse/${courseId}`
      );
      setLessons(requiredLessons.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLessons();
  }, []);

  console.log(lessons);

  if (!lessons) return <Spinner />;

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
          <div className="absolute top-44 right-24">
            <button
              onClick={() => {
                navigate(`/specificTeacher/${teacherId}`);
              }}
              className="px-5 py-1 font-extrabold tracking-widest text-white uppercase bg-btn_color rounded-xl border-[1px] border-btn_color hover:bg-white hover:text-btn_color"
            >
              teacher
            </button>
          </div>

          {lessons.length > 0 ? (
            <div className="grid items-center justify-center w-full grid-cols-1 mt-24 lg:grid-cols-2">
              {lessons.map((lesson) => (
                <div className=" mx-20 border-black border-[1px] rounded-xl h-60 mb-5">
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
                      <h3 className="text-sm">
                        {new Date(lesson.createdAt).toLocaleString("en-us")}
                      </h3>
                      <br />
                      <h2 className="font-bold text-l">{lesson.lessonTitle}</h2>
                      {/* <h2 className="font-bold text-l">Part I</h2> */}
                      <h2 className="mt-2 font-bold text-l">
                        {lesson.duration} Hrs
                      </h2>
                      <br />
                      <h3 className="text-sm tracking-widest uppercase">
                        {lesson.month}
                      </h3>
                      <br />

                      <div className="flex flex-row items-center justify-between w-11/12">
                        <div>
                          <Link to={`/lessondetails/${lesson._id}`}>
                            <button className="hover:bg-white hover:text-btn_color px-3 py-1 text-white uppercase border-[1px] border-btn_color rounded-lg bg-btn_color">
                              view
                            </button>
                          </Link>
                        </div>

                        <div>
                          <button className="hover:bg-white hover:text-blue-400 px-3 py-1 text-white uppercase border-[1px] border-blue-400 rounded-lg bg-blue-400">
                            attempt quiz
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="ml-32 w-fit">
              <h1 className="px-3 py-2 text-2xl font-extrabold tracking-widest text-center text-white uppercase bg-yellow-300">
                No courses added yet
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseLessons;
