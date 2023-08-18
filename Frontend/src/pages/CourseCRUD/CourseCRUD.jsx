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

export default function CourseCRUD(props) {
  const [createButtonPop, setCreateButtonPopup] = useState(false);
  const dispatch = useDispatch();

  const { courses, isLoading, isError, message } = useSelector(
    (state) => state.courses
  );

  useEffect(() => {
    if(isError){
      console.log(message)
    }


    dispatch(getCourses())

    return () => {
      dispatch(reset())
    }

  },[isError,message,dispatch])



    if(isLoading){
      return <Spinner/>
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
              
                {courses.length > 0 ? (<div className="grid justify-center grid-cols-3">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-start justify-center">
                    <div className="pr-5">
                      <h1>Course ID</h1>
                    </div>
                    <div>
                      <h2>02</h2>
                    </div>
                  </div>

                  <div className="flex items-start justify-center">
                    <div className="pr-5">
                      <h1>Category</h1>
                    </div>
                    <div>
                      <h2>02</h2>
                    </div>
                  </div>

                  <div className="flex items-start justify-center">
                    <div className="pr-5">
                      <h1>subject</h1>
                    </div>
                    <div>
                      <h2>02</h2>
                    </div>
                  </div>

                  <div className="flex items-start justify-center">
                    <div className="pr-5">
                      <h1>course titke</h1>
                    </div>
                    <div>
                      <h2>02</h2>
                    </div>
                  </div>

                  <div className="flex items-start justify-center">
                    <div className="pr-5">
                      <h1>fee</h1>
                    </div>
                    <div>
                      <h2>02</h2>
                    </div>
                  </div>

                  <div className="flex items-start justify-center">
                    <div className="pr-5">
                      <h1>desc</h1>
                    </div>
                    <div>
                      <h2>02</h2>
                    </div>
                  </div>

                  <div className="flex items-start justify-center">
                    <button className="px-3 bg-red-300 ">view</button>
                    <button className="px-3 bg-yellow-300 ">edit</button>
                    <button className="px-3 bg-blue-300 ">delete</button>
                  </div>
                </div>
                </div>) : (<h3>No courses{courses.length}</h3>)}
                




              
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
