import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import courseService from './courseService'

const initialState = {
    teachersCourses : [],
    allCourses: [],
    courses: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

//create course
export const createCourse = createAsyncThunk('courses/create', async (courseData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await courseService.createCourse(courseData, token)
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// Get all courses
export const getCourses = createAsyncThunk('courses/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await courseService.getCourses(token)
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

//delete a course

export const deleteCourse = createAsyncThunk('courses/delete', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await courseService.deleteCourse(id, token)
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// get all courses for the student dashboard
export const getAllCourses = createAsyncThunk('courses/getAllCourses', async(_,thunkAPI) => {
    try {
        return await courseService.getAllCourses()
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})


//get courses of single teacher
export const getTeachersCourse = createAsyncThunk('courses/getTeachersCourse', async (id,thunkAPI) => {
    try {
        return await courseService.getTeachersCourse(id)
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})




export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createCourse.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createCourse.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.courses.push(action.payload)
            })
            .addCase(createCourse.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getCourses.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getCourses.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.courses = action.payload
            })
            .addCase(getCourses.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteCourse.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteCourse.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.courses = state.courses.filter(
                    (course) => course._id !== action.payload._id
                )
            })
            .addCase(deleteCourse.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getAllCourses.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllCourses.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.allCourses = action.payload
            })
            .addCase(getAllCourses.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getTeachersCourse.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getTeachersCourse.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.teachersCourses = action.payload
            })
            .addCase(getTeachersCourse.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = courseSlice.actions

export default courseSlice.reducer;