import { combineReducers } from 'redux';
import authReducer from './slices/auth';
import statReducer from './slices/stat';
import reservationsReducer from './slices/reservations';

const rootReducer = combineReducers({
  auth: authReducer,
  stat: statReducer,
  reservations: reservationsReducer,
});

export default rootReducer;
