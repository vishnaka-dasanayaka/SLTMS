
import Navbar from '../../components/Navigation/Navbar'
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PaidIcon from "@mui/icons-material/Paid";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { Link } from 'react-router-dom'


function TeacherHelp() {



  return (
    <div>
        <Navbar/>
        <div className="flex justify-center">
        <div className="w-1/12 bg-[#d9d9d9] opacity-50 h-[100vh]">
          <ol className="text-center scale-[2] mt-32">
          <li className="py-2 ">
            <Link to={"/teacherDashboard"}>
            <DashboardIcon />
              </Link>  
              
            </li>

            
            <li className="py-2 ">
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

            <li className="py-2 active">
            <Link to={"/teacherHelp"}>
            <HelpCenterIcon />
              </Link>  
              
            </li>
          </ol>
        </div>

        <div className="flex flex-col w-11/12">
          
        </div>
      </div>
    </div>
  )
}

export default TeacherHelp
