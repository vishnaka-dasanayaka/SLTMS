import React from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className="flex items-center justify-between bg-white shadow-lg shadow-gray-600 px-[5vw] max-h-[20vh]">
      <div>
        <Link to={"/"}>
          <img
            className="xl:h-[130px] max-h-[130px] min-h-[130px]"
            src="../img/logo.png"
            alt=""
          />
        </Link>
      </div>

      <div className="hidden text-2xl md:block">
        <Link to={"/"}>
          <h1>Edu.com</h1>
        </Link>
      </div>

      <div className="hidden md:block">
        <Link to={"/teachersignup"}>
          <h2>Teach on Edu.com</h2>
        </Link>
      </div>

      <div className="hidden md:block">
        <Link to={"/studentsignup"}>
          <h2>Learn on Edu.com</h2>
        </Link>
      </div>

      {user ? (
        <>
          <div className="hidden md:flex">
            <div>
              <button
                onClick={onLogout}
                className="hover:bg-white hover:text-[#058d83] mx-10 py-2 px-5 border-[2px] border-black text-white bg-[#058d83] rounded-3xl"
              >
                Log out
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="hidden md:flex">
            <div>
              <Link to={"/signin"}>
                <button className="hover:text-white hover:bg-[#058d83] mx-10 py-2 px-5 border-[2px] border-black text-[#058d83] bg-white rounded-3xl ">
                  Sign In
                </button>
              </Link>
            </div>

            <div>
              <Link to={"/signup"}>
                <button className="hover:bg-white hover:text-[#058d83] mx-10 py-2 px-5 border-[2px] border-black text-white bg-[#058d83] rounded-3xl">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </>
      )}

      <div className="md:hidden bg-[#058d83] flex flex-col text-white items-end">
        <div>
          <MenuIcon className="scale-[1] color-black"></MenuIcon>
        </div>

        <div className="p-[10px] border-black border-[1px] w-full text-center">
          <Link to={"/"}>
            <h1>Home page</h1>
          </Link>
        </div>

        <div className="p-[10px] border-black border-[1px] w-full text-center">
          <Link to={"/teachersignup"}>
            <h1>Sign up as a teacher</h1>
          </Link>
        </div>

        <div className="p-[10px] border-black border-[1px] w-full text-center">
          <Link to={"/studentsignup"}>
            <h1>Sign up as a student</h1>
          </Link>
        </div>

        <div className="p-[10px] border-black border-[1px] w-full text-center">
          <Link to={"/signin"}>
            <h1>Sign In</h1>
          </Link>
        </div>

        <div className="p-[10px] border-black border-[1px] w-full text-center">
          <Link to={"/signup"}>
            <h1>Sign Up</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
