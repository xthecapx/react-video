import * as types from './types';
import axios from '../../axios-videos';

export const videosSucess = orders => {
  return {
    type: types.FETCH_ORDERS_SUCCESS,
    orders
  };
};

export const videosFail = error => {
  return {
    type: types.FETCH_ORDERS_FAIL,
    error
  };
};

export const videosStart = () => {
  return {
    type: types
  };
};

export const fetchVideos = () => {
  return dispatch => {
    dispatch(videosStart());
    axios
      .get(`/videos?api_key=${process.env.REACT_APP_KEY}&auth_token=1&limit=10&workflow_status=ready`)
      .then(res => {
        console.log('[Redux][fetchVideos]', res);
        dispatch(videosSucess(res));
      })
      .catch(error => {
        dispatch(videosFail(error));
      });
  };
};
