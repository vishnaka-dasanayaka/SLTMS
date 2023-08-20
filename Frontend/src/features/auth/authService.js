import axios from 'axios'

const API_URL_TEACHER = '/teachers/'
const API_URL_STUDENT = '/students/'

// **************** for teachers 
//register a user
const registerTeacher = async (userData) => {
    const response =  await axios.post(API_URL_TEACHER,userData)

    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }

    return response.data
}

//login a user
const loginTeacher = async (userData) => {
    const response =  await axios.post(`${API_URL_TEACHER}login`,userData)

    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }

    return response.data
}




// **************** for students 
//register a user
const registerStudent = async (userData) => {
    const response =  await axios.post(API_URL_STUDENT,userData)

    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }

    return response.data
}

//login a user
const loginStudent = async (userData) => {
    const response =  await axios.post(`${API_URL_STUDENT}login`,userData)

    if(response.data){
        response.data.role = true
        console.log(response.data);
        localStorage.setItem('user',JSON.stringify(response.data))
    }

    return response.data
}



//logout a user
const logout = () => {
    localStorage.removeItem('user')
}

const authService = { 
    registerTeacher,loginTeacher,logout,registerStudent,loginStudent
}

export default authService