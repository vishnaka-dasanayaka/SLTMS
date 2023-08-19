import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";



// ************ for teachers register, login and logout ****************

//Get user from local storage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  teacher:""
};

// ************ for teachers register, login and logout ****************

//Register the user
export const registerTeacher = createAsyncThunk(
  "auth/registerTeacher",
  async (user, thunkAPI) => {
    try {
      return await authService.registerTeacher(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Login the user
export const loginTeacher = createAsyncThunk(
  "auth/loginTeacher",
  async (user, thunkAPI) => {
    try {
      return await authService.loginTeacher(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);




// ************ for student register, login and logout ****************

//Register the user
export const registerStudent = createAsyncThunk(
  "auth/registerStudent",
  async (user, thunkAPI) => {
    try {
      return await authService.registerStudent(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Login the user
export const loginStudent = createAsyncThunk(
  "auth/loginStudent",
  async (user, thunkAPI) => {
    try {
      return await authService.loginStudent(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);




export const logout = createAsyncThunk('auth/logout',
  async () => {
    await authService.logout()
  })

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerTeacher.pending, (state) => {
        state.isLoading = true
      })
      .addCase(registerTeacher.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = (action.payload)
      })
      .addCase(registerTeacher.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(loginTeacher.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginTeacher.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(loginTeacher.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(registerStudent.pending, (state) => {
        state.isLoading = true
      })
      .addCase(registerStudent.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(registerStudent.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(loginStudent.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginStudent.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(loginStudent.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
      })
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
