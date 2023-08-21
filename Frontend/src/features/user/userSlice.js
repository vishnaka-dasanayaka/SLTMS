import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import userService from './userService'

const initialState = {
    teachers:'',
    user:'',
    isError:false,
    isSuccess:false,
    isPending:false,
    message:''
}

//get a user
export const getUser_teacher = createAsyncThunk('user/getUser_teacher', async(_,thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await userService.getTeacher(token)
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

export const getUser_student = createAsyncThunk('user/getUser_student', async(_,thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await userService.getStudent(token)
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


export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        reset:(state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser_teacher.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getUser_teacher.fulfilled, (state,action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(getUser_teacher.rejected, (state,action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getUser_student.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getUser_student.fulfilled, (state,action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(getUser_student.rejected, (state,action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
        }
})

export const {reset} = userSlice.actions

export default userSlice.reducer