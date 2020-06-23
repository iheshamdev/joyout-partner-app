import { createSlice } from '@reduxjs/toolkit';
import { RESERVATIONS_URL } from '../../constants';
import { apiCallBegan, apiCallFailed } from '../middleware/api';

const slice = createSlice({
  name: 'reservations',
  initialState: { list: [], loading: false },
  reducers: {
    reservationsRequested: (stat, action) => {
      stat.loading = true;
    },
    reservationsReceived: (stat, action) => {
      stat.list = action.payload;
      stat.loading = false;
    },
  },
});

export const { reservationsRequested, reservationsReceived } = slice.actions;
export default slice.reducer;

export const LOAD_RESERVATIONS = () =>
  apiCallBegan({
    url: RESERVATIONS_URL,
    onStart: reservationsRequested.type,
    onSuccess: reservationsReceived.type,
    onError: apiCallFailed.type,
  });
