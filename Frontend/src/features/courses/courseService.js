import axios from 'axios'

const API_URL = '/courses/'

//create new course
const createCourse = async (courseData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, courseData, config)

    return response.data
}

//Get courses
const getCourses = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)
    return response.data
}

//delete a courses
const deleteCourse = async (goalId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(`${API_URL}${goalId}`, config)
    return response.data
}

//get all courses for the student dashboard
const getAllCourses = async () => {
    const response = await axios.get(`${API_URL}allCourses`)
    return response.data
}

const courseService = {
    createCourse, getCourses, deleteCourse,getAllCourses
}

export default courseService