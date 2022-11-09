import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface UserState {
  login: string;
  password: string;
  accessToken: string;
}

const initialState: UserState = {
  login: 'test@gmail.com',
  password: 'test_Pa$w0rd',
  accessToken: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getToken: (state) => {
      // todo
    }
  }
})

export const selectLogin = (state: RootState) => state.user.login;
export const selectPassword = (state: RootState) => state.user.password;

export default userSlice.reducer;