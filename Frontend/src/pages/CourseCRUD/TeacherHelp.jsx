import React from 'react'
import Navbar from '../../components/Navigation/Navbar'
import Sidebar from '../../components/Navigation/Sidebar';


function TeacherHelp() {
  return (
    <div>
        <Navbar/>
        <div className="flex justify-center">
        <div className="w-1/12">
        <Sidebar/>
        </div>

        <div className="flex flex-col w-11/12">
          
        </div>
      </div>
    </div>
  )
}

export default TeacherHelp
