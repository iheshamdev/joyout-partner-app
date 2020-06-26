import { combineReducers } from 'redux';
import authReducer from './slices/auth';
import statReducer from './slices/stat';
import reservationsReducer from './slices/reservations';
import offersReducer from './slices/offers';

const rootReducer = combineReducers({
  auth: authReducer,
  stat: statReducer,
  reservations: reservationsReducer,
  offers: offersReducer,
});

export default rootReducer;
