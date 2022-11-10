import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUser, logIn, logOut, register } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchCurenntUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: state => {
      state.isLoggedIn = false;
    },
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = { ...action.payload.user };
      state.token = action.payload.token;
    },
    [register.rejected]: (state, action) => {
      state.isLoggedIn = false;
    },
    [logIn.pending](state) {
      state.isLoggedIn = false;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.isLoggedIn = false;
      state.user = {};
      state.token = '';
    },
    [fetchCurrentUser.pending]: state => {
      state.isFetchCurenntUser = true;
    },
    [fetchCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchCurenntUser = false;
    },
    [fetchCurrentUser.rejected]: state => {
      state.isFetchCurenntUser = false;
    },
  },
});

export const authReduser = authSlice.reducer;
