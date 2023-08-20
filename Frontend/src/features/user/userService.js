import axios from "axios";

const API_URL_TEACHER = '/teachers/'
const API_URL_STUDENT = '/students/'

const getUser = async(token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(`${API_URL_TEACHER}me`, config)
    return response.data
}

const userService = {
    getUser
}

export default userService