import axios from 'axios';
const KEY = 'AIzaSyCM9foCACnTvtpGOiHyjM5NiICtU5vZYc8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'statistics',
    key: KEY,
  },
});
