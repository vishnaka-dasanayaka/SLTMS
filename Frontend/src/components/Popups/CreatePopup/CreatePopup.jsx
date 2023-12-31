import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createCourse } from "../../../features/courses/courseSlice";
import Spinner from "../../Spinner/Spinner";

function CreatePopup(props) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    courseID: "",
    category: "",
    subject: "",
    courseTitle: "",
    fee: "",
    desc: "",
  });

  const { courseID, category, subject, courseTitle, fee, desc } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onClick = (e) => {
    e.preventDefault();

    if (!courseID || !category || !subject || !courseTitle || !fee || !desc) {
      toast.warn("All fields are mandetory");
    } else {
      const courseData = {
        courseID,
        category,
        subject,
        courseTitle,
        fee,
        desc,
      };

      dispatch(createCourse(courseData));
    }
  };

  const onCancelClick = () => {
    props.setCreateTrigger(false);
  };

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.courses
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (isSuccess) {
    }
  }, [isError, message, isSuccess]);

  if (isLoading) {
    return <Spinner />;
  }

  return props.createTrigger ? (
    <div className="">
      <div className="z-1 fixed top-0 left-0 w-full h-[100vh] bg-black/20 flex justify-center items-center">
        <div className="top-0 px-10 left-0 w-[400px] bg-[#0e2d2b] h-[550px] rounded-2xl">
          <h1 className="mt-5 text-2xl font-extrabold tracking-widest text-center text-white uppercase">
            create a course
          </h1>

          <form className="mt-5" action="" onSubmit={onClick}>
            <label className="pr-16 tracking-wide text-white" htmlFor="">
              Course ID
            </label>
            <br />
            <input
              className="w-full pl-2 mb-2 rounded-lg opacity-70"
              type="text"
              name="courseID"
              value={courseID}
              autoComplete="off"
              placeholder="course number"
              id="courseID"
              onChange={onChange}
            />
            <br />

            <label className="pr-16 tracking-wide text-white" htmlFor="">
              Category
            </label>
            <br />

            <select
              value={category}
              name="category"
              id="category"
              onChange={onChange}
              className="w-full pl-2 mb-2 rounded-lg opacity-70"
            >
              <option value="">Select the category</option>
              <option value="University Level">University Level</option>
              <option value="Advanced Level">Advanced Level</option>
              <option value="Ordinary Level">Ordinary Level</option>
              <option value="Schorlarship Level">Schorlarship Level</option>
            </select>

            <br />

            <label className="pr-16 tracking-wide text-white" htmlFor="">
              Subject
            </label>
            <br />
            <input
              type="text"
              name="subject"
              value={subject}
              autoComplete="off"
              placeholder="Corresponding subject"
              id="subject"
              onChange={onChange}
              className="w-full pl-2 mb-2 rounded-lg opacity-70"
            />
            <br />

            <label className="pr-16 tracking-wide text-white" htmlFor="">
              Course Title
            </label>
            <br />
            <input
              type="text"
              name="courseTitle"
              value={courseTitle}
              autoComplete="off"
              placeholder="Course Topic"
              id="courseTitle"
              onChange={onChange}
              className="w-full pl-2 mb-2 rounded-lg opacity-70"
            />
            <br />

            <label className="pr-16 tracking-wide text-white" htmlFor="">
              Fee
            </label>
            <br />
            <input
              type="text"
              name="fee"
              value={fee}
              autoComplete="off"
              placeholder="Enter monthly fee"
              id="fee"
              onChange={onChange}
              className="w-full pl-2 mb-2 rounded-lg opacity-70"
            />
            <br />

            <label className="pr-16 tracking-wide text-white" htmlFor="">
              Description
            </label>
            <br />
            <input
              type="text"
              name="desc"
              value={desc}
              autoComplete="off"
              placeholder="Briefly describe youre course"
              id="desc"
              onChange={onChange}
              className="w-full pl-2 mb-2 rounded-lg opacity-70"
            />
            <br />

            <div className="flex justify-center">
              <button
                type="submit"
                className="
                    mx-5
                    font-bold
                    tracking-wider
                    mt-5
                    uppercase
                    bg-[#40908b]
                    text-white
                    py-1
                    px-5
                    rounded-xl
                    hover:bg-white
                    hover:text-[#40908b]
                    "
              >
                add course
              </button>

              <button
                className="
                    mx-5
                    font-bold
                    tracking-wider
                    mt-5
                    uppercase
                    bg-[#40908b]
                    text-white
                    py-1
                    px-5
                    rounded-xl
                    hover:bg-white
                    hover:text-[#40908b]
                    "
                onClick={onCancelClick}
              >
                cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default CreatePopup;
