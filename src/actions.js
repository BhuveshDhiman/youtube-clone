import * as types from './types';

export const videoResponse = (response) => ({
  type: types.VIDEO_RESPONSE,
  response,
});
export const channelResponse = (response) => ({
  type: types.CHANNEL_RESPONSE,
  response,
});
export const videoStatResponse = (response) => ({
  type: types.VIDEOS_STAT_RESPONSE,
  response,
});
export const channelStatResponse = (response) => ({
  type: types.CHANNELS_STAT_RESPONSE,
  response,
});
