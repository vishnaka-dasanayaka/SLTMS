import Navbar from "../../components/Navigation/Navbar";
import { useEffect, useState } from "react";

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

  const onChange = (e) => {
    setFormData((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
    }))
};

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="h-fit lg:h-screen bg-gradient-to-l from-[#79e2db]">
      <Navbar />
      {/* <div className='mt-5 m-auto h-full rounded-xl w-8/12 bg-[#265451]'>

        <form className='m-auto' action="" method="post">
            <br />
            <br />
            <table className='m-auto text-lg text-white'>
                <tr className=''>
                    <td className='w-40'><label htmlFor="">First Name</label></td>
                    <td className='w-80'><input className='text-black' name='firstName' value={input.firstName} onChange={handleChange} type="text" /></td>
                    <td><label htmlFor="">Last Name</label></td>
                    <td><input className='text-black' name='lastName' value={input.lastName} onChange={handleChange} type="text" /></td>
                </tr>
                <br />
                <br />

                <tr>
                    <td><label htmlFor="">E-mail</label></td>
                    <td><input className='text-black' name='email' value={input.email} onChange={handleChange} type="text" /></td>
                    <td><label htmlFor="">Teaching Area</label></td>
                    <td><input className='text-black' name='teachingArea' value={input.teachingArea} onChange={handleChange} type="text" /></td>
                </tr>
            </table>

            <br /><br />

            <div className='ml-[55px] text-white text-lg'>
                <label htmlFor="">About :</label>
                <br /><br />
                <input className='w-[850px] h-24 text-black' name='about' value={input.about} onChange={handleChange} type="text" />
            </div>
            <br />
            <table className='m-auto'>
                <tr className='text-lg text-white'>
                    <td className='w-[195px]'><label htmlFor="">Enter a password</label></td>
                    <td className='w-52'><input className='text-black' name='password' value={input.password} onChange={handleChange} type="text"/></td>
                    <td><label htmlFor="">Re-Enter password</label></td>
                    <td><input className='text-black' type="text" name="" id="" /></td>
                </tr>
            </table>
        </form>

        

    

        <br />
        <div className='text-center'>
            <Link to={"/teacherDashboard"}><button onClick={handleClick}  className='px-5 py-2 text-white bg-orange-400 rounded-xl hover:text-orange-400 hover:bg-white'>
            
                Sign Up
            
            </button></Link>
        </div>
        <br />
        <div className='text-center text-white'>
            <h3>Already Have an Account ? <span className='text-orange-500 underline'><Link to={"/signin"}>Sign In</Link></span></h3>
        </div>
    
      </div> */}

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
                  type="text"
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
                <input
                  type="text"
                  className="min-w-[15vw] h-7 pl-3"
                  id="teachingArea"
                  name="teachingArea"
                  value={teachingArea}
                  placeholder="eg: Advanced Level"
                  onChange={onChange}
                />
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
                  type="text"
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
                  type="text"
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
                  Sign In
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
