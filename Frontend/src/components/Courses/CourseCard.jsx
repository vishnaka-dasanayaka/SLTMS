import { useDispatch } from "react-redux";
import { deleteCourse } from "../../features/courses/courseSlice";

function CourseCard({ course }) {
  const dispatch = useDispatch();
  return (
    <div className="border-black border-[2px] m-5 px-2 py-3 rounded-xl">
      <div className="flex flex-col">
        <div className="flex items-center mb-2">
          <div className="w-40 px-2 font-bold tracking-wider text-white uppercase rounded-lg text-md bg-primary">
            timestamp{" "}
          </div>
          <div className="ml-3 text-sm font-semibold tracking-wide uppercase">
            {new Date(course.createdAt).toLocaleString("en-us")}
          </div>
        </div>

        <div className="flex items-center mb-2">
          <div className="w-40 px-2 font-bold tracking-wider text-white uppercase rounded-lg text-md bg-primary">
            Course id{" "}
          </div>
          <div className="ml-3 text-sm font-semibold tracking-wide uppercase">
            {course.courseID}
          </div>
        </div>

        <div className="flex items-center mb-2">
          <div className="w-40 px-2 font-bold tracking-wider text-white uppercase rounded-lg text-md bg-primary">
            category{" "}
          </div>
          <div className="ml-3 text-sm font-semibold tracking-wide uppercase">
            {course.category}
          </div>
        </div>

        <div className="flex items-center mb-2">
          <div className="w-40 px-2 font-bold tracking-wider text-white uppercase rounded-lg text-md bg-primary">
            subject{" "}
          </div>
          <div className="ml-3 text-sm font-semibold tracking-wide uppercase">
            {course.subject}
          </div>
        </div>

        <div className="flex items-center mb-2">
          <div className="w-40 px-2 font-bold tracking-wider text-white uppercase rounded-lg text-md bg-primary">
            Course Title{" "}
          </div>
          <div className="ml-3 text-sm font-semibold tracking-wide uppercase">
            {course.courseTitle}
          </div>
        </div>

        <div className="flex items-center mb-2">
          <div className="w-40 px-2 font-bold tracking-wider text-white uppercase rounded-lg text-md bg-primary">
            Course fee{" "}
          </div>
          <div className="ml-3 text-sm font-semibold tracking-wide uppercase">
            {course.fee}
          </div>
        </div>

        <div className="flex items-center mb-2">
          <div className="w-40 px-2 font-bold tracking-wider text-white uppercase rounded-lg text-md bg-primary">
            description{" "}
          </div>
          <div className="ml-3 text-sm font-semibold tracking-wide uppercase">
            {course.desc}
          </div>
        </div>

        <div className="flex items-center justify-between mx-10">
          <button className="border-[1px] border-blue-500  hover:text-blue-500 hover:bg-white w-20 px-2 py-1 text-white uppercase bg-blue-500 rounded-lg">
            view
          </button>
          <button className="border-[1px] border-yellow-500  hover:text-yellow-500 hover:bg-white w-20 px-2 py-1 text-white uppercase bg-yellow-500 rounded-lg">
            edit
          </button>
          <button
            onClick={() => {dispatch(deleteCourse(course._id))}}
            className="border-[1px] border-red-500  hover:text-red-500 hover:bg-white w-20 px-2 py-1 text-white uppercase bg-red-500 rounded-lg"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
