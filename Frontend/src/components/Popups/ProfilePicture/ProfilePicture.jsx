import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function ProfilePicture(props) {
  const [file, setFile] = useState();
  const { user } = useSelector((state) => state.auth);
  const id = user._id;
  const onCancelClick = () => {
    props.setPictureTrigger(false);
  };

  const onClick = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("file", file);

    try {
      axios.put(`/teachers/upload/${id}`, formdata);
      toast("Profile picture updated successfully !!");
      props.setPictureTrigger(false);
    } catch (error) {}
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    displayImage(file);
  };

  function displayImage(selectedFile) {
    if (selectedFile) {
      const imagePreview = document.getElementById("imagePreview");
      const reader = new FileReader();

      reader.onload = function (e) {
        imagePreview.src = e.target.result;
      };

      reader.readAsDataURL(selectedFile);
    }
  }
  return props.pictureTrigger ? (
    <div className="">
      <div className="z-1 fixed top-0 left-0 w-full h-[100vh] bg-black/20 flex justify-center items-center">
        <div className="p-5 top-0 px-10 left-0 w-[400px] bg-[#0e2d2b] h-auto rounded-2xl">
          <h1 className="mt-5 text-2xl font-extrabold tracking-widest text-center text-white uppercase">
            add a photo
          </h1>

          <form action="" onSubmit={onClick}>
            <div>
              <div className="flex flex-col items-center justify-center w-full my-10">
                <div>
                  <input
                    onChange={handleChange}
                    className="p-2 bg-gray-400 rounded-lg"
                    type="file"
                  />
                </div>

                <div
                  id="imgDiv"
                  className="flex m-5 w-full  rounded-lg border-[2px] border-white items-center justify-center"
                >
                  <img
                    className="h-[50vh] p-5 w-fit text-white"
                    src={`/TeacherPhoto/${props.pic}`}
                    id="imagePreview"
                    alt="No photo is selected"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
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
                    hover:bg-white
                    hover:text-[#40908b]
                    "
                  onClick={onCancelClick}
                >
                  cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default ProfilePicture;
