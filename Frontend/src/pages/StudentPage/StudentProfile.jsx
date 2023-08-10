import React from 'react'
import Navbar from '../../components/Navigation/Navbar'
import EditIcon from '@mui/icons-material/Edit';
import Sidebar from '../../components/Navigation/Sidebar';

function StudentProfile() {
  return (
    <div>
        <Navbar/>
        <div className="flex justify-center">
        <div className="w-1/12">
        <Sidebar/>
        </div>

        <div className="flex flex-col w-11/12">
         

          <div className="flex">
            <div className="w-1/4">
              <div className="flex flex-col w-56 mt-10 ml-16">
                <img
                  className="w-full h-56 rounded-2xl"
                  src="../grp8/img/teacher.jpg"
                  alt=""
                />
                <label className="mt-5 text-center" htmlFor="">
                  Vishnaka Dasanayaka
                </label>
                <button className="text-xs text-blue-800 underline cursor-pointer">
                  Edit profile photo
                </button>
              </div>
            </div>
            <div className="w-3/4 mr-5">
              <div className="font-mono rounded-2xl pt-5 pl-5 w-full h-auto mt-10 bg-[#FFF3F3]">
                <h2 className="text-xl font-bold uppercase">Profile Details</h2>

                <br />

                <div className="flex">
                  <div className="flex flex-col w-1/2">
                    <div className="flex items-center mb-5">
                      <div className="w-36">
                        <h3>First Name :</h3>
                      </div>
                      <div className="w-56 px-3 py-1 ml-5 bg-white">
                        <p>Vishnaka Dasanayaka</p>
                      </div>
                      <section className="pr-10 scale-75 cursor-pointer hover:text-red-800">
                        <EditIcon />
                      </section>
                    </div>

                    <div className="flex items-center mb-5">
                      <div className="w-36">
                        <h3>Last Name :</h3>
                      </div>
                      <div className="w-56 px-3 py-1 ml-5 bg-white">
                        <p>Vishnaka Dasanayaka</p>
                      </div>
                      <section className="pr-10 scale-75 cursor-pointer hover:text-red-800">
                        <EditIcon />
                      </section>
                    </div>

                    <div className="flex items-center mb-5">
                      <div className="w-36">
                        <h3>Category :</h3>
                      </div>
                      <div className="w-56 px-3 py-1 ml-5 bg-white">
                        <p>Vishnaka Dasanayaka</p>
                      </div>
                      <section className="pr-10 scale-75 cursor-pointer hover:text-red-800">
                        <EditIcon />
                      </section>
                    </div>

                    <div className="flex items-center mb-5">
                      <div className="w-36">
                        <h3>NIC :</h3>
                      </div>
                      <div className="w-56 px-3 py-1 ml-5 bg-white">
                        <p>Vishnaka Dasanayaka</p>
                      </div>
                      <section className="pr-10 scale-75 cursor-pointer hover:text-red-800">
                        <EditIcon />
                      </section>
                    </div>

                    <div className="flex items-center mb-5">
                      <div className="w-36">
                        <h3>Parent TP :</h3>
                      </div>
                      <div className="w-56 px-3 py-1 ml-5 bg-white">
                        <p>Vishnaka Dasanayaka</p>
                      </div>
                      <section className="pr-10 scale-75 cursor-pointer hover:text-red-800">
                        <EditIcon />
                      </section>
                    </div>

                    <div className="flex items-center mb-5">
                      <div className="w-36">
                        <h3>DoB :</h3>
                      </div>
                      <div className="w-56 px-3 py-1 ml-5 bg-white">
                        <p>Vishnaka Dasanayaka</p>
                      </div>
                      <section className="pr-10 scale-75 cursor-pointer hover:text-red-800">
                        <EditIcon />
                      </section>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center mb-5">
                      <div className="w-36">
                        <h3>Contact Info :</h3>
                      </div>
                      <div className="w-56 px-3 py-1 ml-5 bg-white">
                        <p>Vishnaka Dasanayaka</p>
                      </div>
                      <section className="pr-10 scale-75 cursor-pointer hover:text-red-800">
                        <EditIcon />
                      </section>
                    </div>

                    <div className="flex items-center mb-5">
                      <div className="w-36">
                        <h3>Subject :</h3>
                      </div>
                      <div className="w-56 px-3 py-1 ml-5 bg-white">
                        <p>Vishnaka Dasanayaka</p>
                      </div>
                      <section className="pr-10 scale-75 cursor-pointer hover:text-red-800">
                        <EditIcon />
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentProfile
