import { VIDEO_RESPONSE } from './types';

export const videoResponse = (response) => ({
  type: VIDEO_RESPONSE,
  response,
});
