import axios from 'axios';

export default axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1',
  headers: {
    'user-key' : '92adba7fa2fd501f9509e55bf4d1021a',
  },
});
