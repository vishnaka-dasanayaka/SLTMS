import axios from "axios";

const API_URL = '/lessons/'

//create a lesson
const createLesson = async (lessonData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, lessonData, config)

    return response.data
}

//get all lessons
const getLessons = async (courseID, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(`${API_URL}${courseID}`, config)
    return response.data
}

//delete a lesspn
const deleteLesson = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(`${API_URL}${id}`, config)
    return response.data
}

const lessonService = {
    createLesson, getLessons, deleteLesson
}

export default lessonService