import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function AddQuiz(props) {
  const lessonId = props.lessonId;
  //console.log(lessonId);
  const [formData, setFormData] = useState({
    question: "",
    correctAnswer: "",
    wrongAnswer_one: "",
    wrongAnswer_two: "",
    wrongAnswer_three: "",
  });
  const {
    question,
    correctAnswer,
    wrongAnswer_one,
    wrongAnswer_two,
    wrongAnswer_three,
  } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const [questionsArray, setQuestionsArray] = useState([]);

  let [count, setCount] = useState(1);
  const onCancelClick = () => {
    props.setTrigger(false);
  };

  const onAddClick = () => {
    const newQuestion = {
      question,
      correctAnswer,
      wrongAnswer_one,
      wrongAnswer_two,
      wrongAnswer_three,
    };
    setQuestionsArray((prevArray) => [...prevArray, newQuestion]);
    setFormData({
      question: "",
      correctAnswer: "",
      wrongAnswer_one: "",
      wrongAnswer_two: "",
      wrongAnswer_three: "",
    });
    setCount(count + 1);
  };

  const onFinishClick = async () => {
    try {
      console.log(questionsArray);

      const quiz = await axios.post(
        `/lessons/setquiz/${lessonId}`,
        questionsArray
      );
      props.setTrigger(false);
      toast("Quiz added successfully!!!");
    } catch (error) {
      console.log(error);
    }
  };

  return props.trigger ? (
    <div className="">
      <div className="z-1  fixed top-0 left-0 w-full h-[100vh] bg-black/20 flex justify-center items-center">
        <div className="fixed flex justify-center w-full bottom-5 top-5 ">
          <div className="w-5/6 h-auto overflow-y-scroll custom-scrollbar ">
            <div className="p-5 px-10 bg-[#0e2d2b] rounded-2xl">
              <h1 className="mt-5 text-2xl font-extrabold tracking-widest text-center text-white uppercase">
                add a quiz
              </h1>

              <div className="flex items-center justify-center px-2 py-1 mt-2 text-xs font-semibold text-green-600 uppercase bg-white rounded-lg ">
                make sure to enter the correct answer in first cell
              </div>
              <div>
                <div className="flex flex-col items-center justify-center w-full my-1">
                  <div className="flex flex-col items-center justify-center w-full mt-5">
                    <label className="text-white uppercase" htmlFor="">
                      Question {count}
                    </label>
                    <div className="w-full mx-2 ">
                      <input
                        className="w-full px-2 py-1 rounded-lg"
                        type="text"
                        name="question"
                        value={question}
                        autoComplete="off"
                        placeholder={`enter your question ${count}`}
                        onChange={onChange}
                      />
                    </div>
                    <div className="flex items-center justify-between w-full mt-2">
                      <div className="mr-2">
                        <input
                          className="border-[3px] border-green-400 px-2 py-1 rounded-md "
                          type="text"
                          name="correctAnswer"
                          value={correctAnswer}
                          autoComplete="off"
                          placeholder={`correct answer`}
                          onChange={onChange}
                        />
                      </div>
                      <div className="mx-2">
                        <input
                          className="border-[3px] border-red-400 px-2 py-1 rounded-md "
                          type="text"
                          name="wrongAnswer_one"
                          value={wrongAnswer_one}
                          autoComplete="off"
                          placeholder={`wrong answer one`}
                          onChange={onChange}
                        />
                      </div>
                      <div className="mx-2">
                        <input
                          className="border-[3px] border-red-400 px-2 py-1 rounded-md "
                          type="text"
                          name="wrongAnswer_two"
                          value={wrongAnswer_two}
                          autoComplete="off"
                          placeholder={`wrong answer two`}
                          onChange={onChange}
                        />
                      </div>
                      <div className="ml-2">
                        <input
                          className="border-[3px] border-red-400 px-2 py-1 rounded-md "
                          type="text"
                          name="wrongAnswer_three"
                          value={wrongAnswer_three}
                          autoComplete="off"
                          placeholder={`wrong answer three`}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
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
                    onClick={onFinishClick}
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
                    finish
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

export default AddQuiz;
