import axios from 'axios'

const API_URL = '/teachers/'

//register a user
const register = async (userData) => {
    const response =  await axios.post(API_URL,userData)

    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }

    return response.data
}

//login a user
const login = async (userData) => {
    const response =  await axios.post(`${API_URL}login`,userData)

    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }

    return response.data
}

//logout a user
const logout = () => {
    localStorage.removeItem('user')
}

const authService = { 
    register,login,logout
}

export default authService