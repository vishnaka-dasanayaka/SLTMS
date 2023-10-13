import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

function AttemptQuiz() {
  const [reqLesson, setReqLesson] = useState();
  const params = useParams();
  const lessonId = params.id;

  const getLesson = async () => {
    try {
      const lesson = await axios.get(`/lessons/getsinglelesson/${lessonId}`);
      setReqLesson(lesson.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLesson();
  });

  if (!reqLesson) return <Spinner />;

  return (
    <div>
      <div className="w-full my-8">
        <h1 className="text-2xl font-extrabold text-center">
          ANSWER ALL QUESTIONS
        </h1>
      </div>
      {reqLesson.quiz.length > 0 ? (
        <>
          <div>
            {Array.from({ length: reqLesson.quiz.length }, (_, index) => (
              <>
                <div className="flex flex-col">
                  <div className="px-2 py-1 mx-1 mt-4 mb-5 bg-gray-200 rounded-lg ">
                    <h1>
                      {index + 1}. {reqLesson.quiz[index].question}
                    </h1>
                  </div>
                  <div className="flex justify-between mx-10">
                    <div className="px-2 py-1 mx-1 bg-green-200 rounded-lg ">
                      {" "}
                      <h1>{reqLesson.quiz[index].correctAnswer}</h1>
                    </div>
                    <div className="px-2 py-1 mx-1 bg-red-200 rounded-lg ">
                      {" "}
                      <h1>{reqLesson.quiz[index].wrongAnswer_one}</h1>
                    </div>
                    <div className="px-2 py-1 mx-1 bg-red-200 rounded-lg ">
                      {" "}
                      <h1>{reqLesson.quiz[index].wrongAnswer_two}</h1>
                    </div>
                    <div className="px-2 py-1 mx-1 bg-red-200 rounded-lg ">
                      {" "}
                      <h1>{reqLesson.quiz[index].wrongAnswer_three}</h1>
                    </div>
                  </div>
                </div>
                <br />
              </>
            ))}
          </div>
        </>
      ) : (
        <>
          <h1 className="px-3 py-2 m-5 text-2xl font-extrabold tracking-widest text-center text-white uppercase bg-yellow-300">
            No quiz added yet
          </h1>
        </>
      )}

      <div className="flex items-center justify-center w-full">
        <button className="bg-btn_color border-[1px] border-btn_color px-2 py-1 rounded-lg hover:bg-white hover:text-btn_color">
          Submit
        </button>
      </div>
    </div>
  );
}

export default AttemptQuiz;
