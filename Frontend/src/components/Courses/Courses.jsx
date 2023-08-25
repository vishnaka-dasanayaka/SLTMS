import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses, reset } from "../../features/courses/courseSlice";
import Spinner from "../Spinner/Spinner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Courses() {
  const dispatch = useDispatch();
  const { allCourses, isLoading } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(getAllCourses());

    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="m-w-[1200px]">
      <h1 className="ml-[20px] text-5xl">Courses on Edu.com</h1>

      <div className="w-screen overflow-x-auto whitespace-nowrap">
        {allCourses.length > 0 ? (
          <div className="inline-flex m-5">
            {allCourses.map((course) => (
              <div
                key={course.id}
                className="min-w-[300px] mr-[20px] bg-[#d2d2d2] rounded-xl p-[20px]"
              >
                <div className="rounded-xl m-5 bg-[#d2d2d2]">
                  <div className="backImage bg-center bg-cover rounded-[50%] mt-10 mx-auto w-[170px] h-[170px]"></div>

                  <div className="flex flex-col items-center justify-center">
                    <h2 className="text-xl mt-10 py-1 px-5 text-white rounded-lg bg-[#373737]">
                      {course.subject}
                    </h2>
                    <h3 className="mt-5">teacher name</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h1 className="empty-message">
            oops ..! there are no any courses in our site by now
          </h1>
        )}
      </div>
    </div>
  );
}

export default Courses;
