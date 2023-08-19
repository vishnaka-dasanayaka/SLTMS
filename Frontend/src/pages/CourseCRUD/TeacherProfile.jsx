import Navbar from "../../components/Navigation/Navbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PaidIcon from "@mui/icons-material/Paid";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { Link } from "react-router-dom";


function TeacherProfile() {
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

        <div className="flex items-start justify-center w-11/12">
          <div className="w-1/4 p-5 m-5 bg-teal-400 rounded-lg">
            <div className="flex flex-col items-center justify-center">
              <div className="w-56 h-56 my-3"><img className="w-full h-full" src="../img/teacher.png" alt="" /></div>
              <div className="mt-3">
                <h3 className="text-xl font-bold tracking-wide uppercase">firstName lastName</h3>
              </div>
              <div>
                <h4 className="text-xs text-blue-500 underline cursor-pointer hover:text-black">Edit Profile Picture</h4>
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
                <h3 className="text-lg font-bold tracking-wide">firstName</h3>
              </div>
              
            </div>

            <div className="flex items-center justify-start my-2">
              <div className="w-56">
                <h2 className="text-lg font-bold tracking-wider text-gray-200 uppercase">
                  last Name
                </h2>
              </div>

              <div className="w-full px-3 bg-white">
                <h3 className="text-lg font-bold tracking-wide">firstName</h3>
              </div>
              
            </div>

            <div className="flex items-center justify-start my-2">
              <div className="w-56">
                <h2 className="text-lg font-bold tracking-wider text-gray-200 uppercase">
                  email
                </h2>
              </div>

              <div className="w-full px-3 bg-white">
                <h3 className="text-lg font-bold tracking-wide">firstName</h3>
              </div>
              
            </div>

            <div className="flex items-center justify-start my-2">
              <div className="w-56">
                <h2 className="text-lg font-bold tracking-wider text-gray-200 uppercase">
                  teaching area
                </h2>
              </div>

              <div className="w-full px-3 bg-white">
                <h3 className="text-lg font-bold tracking-wide">firstName</h3>
              </div>
              
            </div>

            <div className="flex items-center justify-start my-2">
              <div className="w-56">
                <h2 className="text-lg font-bold tracking-wider text-gray-200 uppercase">
                  about
                </h2>
              </div>

              <div className="w-full px-3 bg-white">
                <h3 className="text-lg font-bold tracking-wide">firstName</h3>
              </div>
              
            </div>

            <div className="flex items-center justify-start my-2">
              <div className="w-56">
                <h2 className="text-lg font-bold tracking-wider text-gray-200 uppercase">
                  password
                </h2>
              </div>

              <div className="w-full px-3 bg-white">
                <h3 className="text-lg font-bold tracking-wide">firstName</h3>
              </div>
              
            </div>
            
            <div className="flex justify-center w-full my-10">
                <button className="px-3 py-2 bg-yellow-400 rounded-md border-yellow-400 border-[1px] hover:bg-black hover:text-yellow-400 uppercase font-bold">edit profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherProfile;
