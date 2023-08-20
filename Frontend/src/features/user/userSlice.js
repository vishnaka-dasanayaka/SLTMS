import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import userService from './userService'

const initialState = {
    user:'',
    isError:false,
    isSuccess:false,
    isPending:false,
    message:''
}

//get a user
export const getUser = createAsyncThunk('user/getUser', async(_,thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await userService.getUser(token)
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
            .addCase(getUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getUser.fulfilled, (state,action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(getUser.rejected, (state,action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
        }
})

export const {reset} = userSlice.actions

export default userSlice.reducer