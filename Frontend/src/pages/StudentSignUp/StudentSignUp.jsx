import { useState, useEffect } from "react";
import Navbar from "../../components/Navigation/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerStudent, reset } from "../../features/auth/authSlice";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

function StudentSignUp() {
  const [formData, setFormDate] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const { firstName, lastName, email, password, rePassword } = formData;

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
      navigate("/studentDashboard");
      toast.success('Successfull registered as a student')

    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormDate((prevState) => ({
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
        password,
      };

      dispatch(registerStudent(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className=" h-[100vh] bg-gradient-to-l from-[#79e2db]">
      <Navbar />
      <form action="" onSubmit={onSubmit}>
        <div className="flex flex-col w-screen h-fit m-auto mt-5 md:rounded-xl md:min-w-[700px] md:w-6/12 bg-primary py-[5vh]">
          <div className="flex flex-col sm:flex-row mx-[25vw] text-white mb-[3vh] sm:mx-[8vw] items-center">
            <div className="mr-[5vw] min-w-[200px] my-[2vh]">
              <label htmlFor="">First Name</label>
            </div>
            <div>
              <input
                type="text"
                className="text-black pl-2 w-[18vw] h-[4vh] min-w-[250px]"
                id="firstName"
                name="firstName"
                value={firstName}
                placeholder="Enter your first name"
                onChange={onChange}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row mx-[25vw] text-white mb-[3vh] sm:mx-[8vw] items-center">
            <div className="mr-[5vw] min-w-[200px] my-[2vh]">
              <label htmlFor="">Last Name</label>
            </div>
            <div>
              <input
                type="text"
                className="text-black pl-2 w-[18vw] h-[4vh] min-w-[250px]"
                id="lastName"
                name="lastName"
                value={lastName}
                placeholder="Enter your last name"
                onChange={onChange}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row mx-[25vw] text-white mb-[3vh] sm:mx-[8vw] items-center">
            <div className="mr-[5vw] min-w-[200px] my-[2vh]">
              <label htmlFor="">E-mail</label>
            </div>
            <div>
              <input
                type="email"
                className="text-black pl-2 w-[18vw] h-[4vh] min-w-[250px]"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={onChange}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row mx-[25vw] text-white mb-[3vh] sm:mx-[8vw] items-center">
            <div className="mr-[5vw] min-w-[200px] my-[2vh]">
              <label htmlFor="">Enter password</label>
            </div>
            <div>
              <input
                type="password"
                className="text-black pl-2 w-[18vw] h-[4vh] min-w-[250px]"
                id="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={onChange}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row mx-[25vw] text-white mb-[3vh] sm:mx-[8vw] items-center">
            <div className="mr-[5vw] min-w-[200px] my-[2vh]">
              <label htmlFor="">Re-Enter password</label>
            </div>
            <div>
              <input
                type="password"
                className="text-black pl-2 w-[18vw] h-[4vh] min-w-[250px]"
                id="rePassword"
                name="rePassword"
                value={rePassword}
                placeholder="Confirm password"
                onChange={onChange}
              />
            </div>
          </div>

          <div className="text-center">
            <button className="px-5 py-2 text-white bg-orange-400 rounded-xl hover:text-orange-400 hover:bg-white">
              Sign Up
            </button>
          </div>
          <br />
          <div className="text-center text-white">
            <h3>
              Already Have an Account ?{" "}
              <span className="text-orange-500 underline">
                <Link to={"/signin"}>Sign In</Link>
              </span>
            </h3>
          </div>
        </div>
      </form>
    </div>
  );
}

export default StudentSignUp;
