import Navbar from "../../components/Navigation/Navbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PaidIcon from "@mui/icons-material/Paid";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createLesson, deleteLesson } from "../../features/lessons/lessonSlice";
import Spinner from "../../components/Spinner/Spinner";
import {getLessons} from '../../features/lessons/lessonSlice'

function UploadLesson() {
  const dispatch = useDispatch();
  const params = useParams();
  const courseID = params.id;

  const [formData, setFormData] = useState({
    month: "",
    lessonTitle: "",
    duration: "",
    description: "",
    file: "",
    course: courseID
  });

  const { month, lessonTitle, duration, description, file,course } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

  

    if (!month || !lessonTitle || !duration || !description || !file) {
      toast.error("All fields are mandetory");
    } else {
      const lessonData = {
        month,
        lessonTitle,
        duration,
        description,
        file,
        course
      };

      console.log(lessonData);

      dispatch(createLesson(lessonData));
    }
  };

  const {lessons,isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.lessons
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (isSuccess) {
    }

    dispatch(getLessons(courseID))

    
  }, [isError, isSuccess, message,courseID,dispatch]);

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
          <form action="" onSubmit={onSubmit}>
            <div className="flex flex-col justify-center mb-5">

            <div className="flex flex-col sm:flex-row mx-[5vw] mb-[2vh]">
                <div className="flex min-w-[100px] mr-[5vw] sm:justify-start justify-center">
                  <label
                    htmlFor="year"
                    className="mb-[1vh] sm:mb-[0] uppercase"
                  >
                    Number of lessons
                  </label>
                </div>
                <div className="flex w-full sm:justify-start">
                  <h2 className="px-4 py-2 text-lg text-white bg-black hover:text-black hover:bg-white hover:border-[1px] rounded-full border-black h-fit">{lessons.length}</h2>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row mx-[5vw] mb-[2vh]">
                <div className="flex min-w-[100px] mr-[5vw] sm:justify-start justify-center">
                  <label htmlFor="year" className="mb-[1vh] sm:mb-[0]">
                    MONTH
                  </label>
                </div>
                <div className="flex justify-center w-full sm:justify-start">
                  <select
                    value={month}
                    name="month"
                    id="month"
                    onChange={onChange}
                    className="p-2 min-w-[200px] border-solid border-4 bg-slate-200"
                  >
                    <option value="">Select a  Month</option>
                    <option value="january">January</option>
                    <option value="february">February</option>
                    <option value="march">March</option>
                    <option value="april">April</option>
                    <option value="may">May</option>
                    <option value="june">June</option>
                    <option value="july">July</option>
                    <option value="august">August</option>
                    <option value="september">September</option>
                    <option value="october">October</option>
                    <option value="november">November</option>
                    <option value="december">December</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row mx-[5vw] mb-[2vh]">
                <div className="flex min-w-[100px] mr-[5vw] sm:justify-start justify-center">
                  <label
                    htmlFor="year"
                    className="mb-[1vh] sm:mb-[0] uppercase"
                  >
                    lesson TITLE
                  </label>
                </div>
                <div className="flex justify-center w-full sm:justify-start">
                  <input
                    type="text"
                    id="lessonTitle"
                    name="lessonTitle"
                    value={lessonTitle}
                    placeholder="Approprate title for ypur lesson"
                    onChange={onChange}
                    className="p-2 min-w-[200px] border-solid border-4 bg-slate-200"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row mx-[5vw] mb-[2vh]">
                <div className="flex min-w-[100px] mr-[5vw] sm:justify-start justify-center">
                  <label
                    htmlFor="year"
                    className="uppercase mb-[1vh] sm:mb-[0]"
                  >
                    Duration
                  </label>
                </div>
                <div className="flex items-center justify-center w-full sm:justify-start">
                  <input
                    type="text"
                    id="duration"
                    name="duration"
                    value={duration}
                    placeholder="Avarage duration for ypur lesson"
                    onChange={onChange}
                    className="p-2 min-w-[200px] border-solid border-4 bg-slate-200"
                  /><div className="ml-5 font-semibold text-md">Hrs</div>
                </div>
                
              </div>

              <div className="flex flex-col sm:flex-row mx-[5vw] mb-[2vh]">
                <div className="flex min-w-[100px] mr-[5vw] sm:justify-start justify-center">
                  <label
                    htmlFor="year"
                    className="mb-[1vh] uppercase sm:mb-[0]"
                  >
                    Description
                  </label>
                </div>
                <div className="flex justify-center w-full sm:justify-start ">
                  <textarea
                    type="text"
                    id="description"
                    name="description"
                    value={description}
                    placeholder="Brieflt describe your lesson"
                    onChange={onChange}
                    className="p-2 min-w-[200px] border-solid border-4 bg-slate-200"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row mx-[5vw] mb-[2vh]">
                <div className="flex min-w-[100px] mr-[5vw] sm:justify-start justify-center">
                  <label
                    htmlFor="year"
                    className="uppercase mb-[1vh] sm:mb-[0]"
                  >
                    Add Files
                  </label>
                </div>
                <div className="flex justify-center p-5 w-fit sm:justify-start bg-slate-200">
                  <input
                    type="text"
                    id="file"
                    name="file"
                    value={file}
                    placeholder="add files"
                    onChange={onChange}
                    className="min-w-[200px] border-solid border-4 bg-slate-200"
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <button className="px-5 py-2 text-white bg-orange-500 rounded-xl border-[1px] border-orange-500 hover:bg-white hover:text-orange-500 cursor-pointer tracking-wider text-xl uppercase">
                  add lesson
                </button>
              </div>
            </div>
          </form>

          {/* uploaded lessons */}

          <div className="flex flex-col">
            {/*<div className="flex items-center justify-center m-5">
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
            </div>*/}

      {lessons.length >0 ? (<div className="grid items-center justify-center w-full grid-cols-1 mt-10 lg:grid-cols-2">
        
        {lessons.map((lesson) => 
        
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
              <h3 className="text-sm">{new Date(lesson.createdAt).toLocaleString("en-us")}</h3>
              <br />
              <h2 className="font-bold text-l">{lesson.lessonTitle}</h2>
              {/* <h2 className="font-bold text-l">Part I</h2> */}
              <h2 className="mt-2 font-bold text-l">{lesson.duration} Hrs</h2>
              <br />
              <h3 className="text-sm tracking-widest uppercase">{lesson.month}</h3>
              <br />
              <div className="flex justify-between w-full">
                <button className="px-3 py-1 border-[1px] border-blue-500  hover:text-blue-500 hover:bg-white text-white uppercase bg-blue-500 rounded-lg">
                  view
                </button>

                <button className="px-3 py-1 border-[1px] border-yellow-500  hover:text-yellow-500 hover:bg-white  text-white uppercase bg-yellow-500 rounded-lg">
                  edit
                </button>

                <button onClick={()=>{dispatch(deleteLesson(lesson._id))}} className="mr-5 px-3 py-1 border-[1px] border-red-500  hover:text-red-500 hover:bg-white  text-white uppercase bg-red-500 rounded-lg">
                  delete
                </button>
                
              </div>
              
            </div>
          </div>
        </div>
      

        )}
        

        </div>):(
                          <div className="ml-32 w-fit"><h1 className="px-3 py-2 text-2xl font-extrabold tracking-widest text-center text-white uppercase bg-yellow-300">No courses added yet</h1></div>
        )}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadLesson;
