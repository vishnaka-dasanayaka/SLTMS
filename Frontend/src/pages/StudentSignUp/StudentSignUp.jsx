import { useState, useEffect } from "react";
import Navbar from "../../components/Navigation/Navbar";
import { Link } from "react-router-dom";

function StudentSignUp() {
  const [formData, setFormDate] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const { firstName, lastName, email, password, rePassword } = formData;

  const onChange = (e) => {
    setFormDate((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  return (
    <div className=" h-[100vh] bg-gradient-to-l from-[#79e2db]">
      <Navbar />
      <form action="">
        <div className="flex flex-col w-screen h-fit m-auto mt-5 md:rounded-xl md:min-w-[700px] md:w-6/12 bg-primary py-[5vh]">
          <div className="flex flex-col sm:flex-row mx-[25vw] text-white mb-[3vh] sm:mx-[8vw] items-center">
            <div className="mr-[5vw] min-w-[200px] my-[2vh]">
              <label htmlFor="">First Name</label>
            </div>
            <div>
              <input type="text" className="text-black pl-2 w-[18vw] h-[4vh] min-w-[250px]" id="firstName" name="firstName" value={firstName} placeholder="Enter your first name" onChange={onChange}/>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row mx-[25vw] text-white mb-[3vh] sm:mx-[8vw] items-center">
            <div className="mr-[5vw] min-w-[200px] my-[2vh]">
              <label htmlFor="">Last Name</label>
            </div>
            <div>
              <input type="text" className="text-black pl-2 w-[18vw] h-[4vh] min-w-[250px]" id="lastName" name="lastName" value={lastName} placeholder="Enter your last name" onChange={onChange}/>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row mx-[25vw] text-white mb-[3vh] sm:mx-[8vw] items-center">
            <div className="mr-[5vw] min-w-[200px] my-[2vh]">
              <label htmlFor="">E-mail</label>
            </div>
            <div>
              <input type="text" className="text-black pl-2 w-[18vw] h-[4vh] min-w-[250px]" id="email" name="email" value={email} placeholder="Enter your email" onChange={onChange}/>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row mx-[25vw] text-white mb-[3vh] sm:mx-[8vw] items-center">
            <div className="mr-[5vw] min-w-[200px] my-[2vh]">
              <label htmlFor="">Enter password</label>
            </div>
            <div>
              <input type="text" className="text-black pl-2 w-[18vw] h-[4vh] min-w-[250px]" id="password" name="password" value={password} placeholder="Enter your password" onChange={onChange}/>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row mx-[25vw] text-white mb-[3vh] sm:mx-[8vw] items-center">
            <div className="mr-[5vw] min-w-[200px] my-[2vh]">
              <label htmlFor="">Re-Enter password</label>
            </div>
            <div>
              <input type="text" className="text-black pl-2 w-[18vw] h-[4vh] min-w-[250px]" id="rePassword" name="rePassword" value={rePassword} placeholder="Confirm password" onChange={onChange}/>
            </div>
          </div>

          <div className="text-center">
            <button className="px-5 py-2 text-white bg-orange-400 rounded-xl hover:text-orange-400 hover:bg-white">
              <Link to={"/studentDashboard"}>Sign Up</Link>
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
