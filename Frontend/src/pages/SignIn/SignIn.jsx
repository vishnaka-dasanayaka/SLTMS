import { useState, useEffect } from "react";
import Navbar from "../../components/Navigation/Navbar";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../../features/auth/authSlice";
import Spinner from "../../components/Spinner/Spinner";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

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
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onTeacherClick = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password
    }

    dispatch(login(userData))    
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Navbar />

      <form action="" onSubmit={onTeacherClick}>
        <div>
          <div className="flex flex-col items-center justify-center mt-10">
            <div className="px-5 py-3 rounded-lg bg-primary w-fit h-fit">
              <h1 className="text-xl font-extrabold text-white uppercase">
                log in
              </h1>
            </div>

            <div className="p-5 mt-5 flex flex-col items-start justify-center border-black border-[2px] rounded-xl">
              <div className="flex items-center justify-between mt-5">
                <label className="text-lg font-bold uppercase" htmlFor="">
                  username :{" "}
                </label>
                <input
                  type="text"
                  className="px-5 ml-3 bg-gray-200 rounded-md"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={onChange}
                />
              </div>

              <div className="flex items-start justify-between mt-5">
                <label className="text-lg font-bold uppercase" htmlFor="">
                  password :
                </label>
                <input
                  type="text"
                  className="px-5 ml-3 bg-gray-200 rounded-md"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={onChange}
                />
              </div>

              <div className="flex items-center justify-center mt-10">
                <button className="px-3 py-1 font-bold text-white uppercase rounded-md border-btn_color border-[1px] hover:bg-white hover:text-btn_color bg-btn_color">
                  Log In as Teacher
                </button>
                <button className="ml-5 px-3 py-1 font-bold text-white uppercase rounded-md border-btn_color border-[1px] hover:bg-white hover:text-btn_color bg-btn_color">
                  Log In as student
                </button>
              </div>

              <div className="mt-5 text-sm">
                <h4>
                  Do not have an account?
                  <Link to={"/signup"}>
                    <span className="ml-1 text-blue-700 underline cursor-pointer">
                      Sign Up
                    </span>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
