import { combineReducers } from 'redux';
import authReducer from './slices/auth';
import statReducer from './slices/stat';

const rootReducer = combineReducers({
  auth: authReducer,
  stat: statReducer,
});

export default rootReducer;
