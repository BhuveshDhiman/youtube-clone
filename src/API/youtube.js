import axios from 'axios';
const KEY = 'AIzaSyCM9foCACnTvtpGOiHyjM5NiICtU5vZYc8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 20,
    key: KEY,
  },
});
