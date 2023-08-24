import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import Spinner from "../../Spinner/Spinner";

function CourseDetailPopup(props) {
  const [isLoading, setIsLoading] = useState(false); // State to track loading status

  const { user } = useSelector((state) => state.auth);

  const studentId = user._id;
  //console.log(studentId);

  const courseId = props.course._id;
  //console.log(courseId);

  const unEnroll = async () => {
    try {
      setIsLoading(true); // Set loading state to true
      await axios.put(`/students/unenrollCourse/${studentId}/${courseId}`);
      toast.success("Unenrolled from the course");
      setIsLoading(false); // Set loading state back to false when done
    } catch (error) {
      console.log(error);
      setIsLoading(false); // Ensure loading state is reset in case of an error
    }
  };
  const navigate = useNavigate();

  const onCloseClick = () => {
    props.setDetailTrigger(false);
  };

  // here is a vulnerability,,,, better to have separate axios to get course id
  const onClick = () => {
    if (props.butt) {
      unEnroll();
    } else {
      navigate(`/payForCourse/${props.course._id}`);
    }
  };

  //console.log(props.butt);
  return props.detailTrigger ? (
    <div>
      <div className="">
        <div className="fixed top-0 left-0 flex items-center justify-center w-full z-1 h-[100vh] bg-primary/10">
          <div className="flex flex-col max-w-2xl p-5 bg-white border-2 border-black rounded-2xl">
            <div className="text-right">
              <button onClick={onCloseClick}>
                <CloseIcon className="scale-150" />
              </button>
            </div>

            <div className="flex flex-col items-center">
              <div className="mt-5">
                <h1 className="text-2xl font-extrabold tracking-widest uppercase">
                  {props.course.courseTitle}
                </h1>
              </div>
              <div className="flex justify-center h-48 mt-5 bg-white border-2 border-black w-72">
                <img className="h-full p-2" src="../img/math.jpg" alt="" />
              </div>
              <div className="mt-5">
                <h2 className="text-2xl font-bold tracking-wider uppercase">
                  {props.course.category}
                </h2>
              </div>
              <div className="mt-5">
                <h3 className="text-2xl font-semibold tracking-wide uppercase">
                  {props.course.subject}
                </h3>
              </div>
              <div className="mt-5">
                <h3>teacher.firstName</h3>
              </div>
              <div className="mt-5">
                <p>{props.course.desc}</p>
              </div>
              <div className="mt-5">
                <h3>{props.course.fee}</h3>
              </div>
              <div className="my-5">
                <button
                  onClick={onClick}
                  className="p-1 text-white uppercase bg-black border-2 border-black rounded-lg hover:bg-white hover:text-black"
                >
                  {isLoading ? (
                    <>pendind</>
                  ) : props.butt ? (
                    <>unenroll me</>
                  ) : (
                    <>enroll me</>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default CourseDetailPopup;
