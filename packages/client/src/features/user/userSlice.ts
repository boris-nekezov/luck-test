import { createSlice } from '@reduxjs/toolkit';

import { registerUser, loginUser, getUserProfile } from './userActions';
import { UserState } from './userTypes';

const initialState: UserState = {
  loading: false,
  userInfo: null, // for user object
  accessToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring reg process. 
  isAuthenticated: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // cause it's not async we can put it right here
    logout: (state) => {
      localStorage.removeItem('accessToken');
      state.loading = false;
      state.userInfo = null;
      state.accessToken = null;
      state.error = null;
      state.isAuthenticated = false;
    }
  },
  extraReducers: (builder) => {

    builder
      // register user
      .addCase(registerUser.pending, (state) => {
        // both `state` and `action` are now correctly typed
        // based on the slice state and the `pending` action creator
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true; // registration successful
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      // login user
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.accessToken = payload
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload
      })

      // get user profile
      .addCase(getUserProfile.pending, (state) => {
        state.loading = true
      })
      .addCase(getUserProfile.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
        state.isAuthenticated = true;
      })
      .addCase(getUserProfile.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

  },
})

// export const selectLogin = (state: RootState) => state.user.login;
// export const selectPassword = (state: RootState) => state.user.password;

export const { logout } = userSlice.actions
export default userSlice.reducer;