import axios from 'axios';

export default axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1',
  headers: {
    'user-key': 'e7ea0ecc3f4fbd468a079b4fd6872947',
  },
});
//92adba7fa2fd501f9509e55bf4d1021a
