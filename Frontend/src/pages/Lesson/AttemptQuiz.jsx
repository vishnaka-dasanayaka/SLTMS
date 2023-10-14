import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

function removeDuplicatesKeepLast(answer) {
  const indexValueMap = {}; // Use an object to store the last encountered values by index

  for (let i = answer.length - 1; i >= 0; i--) {
    const { index, value } = answer[i];

    if (!indexValueMap.hasOwnProperty(index)) {
      indexValueMap[index] = value;
    } else {
      // If the index is already in the map, remove this duplicate
      answer.splice(i, 1);
    }
  }

  // If you want to sort the array by index afterward, you can use this:
  answer.sort((a, b) => a.index - b.index);
}

function shuffleAnswers(answers) {
  for (let i = answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [answers[i], answers[j]] = [answers[j], answers[i]];
  }
  return answers;
}

function AttemptQuiz() {
  const answer = [];
  const [mark, setMark] = useState(0);

  const onClick = (index, answerIndex, value) => {
    answer.push({ index, value });
  };

  const [reqLesson, setReqLesson] = useState(null); // Initialize as null
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
  }, []); // Pass an empty dependency array to run this effect once on component mount

  const newAnswer = [
    { index: 1, value: "A" },
    { index: 2, value: "B" },
    { index: 1, value: "C" },
    { index: 3, value: "D" },
  ];
  const onSubmitClick = async () => {
    removeDuplicatesKeepLast(answer);

    const mark = await axios.post(`/lessons/markquiz/${lessonId}`, answer);

    setMark(mark.data);
  };

  if (reqLesson === null) return <Spinner />;

  return (
    <div>
      <div className="w-full my-8">
        <h1 className="text-2xl font-extrabold text-center">
          ANSWER ALL QUESTIONS
        </h1>
      </div>
      {reqLesson.quiz.length > 0 ? (
        <div>
          {Array.from({ length: reqLesson.quiz.length }, (_, index) => {
            const shuffledAnswers = shuffleAnswers([
              reqLesson.quiz[index].correctAnswer,
              reqLesson.quiz[index].wrongAnswer_one,
              reqLesson.quiz[index].wrongAnswer_two,
              reqLesson.quiz[index].wrongAnswer_three,
            ]);

            return (
              <div className="flex flex-col" key={index}>
                <div className="px-2 py-1 mx-1 mt-4 mb-5 bg-gray-200 rounded-lg">
                  <h1>
                    {index + 1}. {reqLesson.quiz[index].question}
                  </h1>
                </div>
                <div className="grid grid-cols-4 mx-10 justify-left">
                  {shuffledAnswers.map((answer, answerIndex) => (
                    <div
                      onClick={() => {
                        onClick(index, answerIndex, answer); // Call the onClick handler with the appropriate arguments
                      }}
                      className={`hover:bg-blue-200 hover:cursor-pointer px-5 py-1 mx-1 rounded-lg  bg-green-200
                      }`}
                      key={answerIndex}
                    >
                      <h1>{answer}</h1>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h1 className="px-3 py-2 m-5 text-2xl font-extrabold tracking-widest text-center text-white uppercase bg-yellow-300">
          No quiz added yet
        </h1>
      )}

      <div className="flex items-center justify-center w-full mt-10">
        <button
          onClick={onSubmitClick}
          className="uppercase text-2xl bg-btn_color border-[1px] border-btn_color px-2 py-1 rounded-lg hover:bg-white hover:text-btn_color"
        >
          Submit
        </button>
      </div>
<div className="flex items-center justify-center mb-10">
        <h1 className="px-2 py-1 mt-10 text-xl font-extrabold uppercase bg-yellow-400 rounded-lg">
          Your Mark <span className="ml-5">:</span>
        </h1>
        <h2 className="px-2 py-1 mt-10 ml-10 text-xl font-extrabold uppercase bg-orange-400 rounded-lg">
          {mark}
        </h2>
      </div>
    </div>
  );
}
export default AttemptQuiz;