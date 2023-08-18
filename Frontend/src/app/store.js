import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import courseReducer from '../features/courses/courseSlice' 
import lessonReducer from '../features/lessons/lessonSlice'

export const store = configureStore({
    reducer:{
        auth: authReducer,
        courses:courseReducer,
        lessons:lessonReducer
    }
})

export default store