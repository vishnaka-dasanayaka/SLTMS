import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import Navbar from "../../components/Navigation/Navbar";

import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PaidIcon from "@mui/icons-material/Paid";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import AddQuiz from "../../components/Popups/Quiz/AddQuiz";
import AddFile from "./AddFile";

function LessonDetails(props) {
  const [addQuizPopup, setAddQuizPopup] = useState(false);
  const [addFilePopup, setAddFilePopup] = useState(false);

  const [reqLesson, setLesson] = useState();
  const params = useParams();

  const lessonId = params.id;
  const role = params.role;

  const getLesson = async () => {
    try {
      const lesson = await axios.get(`/lessons/getsinglelesson/${lessonId}`);
      setLesson(lesson.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLesson();
  });

  if (!reqLesson) return <Spinner></Spinner>;

  return (
    <div>
      <div>
        <Navbar />
        <div className="flex justify-center">
          <div className="w-1/12 bg-[#d9d9d9] opacity-50 h-[100vh]">
            <ol className="text-center scale-[2] mt-32">
              <li className="py-2">
                <Link to={"/teacherDashboard"}>
                  <DashboardIcon />
                </Link>
              </li>

              <li className="py-2 ">
                <Link to={"/courseCRUD"}>
                  <LibraryBooksIcon />
                </Link>
              </li>

              <li className="py-2 active">
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

          <div className="flex flex-col w-11/12 m-10">
            <div className="flex items-center justify-center w-full">
              <div className="w-1/4 p-5 m-5 bg-gradient-to-b from-gray-100 via-30% to-gray-400 to-90% ... rounded-lg mx-3">
                <div className="flex flex-col items-center justify-center ">
                  <div className="w-56 h-56 my-3">
                    <img
                      className="w-full h-full"
                      src="../img/teacher.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="w-3/4 p-3 m-6 rounded-lg">
                <div className="my-3 ">
                  <div className="flex flex-col mx-0 ">
                    <div className="items-center justify-center my-2 ">
                      <div className="p-2">
                        <h2 className="font-mono text-lg uppercase ">
                          Keerthi Dharmasiri
                        </h2>
                      </div>

                      <div className="p-2">
                        <h2 className="text-2xl font-bold uppercase ">
                          {reqLesson.lessonTitle}
                        </h2>
                      </div>

                      <div className="p-2">
                        <h2 className="font-mono text-lg uppercase ">
                          {reqLesson.month}
                        </h2>
                      </div>

                      <div className="p-2">
                        <h2 className="font-mono text-lg uppercase ">
                          Physics
                        </h2>
                      </div>

                      <div className="p-2">
                        <h2 className="font-mono text-lg uppercase ">
                          {" "}
                          {reqLesson.Duration}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="m-5">
              <div>
                <h2 className="mb-5 font-mono text-lg uppercase">
                  Description
                </h2>
              </div>
              <div>
                <div className="flex items-center justify-center w-full">
                  <div className="w-full border-2 border-black border-solid">
                    <div className="flex flex-col mx-5 ">
                      <div className="my-3 h-fit">{reqLesson.description}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-10">
                <h1 className="mb-10 uppercase">Lesson Content</h1>

                <Link
                  to={`http://localhost:3001/Lessons/${reqLesson.file}`}
                  target="_blank"
                >
                  <div>
                    <h1 className="ml-10 hover:text-blue-500 hover:cursor-pointer">
                      {reqLesson.file}
                    </h1>
                  </div>
                </Link>
              </div>
              <div>
                {role == "teacher" ? (
                  <>
                    <div className="flex justify-center w-full">
                      <button
                        onClick={() => setAddQuizPopup(true)}
                        className="w-1/2 py-3 mx-2 text-xl font-extrabold tracking-widest text-white uppercase rounded-2xl hover:text-btn_color hover:bg-black bg-btn_color"
                      >
                        add quiz
                      </button>

                      <button
                        onClick={() => setAddFilePopup(true)}
                        className="w-1/2 py-3 mx-2 text-xl font-extrabold tracking-widest text-white uppercase rounded-2xl hover:text-btn_color hover:bg-black bg-btn_color"
                      >
                        add file
                      </button>
                    </div>

                    {reqLesson.quiz.length > 0 ? (
                      <>
                        <div>
                          {Array.from(
                            { length: reqLesson.quiz.length },
                            (_, index) => (
                              <>
                                <div className="flex flex-col">
                                  <div className="px-2 py-1 mx-1 mt-4 mb-5 bg-gray-200 rounded-lg ">
                                    <h1>
                                      {index + 1}.{" "}
                                      {reqLesson.quiz[index].question}
                                    </h1>
                                  </div>
                                  <div className="grid grid-cols-4 mx-10 justify-left">
                                    <div className="px-2 py-1 mx-1 bg-green-200 rounded-lg ">
                                      {" "}
                                      <h1>
                                        {reqLesson.quiz[index].correctAnswer}
                                      </h1>
                                    </div>
                                    <div className="px-2 py-1 mx-1 bg-red-200 rounded-lg ">
                                      {" "}
                                      <h1>
                                        {reqLesson.quiz[index].wrongAnswer_one}
                                      </h1>
                                    </div>
                                    <div className="px-2 py-1 mx-1 bg-red-200 rounded-lg ">
                                      {" "}
                                      <h1>
                                        {reqLesson.quiz[index].wrongAnswer_two}
                                      </h1>
                                    </div>
                                    <div className="px-2 py-1 mx-1 bg-red-200 rounded-lg ">
                                      {" "}
                                      <h1>
                                        {
                                          reqLesson.quiz[index]
                                            .wrongAnswer_three
                                        }
                                      </h1>
                                    </div>
                                  </div>
                                </div>
                                <br />
                              </>
                            )
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <h1 className="px-3 py-2 m-5 text-2xl font-extrabold tracking-widest text-center text-white uppercase bg-yellow-300">
                          No quiz added yet
                        </h1>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <div className="w-full">
                      <Link to={`/attemptquiz/${lessonId}`}>
                        <button className="w-full py-5 text-xl font-extrabold tracking-widest text-white uppercase rounded-2xl hover:text-btn_color hover:bg-black bg-btn_color">
                          attempt quiz
                        </button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddQuiz
        lessonId={lessonId}
        trigger={addQuizPopup}
        setTrigger={setAddQuizPopup}
      ></AddQuiz>

      <AddFile
        lessonId={lessonId}
        trigger={addFilePopup}
        setTrigger={setAddFilePopup}
      ></AddFile>
    </div>
  );
}

export default LessonDetails;
