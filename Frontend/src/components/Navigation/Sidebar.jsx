import React from 'react';
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PaidIcon from "@mui/icons-material/Paid";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { Link } from "react-router-dom";
import WidgetsIcon from '@mui/icons-material/Widgets';

function Sidebar() {

  let role = "student";

  return (
    <div>
      <div className='flex items-center justify-center w-full h-16 md:hidden'>
        <WidgetsIcon className='scale-150'/>
      </div>

      <div className="hidden md:block bg-[#d9d9d9] opacity-50 h-[100vh]">
          <ol className="text-center scale-[2] md:scale-150 lg:scale-[2] pt-20">
            <li className="py-2">
              <Link to={`/${role}Dashboard`}>
                <DashboardIcon />
              </Link>
            </li>

            <li className="py-2 ">
              <Link to={"/courseCRUD"}>
                <LibraryBooksIcon />
              </Link>
            </li>

            <li className="py-2 active">
              <Link to={`/${role}Profile`}>
                <AccountBoxIcon />
              </Link>
            </li>

            <li className="py-2 ">
              <Link to={`/${role}Pay`}>
                <PaidIcon />
              </Link>
            </li>

            <li className="py-2 ">
              <Link to={`/${role}Help`}>
                <HelpCenterIcon />
              </Link>
            </li>
          </ol>
        </div>
    </div>
  )
}

export default Sidebar
