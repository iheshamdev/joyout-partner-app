import { createSlice } from '@reduxjs/toolkit';
import { OFFERS_URL } from '../../constants';
import { apiCallBegan, apiCallFailed } from '../middleware/api';

const slice = createSlice({
  name: 'offers',
  initialState: {
    data: { active: [], hold: [] },
    status: 'active',
    loading: false,
  },
  reducers: {
    initLoader: offers => {
      offers.loading = true;
    },
    received: (offers, action) => {
      let activeOffers = action.payload.filter(
        offer => offer.status === 'active'
      );
      let holdOffers = action.payload.filter(offer => offer.status === 'hold');
      offers.data.active = activeOffers;
      offers.data.hold = holdOffers;
      offers.loading = false;
    },
    statusChanged: (offers, action) => {
      //   console.log(action);
      offers.status = action.payload.status;
    },
  },
});

export const { initLoader, received, statusChanged } = slice.actions;
export default slice.reducer;

export const LOAD_OFFERS = params =>
  apiCallBegan({
    url: OFFERS_URL,
    params,
    onStart: initLoader.type,
    onSuccess: received.type,
    onError: apiCallFailed.type,
  });
