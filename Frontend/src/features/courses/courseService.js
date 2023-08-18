import axios from 'axios'

const API_URL = '/courses/'

//create new course
const createCourse = async(courseData,token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, courseData, config)

    return response.data
}

//Get courses
const getCourses = async(token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)
    return response.data
}

const courseService = {
    createCourse,getCourses
}

export default courseService