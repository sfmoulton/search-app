import axios from 'axios';
import env from 'react-native-config';

export default axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1',
  headers: {
    'user-key': env.ZOMATO_API_KEY,
  },
});
