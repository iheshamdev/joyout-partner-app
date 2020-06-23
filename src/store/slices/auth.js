import { createSlice } from '@reduxjs/toolkit';
import { AUTH_URL } from '../../constants';
import { apiCallBegan, apiCallFailed } from '../middleware/api';

const slice = createSlice({
  name: 'auth',
  initialState: { data: {}, loading: false },
  reducers: {
    authRequested: (auth, action) => {
      auth.loading = true;
    },
    userLoggedIn: (auth, action) => {
      auth.data = action.payload;
      auth.loading = false;
      localStorage.setItem('accessToken', action.payload.accessToken);
    },
  },
});

export const { userLoggedIn, authRequested } = slice.actions;
export default slice.reducer;

export const LOG_IN = data =>
  apiCallBegan({
    url: AUTH_URL,
    method: 'post',
    data,
    onStart: authRequested.type,
    onSuccess: userLoggedIn.type,
    onError: apiCallFailed.type,
  });
