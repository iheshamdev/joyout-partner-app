import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';
import { BASE_API_URL } from '../../constants';
import getAccessToken from '../../helper/getAccessToken';

export const apiCallBegan = createAction('api/callBegan');
export const apiCallSuccess = createAction('api/callSuccess');
export const apiCallFailed = createAction('api/callFailed');

const api = ({ dispatch }) => next => async action => {
  if (action.type !== apiCallBegan.type) return next(action);

  const {
    url,
    method,
    data,
    params,
    onStart,
    onSuccess,
    onError,
  } = action.payload;

  if (onStart) dispatch({ type: onStart });
  try {
    const response = await axios.request({
      baseURL: BASE_API_URL,
      url,
      method,
      data,
      params,
      headers: { Authorization: `Bearer ${getAccessToken()}` },
    });
    console.log(response);
    if (onSuccess)
      dispatch({
        type: onSuccess,
        payload: method === 'patch' ? response.config.url : response.data,
      });
  } catch (error) {
    // Unauthorized
    // console.log(error.response);
    if (error.response.status === 401)
      if (onError) dispatch({ type: onError, payload: error.message });
  }
};

export default api;
