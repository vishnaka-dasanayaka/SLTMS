import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

function LessonDetails() {
  const [reqLesson, setLesson] = useState();
  const params = useParams();
  const lessonId = params.id;
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
  }, []);

  if (!reqLesson) return <Spinner></Spinner>;

  return <div>{reqLesson.month}</div>;
}

export default LessonDetails;
