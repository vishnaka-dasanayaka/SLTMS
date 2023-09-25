import Navbar from "../../components/Navigation/Navbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PaidIcon from "@mui/icons-material/Paid";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser_teacher, reset } from "../../features/user/userSlice";
import { useEffect, useState } from "react";
import ProfilePicture from "../../components/Popups/ProfilePicture/ProfilePicture";
import axios from "axios";

function TeacherProfile(props) {
  const [profilePicture, setProfilePicture] = useState("teacher.png");
  const [pictureButtonPopup, setPictureButtonPopup] = useState(false);

  const refreshData = () => {
    axios
      .get(`/teachers/getProfilePicture/${id}`)
      .then((res) => {
        setProfilePicture(res.data);
      })
      .catch((res) => console.log(res));
    dispatch(getUser_teacher());
    return () => {
      reset();
    };
  };

  const setPic = (img) => {
    setPictureButtonPopup(img);
    refreshData();
  };

  const dispatch = useDispatch();

  const { user, isSuccess, isError, message } = useSelector(
    (state) => state.users
  );

  const id = user._id;
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    refreshData();
  }, [isError, isSuccess, message, dispatch, pictureButtonPopup]);

  //if (!user) return <Spinner />;

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

            <li className="py-2 active">
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

        {user ? (
          <>
            <div className="flex items-start justify-center w-11/12">
              <div className="w-1/4 p-5 m-5 bg-teal-400 rounded-lg">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-56 h-56 my-3">
                    <img
                      className="w-full h-full"
                      src={`/TeacherPhoto/${profilePicture}`}
                      alt=""
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="text-xl font-bold tracking-wide uppercase">
                      {user.firstName} {user.lastName}
                    </h3>
                  </div>
                  <div onClick={() => setPictureButtonPopup(true)}>
                    <h4 className="text-xs text-blue-500 underline cursor-pointer hover:text-black">
                      Edit Profile Picture
                    </h4>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-3/4 p-5 m-5 bg-teal-600 rounded-lg h-fit">
                <div className="flex items-center justify-start my-2">
                  <div className="w-56">
                    <h2 className="text-lg font-bold tracking-wider text-gray-200 uppercase">
                      First Name
                    </h2>
                  </div>

                  <div className="w-full px-3 bg-white">
                    <h3 className="text-lg font-bold tracking-wide">
                      {user.firstName}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-start my-2">
                  <div className="w-56">
                    <h2 className="text-lg font-bold tracking-wider text-gray-200 uppercase">
                      last Name
                    </h2>
                  </div>

                  <div className="w-full px-3 bg-white">
                    <h3 className="text-lg font-bold tracking-wide">
                      {user.lastName}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-start my-2">
                  <div className="w-56">
                    <h2 className="text-lg font-bold tracking-wider text-gray-200 uppercase">
                      email
                    </h2>
                  </div>

                  <div className="w-full px-3 bg-white">
                    <h3 className="text-lg font-bold tracking-wide">
                      {user.email}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-start my-2">
                  <div className="w-56">
                    <h2 className="text-lg font-bold tracking-wider text-gray-200 uppercase">
                      teaching area
                    </h2>
                  </div>

                  <div className="w-full px-3 bg-white">
                    <h3 className="text-lg font-bold tracking-wide">
                      {user.teachingArea}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-start my-2">
                  <div className="w-56">
                    <h2 className="text-lg font-bold tracking-wider text-gray-200 uppercase">
                      about
                    </h2>
                  </div>

                  <div className="w-full px-3 bg-white">
                    <h3 className="text-lg font-bold tracking-wide">
                      {user.about}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-start my-2">
                  <div className="w-56">
                    <h2 className="text-lg font-bold tracking-wider text-gray-200 uppercase">
                      password
                    </h2>
                  </div>

                  <div className="w-full">
                    <button className="px-2 text-sm font-bold tracking-wide uppercase bg-white rounded-lg hover:text-white hover:bg-black">
                      change passward
                    </button>
                  </div>
                </div>

                <div className="flex justify-center w-full my-10">
                  <button className="px-3 py-2 bg-yellow-400 rounded-md border-yellow-400 border-[1px] hover:bg-black hover:text-yellow-400 uppercase font-bold">
                    edit profile
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col w-full">
              <h1 className="px-3 py-2 m-5 text-2xl font-extrabold tracking-widest text-center text-white uppercase bg-yellow-300">
                No user logged yet
              </h1>

              <div className="flex items-start justify-center w-11/12">
                <div className="w-1/4 p-5 m-5 bg-teal-400 rounded-lg">
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-56 h-56 my-3">
                      <img
                        className="w-full h-full"
                        src="../img/teacher.png"
                        alt=""
                      />
                    </div>
                    <div className="mt-3">
                      <h3 className="text-xl font-bold tracking-wide uppercase">
                        <span className="text-xs opacity-30">
                          firstname lastname
                        </span>
                      </h3>
                    </div>
                    <div>
                      <h4 className="text-xs text-blue-500 underline cursor-pointer hover:text-black">
                        Edit Profile Picture
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-3/4 p-5 m-5 bg-teal-600 rounded-lg h-fit">
                  <div className="flex items-center justify-start my-2">
                    <div className="w-56">
                      <h2 className="text-lg font-bold tracking-wider text-gray-200 uppercase">
                        First Name
                      </h2>
                    </div>

                    <div className="w-full px-3 bg-white">
                      <h3 className="text-lg font-bold tracking-wide">
                        <span className="text-xs opacity-30">first name</span>
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center justify-start my-2">
                    <div className="w-56">
                      <h2 className="text-lg font-bold tracking-wider text-gray-200 uppercase">
                        last Name
                      </h2>
                    </div>

                    <div className="w-full px-3 bg-white">
                      <h3 className="text-lg font-bold tracking-wide">
                        <span className="text-xs opacity-30">last name</span>
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center justify-start my-2">
                    <div className="w-56">
                      <h2 className="text-lg font-bold tracking-wider text-gray-200 uppercase">
                        email
                      </h2>
                    </div>

                    <div className="w-full px-3 bg-white">
                      <h3 className="text-lg font-bold tracking-wide">
                        <span className="text-xs opacity-30">email</span>
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center justify-start my-2">
                    <div className="w-56">
                      <h2 className="text-lg font-bold tracking-wider text-gray-200 uppercase">
                        teaching area
                      </h2>
                    </div>

                    <div className="w-full px-3 bg-white">
                      <h3 className="text-lg font-bold tracking-wide">
                        <span className="text-xs opacity-30">
                          teaching area
                        </span>
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center justify-start my-2">
                    <div className="w-56">
                      <h2 className="text-lg font-bold tracking-wider text-gray-200 uppercase">
                        about
                      </h2>
                    </div>

                    <div className="w-full px-3 bg-white">
                      <h3 className="text-lg font-bold tracking-wide">
                        <span className="text-xs opacity-30">about</span>
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center justify-start my-2">
                    <div className="w-56">
                      <h2 className="text-lg font-bold tracking-wider text-gray-200 uppercase">
                        password
                      </h2>
                    </div>

                    <div className="w-full">
                      <button className="px-2 text-sm font-bold tracking-wide uppercase bg-white rounded-lg opacity-30 hover:text-white hover:bg-black">
                        change passward
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-center w-full my-10">
                    <button className="opacity-30 px-3 py-2 bg-yellow-400 rounded-md border-yellow-400 border-[1px] hover:bg-black hover:text-yellow-400 uppercase font-bold">
                      edit profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <ProfilePicture
        pic={profilePicture}
        pictureTrigger={pictureButtonPopup}
        setPictureTrigger={setPic}
      ></ProfilePicture>
    </div>
  );
}

export default TeacherProfile;
