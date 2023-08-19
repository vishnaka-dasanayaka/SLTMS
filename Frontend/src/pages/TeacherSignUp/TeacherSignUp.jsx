import Navbar from "../../components/Navigation/Navbar";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerTeacher, reset } from "../../features/auth/authSlice";
import Spinner from "../../components/Spinner/Spinner";
import { Link } from "react-router-dom";

function TeacherSignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    teachingArea: "",
    about: "",
    password: "",
    rePassword: "",
  });

  const {
    firstName,
    lastName,
    email,
    teachingArea,
    about,
    password,
    rePassword,
  } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/teacherDashboard");
      toast.success("Successfull registered as a teacher");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        firstName,
        lastName,
        email,
        teachingArea,
        about,
        password,
      };

      dispatch(registerTeacher(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="h-fit lg:h-screen bg-gradient-to-l from-[#79e2db]">
      <Navbar />

      <form action="" onSubmit={onSubmit}>
        <div className="flex flex-col w-8/12 m-auto rounded-xl bg-[#265451] mt-[5vh] pb-[5vh] min-w-[400px]">
          <div className="flex mt-[5vh] justify-between mx-[5vw] lg:flex-row flex-col">
            <div className="flex mb-5 lg:mb-0">
              <div className="text-white min-w-[150px]">
                <label htmlFor="">First Name</label>
              </div>
              <div>
                <input
                  type="text"
                  className="min-w-[15vw] h-7 pl-3"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  placeholder="Enter your first name"
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="flex">
              <div className="text-white min-w-[150px]">
                <label htmlFor="">Last Name</label>
              </div>
              <div>
                <input
                  type="text"
                  className="min-w-[15vw] h-7 pl-3"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  placeholder="Enter your last name"
                  onChange={onChange}
                />
              </div>
            </div>
          </div>

          <div className="flex mt-[3vh] justify-between mx-[5vw] lg:flex-row flex-col">
            <div className="flex mb-5 lg:mb-0">
              <div className="text-white min-w-[150px]">
                <label htmlFor="">Email</label>
              </div>
              <div>
                <input
                  type="email"
                  className="min-w-[15vw] h-7 pl-3"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="flex">
              <div className="text-white min-w-[150px]">
                <label htmlFor="">Teaching Area</label>
              </div>
              <div className="min-w-[15vw]">
                {/* <input type="text" className='min-w-[15vw] h-7'/> */}

                <select
                  value={teachingArea}
                  name="teachingArea"
                  id="teachingArea"
                  onChange={onChange}
                  className="min-w-[15vw] h-7 pl-3"
                >
                  <option value="">Select the teaching area</option>
                  <option value="University Level">University Level</option>
                  <option value="Advanced Level">Advanced Level</option>
                  <option value="Ordinary Level">Ordinary Level</option>
                  <option value="Schorlarship Level">Schorlarship Level</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col mx-[5vw] mt-[5vh]">
            <div className="text-white mb-[2vh]">
              <label htmlFor="">About:</label>
            </div>
            <div>
              <input
                type="text"
                className="w-full h-32 pl-3"
                id="about"
                name="about"
                value={about}
                placeholder="Brief description about you (eg: qualifications)"
                onChange={onChange}
              />
            </div>
          </div>

          <div className="flex mt-[3vh] justify-between mx-[5vw] lg:flex-row flex-col">
            <div className="flex mb-5 lg:mb-0">
              <div className="text-white min-w-[150px]">
                <label htmlFor="">Enter password</label>
              </div>
              <div>
                <input
                  type="password"
                  className="min-w-[15vw] h-7 pl-3"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="flex">
              <div className="text-white min-w-[150px]">
                <label htmlFor="">Confirm password</label>
              </div>
              <div>
                <input
                  type="password"
                  className="min-w-[15vw] h-7 pl-3"
                  id="rePassword"
                  name="rePassword"
                  value={rePassword}
                  placeholder="Confirm your password"
                  onChange={onChange}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center w-full mt-[5vh]">
            <div className="mb-5">
              <input
                type="submit"
                value="Sign Up"
                className="px-5 py-2 text-white bg-orange-500 rounded-xl border-[1px] border-orange-500 hover:bg-white hover:text-orange-500 cursor-pointer tracking-wider text-xl"
              />
            </div>
            <div className="text-white">
              <p>
                Already Have an Account ?{" "}
                <span className="tracking-widest text-orange-500 underline">
                  <Link to={"/signin"}>Sign In</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TeacherSignUp;
