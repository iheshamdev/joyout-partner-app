import { createSlice } from '@reduxjs/toolkit';
import { STAT_URL } from '../../constants';
import { apiCallBegan, apiCallFailed } from '../middleware/api';

const slice = createSlice({
  name: 'stat',
  initialState: { data: {}, loading: false },
  reducers: {
    statsRequested: (stat, action) => {
      stat.loading = true;
    },
    statsReceived: (stat, action) => {
      stat.data = action.payload;
      stat.loading = false;
    },
  },
});

export const { statsRequested, statsReceived } = slice.actions;
export default slice.reducer;

export const LOAD_STATS = () =>
  apiCallBegan({
    url: STAT_URL,
    onStart: statsRequested.type,
    onSuccess: statsReceived.type,
    onError: apiCallFailed.type,
  });
