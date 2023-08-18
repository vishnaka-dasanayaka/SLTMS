import axios from "axios";

const API_URL = '/lessons/'

//create a lesson
const createLesson = async (lessonData,token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL,lessonData, config)

    return response.data
}

const lessonService = {
    createLesson
}

export default lessonService