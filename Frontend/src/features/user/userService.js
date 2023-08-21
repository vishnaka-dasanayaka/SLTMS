import axios from "axios";

const API_URL_TEACHER = '/teachers/'
const API_URL_STUDENT = '/students/'

const getTeacher = async(token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(`${API_URL_TEACHER}me`, config)
    return response.data
}

const getStudent = async(token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(`${API_URL_STUDENT}me`, config)
    return response.data
}

// get all teachers with no jwt
const getAllTeachers = async () => {
    const response = await axios.get('/getAllTeachers')
    return response.data
}

const userService = {
    getTeacher,getStudent,getAllTeachers
}

export default userService