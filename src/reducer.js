import { VIDEO_RESPONSE } from './types';

const initialState = {
  videoResponse: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case VIDEO_RESPONSE:
      return {
        ...state,
        videoResponse: action.response,
      };
    default:
      return state;
  }
};
