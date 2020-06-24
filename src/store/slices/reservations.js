import { createSlice } from '@reduxjs/toolkit';
import { RESERVATIONS_URL } from '../../constants';
import { apiCallBegan, apiCallFailed } from '../middleware/api';

const slice = createSlice({
  name: 'reservations',
  initialState: { list: [], loading: false },
  reducers: {
    reservationsRequested: (reservations, action) => {
      reservations.loading = true;
    },
    reservationsReceived: (reservations, action) => {
      reservations.list = action.payload;
      reservations.loading = false;
    },
    reservationStatusChanged: (reservations, action) => {
      let id = action.payload.replace('/reservations/', '');
      const index = reservations.list.findIndex(todo => todo.id === id);
      reservations.list.splice(index, 1);
    },
  },
});

export const {
  reservationsRequested,
  reservationsReceived,
  reservationStatusChanged,
} = slice.actions;
export default slice.reducer;

export const LOAD_RESERVATIONS = params =>
  apiCallBegan({
    url: RESERVATIONS_URL,
    params,
    onStart: reservationsRequested.type,
    onSuccess: reservationsReceived.type,
    onError: apiCallFailed.type,
  });

export const CHANGE_RESERVATION_STATUS = (id, newStatus) =>
  apiCallBegan({
    url: `${RESERVATIONS_URL}/${id}`,
    method: 'patch',
    data: { status: newStatus },
    onSuccess: reservationStatusChanged.type,
    onError: apiCallFailed.type,
  });
