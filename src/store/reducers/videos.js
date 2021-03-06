import * as types from '../actions/types';

const initialState = {
  videos: [],
  loading: false,
  currentVideoId: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.VIDEOS_START:
      return {
        ...state,
        loading: true
      };
    case types.VIDEOS_SUCCESS:
      return {
        ...state,
        videos: action.videos,
        loading: false
      };
    case types.VIDEOS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case types.SELECT_VIDEO:
      return {
        ...state,
        currentVideoId: action.id
      };
    default:
      return state;
  }
};

export default reducer;
