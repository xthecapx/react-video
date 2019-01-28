import * as types from './types';
import axios from '../../axios-videos';

export const videosSucess = videos => {
  return {
    type: types.VIDEOS_SUCCESS,
    videos
  };
};

export const videosFail = error => {
  return {
    type: types.VIDEOS_FAIL,
    error
  };
};

export const videosStart = () => {
  return {
    type: types.VIDEOS_START
  };
};

export const fetchVideos = () => {
  return dispatch => {
    dispatch(videosStart());
    axios
      .get(`/videos?api_key=${process.env.REACT_APP_KEY}&auth_token=1&limit=10&workflow_status=ready`)
      .then(res => {
        console.log('[Redux][fetchVideos]', res);
        dispatch(selectVideo(res.data[0].id));
        dispatch(videosSucess(res.data));
      })
      .catch(error => {
        dispatch(videosFail(error));
      });
  };
};

export const selectVideo = id => {
  return {
    type: types.SELECT_VIDEO,
    id
  };
};
