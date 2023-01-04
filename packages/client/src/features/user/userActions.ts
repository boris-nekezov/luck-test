import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { UserRegType } from './userTypes';
import { API_URL } from '../../constants';

export const registerUser = createAsyncThunk(
  'user/register',
  async ({ login, password }: UserRegType, { rejectWithValue }) => {

    try {
      const response = axios.post(API_URL, {
        login,
        password
      });
      const result = await response;

      return result;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const loginUser = createAsyncThunk(
  'user/login',
  async ({ login, password }: UserRegType, { rejectWithValue }) => {
    try {
      const response = axios.post(`${API_URL}login`, {
        login,
        password
      })
        .then(res => {
          return res.data
        })

      const result = await response;

      localStorage.setItem('accessToken', result.accessToken);

      return result.accessToken;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }
    }
  }
);

export const getUserProfile = createAsyncThunk(
  'user/getUserProfile',
  async (arg, { rejectWithValue }) => {
    try {
      console.log('getUserProfile>>try')
      const tokenLC = localStorage.getItem('accessToken');
      const config = {
        headers: {
          Authorization: `Bearer ${tokenLC}`,
        }
      };

      const response = axios.get(`${API_URL}profile`, config)
        .then(res => res.data);

      const result = await response;
      console.log('getUserProfile>>try>>result', result)
      return result;

    } catch (error) {
      console.log('getUserProfile>>catch')
      if (error instanceof Error) {
        return rejectWithValue(error.message)
      }
    }
  }
)