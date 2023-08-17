import {useEffect} from 'react'
import Navbar from '../../components/Navigation/Navbar'
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PaidIcon from "@mui/icons-material/Paid";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function TeacherPay() {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      toast.warning("First, you should login to the system");
      navigate("/signin");
    }
  }, [user, navigate]);


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

            <li className="py-2 active">
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
          
        </div>
      </div>
    </div>
  )
}

export default TeacherPay
