import React from "react";
import Navbar from "../../components/Navigation/Navbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PaidIcon from "@mui/icons-material/Paid";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { useState, useEffect } from "react";
import CreatePopup from "../../components/Popups/CreatePopup/CreatePopup";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom'
import {url} from '../../config';
import AddCardIcon from '@mui/icons-material/AddCard';

export default function CourseCRUD(props) {
  const [createButtonPop, setCreateButtonPopup] = useState(false);
  const [data,setData] = useState([]);

  useEffect(()=>{
    getAllCourses();
  },[]);  

  const getAllCourses = () => {
    fetch(`${url}courses`,{
    method:"GET"
  })
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data,"courses");  
    setData(data.data);
  });

}
  const deleteCourse = (id,name) => {
    if (window.confirm(`Sure ${name}`)) {
      fetch(`${url}deleteCourse`,{
    method:"POST",
    crossDomain:true,
    headers:{
      "Content-Type":"application/json",
      Accept:"application/json",
      "Access-Control-Allow-Drigin":"*"
    },
    body:JSON.stringify({
    courseID:id
  }),
  })
  .then((res)=>res.json())
  .then((data)=>{
    getAllCourses();
    alert(data.data);
  });
    }
    else{}
  }

  function editCourse(){}

  return (
    <div>
      <Navbar />

      <div className="flex justify-center">
        <div className="w-1/12 bg-[#d9d9d9] opacity-50 h-[100vh]">
          <ol className="text-center scale-[2] mt-32">
          <li className="py-2 ">
            <Link to={"/teacherDashboard"}>
            <DashboardIcon />
              </Link>  
              
            </li>

            
            <li className="py-2 active">
            <Link to={"/courseCRUD"}>
            <LibraryBooksIcon />
              </Link>  
              
            </li>

            <li className="py-2 ">
            <Link to={"/teacherProfile"}>
            <AccountBoxIcon />
              </Link>  
              
            </li>

            <li className="py-2 ">
            <Link to={"/teacherPay"}>
            <PaidIcon />
              </Link>  
              
            </li>

            <li className="py-2 ">
            <Link to={"/teacherHelp"}>
            <HelpCenterIcon />
              </Link>  
              
            </li>
          </ol>
        </div>

        <div className="flex flex-col w-11/12">
          <div>
            <div className="flex justify-between">
              <div>
                <h1 className="mt-10 ml-32 text-2xl font-extrabold tracking-widest uppercase">
                  my courses
                </h1>
              </div>

              <div className="mt-10 mr-36">
                <button
                  onClick={() => setCreateButtonPopup(true)}
                  className="px-5 py-1 mx-5 font-extrabold tracking-wider text-white uppercase bg-black border-2 border-black rounded-lg hover:bg-white hover:text-black"
                >
                  add
                </button>
              </div>
            </div>
            
            <div>
              <table className="mt-10 ml-10">
                <thead>
                  <tr className="text-center">
                    <td className="pl-5 pr-5 border-2 border-collapse border-black w-autoto">Course ID</td>
                    <td className="pl-5 pr-5 border-2 border-collapse border-black w-autoto">Category</td>
                    <td className="w-auto pl-5 pr-5 border-2 border-collapse border-black">Subject</td>
                    <td className="w-auto pl-5 pr-5 border-2 border-collapse border-black">Course Title</td>
                    <td className="w-auto pl-5 pr-5 border-2 border-collapse border-black">Fee</td>
                    <td className="pl-5 pr-5 border-2 border-collapse border-black w-[500px]">Description</td>
                  </tr>
                </thead>
                <tbody>
                  {data.map(i=>{
                    return(
                        <tr className="text-center">
                          <td className="pl-5 pr-5 border-2 border-collapse border-black ">{i.courseID}</td>
                          <td className="pl-5 pr-5 border-2 border-collapse border-black ">{i.category}</td>
                          <td className="pl-5 pr-5 border-2 border-collapse border-black ">{i.subject}</td>
                          <td className="pl-5 pr-5 border-2 border-collapse border-black ">{i.courseTitle}</td>
                          <td className="pl-5 pr-5 border-2 border-collapse border-black ">{i.fee}</td>
                          <td className="pl-5 pr-5 border-2 border-collapse border-black ">{i.desc}</td>
                          <Link to={'/uploadLesson'}><td className="px-3 text-blue-500 cursor-pointer hover:scale-110"><AddCardIcon onClick={editCourse}/></td></Link>
                          <td className="text-green-500 cursor-pointer hover:scale-110"><EditIcon onClick={editCourse}/></td>
                          <td className="text-red-500 cursor-pointer hover:scale-110"><DeleteIcon onClick={()=>deleteCourse(i._id,i.courseTitle)}/></td>
                        </tr>
                      )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <CreatePopup
        createTrigger={createButtonPop}
        setCreateTrigger={setCreateButtonPopup}
      ></CreatePopup>
    </div>
  );
}
