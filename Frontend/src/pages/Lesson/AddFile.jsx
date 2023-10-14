import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";

function AddFile(props) {
  const params = useParams();
  const lessonId = params.id;
  const [file, setFile] = useState();

  const onCancelClick = () => {
    props.setTrigger(false);
  };
  const handleChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const onAddClick = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("file", file);

    try {
      axios.put(`/lessons/addfile/${lessonId}`, formdata);

      toast("File added succesfully");
      props.setTrigger(false);
    } catch (error) {}
  };

  return props.trigger ? (
    <div className="">
      <div className="z-1  fixed top-0 left-0 w-full h-[100vh] bg-black/20 flex justify-center items-center">
        <div className="fixed flex justify-center w-full bottom-5 top-5 ">
          <div className="w-5/6 h-auto overflow-y-scroll custom-scrollbar ">
            <div className="p-5 px-10 bg-[#0e2d2b] rounded-2xl">
              <h1 className="mt-5 text-2xl font-extrabold tracking-widest text-center text-white uppercase">
                add a file
              </h1>

              <div className="flex items-center justify-center my-10">
                <div className="mr-10">
                  <label className="text-xl text-white uppercase" htmlFor="">
                    select a file :
                  </label>
                </div>

                <div>
                  <input
                    onChange={handleChange}
                    className="text-white"
                    type="file"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-center">
                  <button
                    onClick={onAddClick}
                    className="
                    mx-5
                    font-bold
                    tracking-wider
                    mt-5
                    uppercase
                    bg-[#40908b]
                    text-white
                    py-1
                    px-5
                    rounded-xl
                    hover:bg-white
                    hover:text-[#40908b]
                    "
                  >
                    add
                  </button>

                  <button
                    className="
                    mx-5
                    font-bold
                    tracking-wider
                    mt-5
                    uppercase
                    bg-[#40908b]
                    text-white
                    py-1
                    px-5
                    rounded-xl
                    hover.bg-white
                    hover.text-[#40908b]
                    "
                    onClick={onCancelClick}
                  >
                    cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default AddFile;
