import * as types from "./types";

const initialState = {
	videoResponse: [],
	channelResponse: [],
	videoStatResponse: [],
	channelStatResponse: [],
};

export const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.VIDEO_RESPONSE:
			return {
				...state,
				videoResponse: action.response,
			};
		case types.CHANNEL_RESPONSE:
			return {
				...state,
				channelResponse: action.response,
			};

		case types.VIDEOS_STAT_RESPONSE:
			return {
				...state,
				videoStatResponse: action.response,
			};
		case types.CHANNELS_STAT_RESPONSE:
			return {
				...state,
				channelStatResponse: action.response,
			};
		default:
			return state;
	}
};
