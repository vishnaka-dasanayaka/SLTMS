import Navbar from "../../components/Navigation/Navbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PaidIcon from "@mui/icons-material/Paid";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { Link } from "react-router-dom";
//import StarIcon from "@mui/icons-material/Star";
import SearchBar from "../../components/SearchBar/SearchBar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function StudentDashboard() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   getAllCourses();
  // }, []);

  // const getAllCourses = () => {
  //   fetch(`${url}courses`, {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data, "courses");
  //       setData(data.data);
  //     });
  // };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="w-1/12 bg-[#d9d9d9] opacity-50 h-[100vh]">
          <ol className="text-center scale-[2] mt-32">
            <li className="py-2 active">
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
          <div className="flex mb-10">
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
          </div>
          <div>
            <h2 className="text-2xl font-extrabold tracking-wide">Teachers</h2>
            <div className="grid justify-center grid-cols-3">
              {/* {data.map((i) => {
                return (
                  <Link to={"/specificCourse"}>
                    <div className="mx-5 mt-10">
                      <div className="flex w-full flex-col bg-gradient-to-bl from-[#9bd8d3] h-80">
                        <div className="w-full h-2/3">
                          <img
                            className="w-full h-full"
                            src="../img/teacher.jpg"
                            alt=""
                          />
                        </div>
                        <div>
                          <section className="bg-primary">
                            <StarIcon className="text-yellow-300" />
                            <StarIcon className="text-yellow-300" />
                            <StarIcon className="text-yellow-300" />
                            <StarIcon className="text-yellow-300" />
                            <StarIcon className="text-white" />
                          </section>

                          <section className="w-11/12 h-[1px] mt-5 m-auto bg-black"></section>

                          <section className="text-center">
                            <h3 className="m-1 font-bold">
                              Dr. Rajitha Udawalpola
                            </h3>
                            <h4>{i.category}</h4>
                          </section>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })} */}
            </div>
          </div>
          <br />
          <div>
            <h2 className="text-2xl font-extrabold tracking-wide">
              Top Courses
            </h2>

            <div className="grid justify-center grid-cols-3">
              {/* {data.map((i) => {
                return (
                  <Link to={"/specificCourse"}>
                    <div className="mx-5 mt-10">
                      <div className="flex w-full flex-col bg-gradient-to-bl from-[#9bd8d3] h-80">
                        <div className="w-full h-2/3">
                          <img
                            className="w-full h-full"
                            src="../img/math.jpg"
                            alt=""
                          />
                        </div>
                        <div>
                          <section className="bg-primary">
                            <StarIcon className="text-yellow-300" />
                            <StarIcon className="text-yellow-300" />
                            <StarIcon className="text-yellow-300" />
                            <StarIcon className="text-yellow-300" />
                            <StarIcon className="text-white" />
                          </section>

                          <section className="w-11/12 h-[1px] mt-5 m-auto bg-black"></section>

                          <section className="text-center">
                            <h3 className="m-1 font-bold">
                              Dr. Rajitha Udawalpola
                            </h3>
                            <h4>{i.courseTitle}</h4>
                          </section>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
