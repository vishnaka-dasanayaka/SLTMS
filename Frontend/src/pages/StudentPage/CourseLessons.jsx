import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PaidIcon from "@mui/icons-material/Paid";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navigation/Navbar";

function CourseLessons() {
  const params = useParams();

  const courseId = params.cId;
  const teacherId = params.tId;

  console.log(params);
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

        <div className="flex flex-col w-11/12 p-10"></div>
      </div>
    </div>
  );
}

export default CourseLessons;
