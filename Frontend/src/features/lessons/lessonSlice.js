import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import lessonService from "./lessonService";

const initialState = {
    lessons: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// create a lesson
export const createLesson = createAsyncThunk('lessons/create', async (lessonData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await lessonService.createLesson(lessonData, token)
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

export const lessonSlice = createSlice({
    name: 'lesson',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createLesson.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createLesson.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.lessons.push(action.payload)
            })
            .addCase(createLesson.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = lessonSlice.actions

export default lessonSlice.reducer