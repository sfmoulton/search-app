import { useState } from 'react';
import zomato from '../api/zomato';

export default () => {
  const [singleRestaurant, setSingleRestaurant] = useState(null);
  const [singleRestaurantLoading, setSingleRestaurantLoading] = useState(false);
  const [singleRestaurantErrorMsg, setSingleRestaurantErrorMsg] = useState('');

  const getRestaurant = async (id) => {
    setSingleRestaurantLoading(true);
    try {
      const response = await zomato.get('/restaurant', {
        params: {
          res_id: id,
        },
      });
      setSingleRestaurant(response.data);
      setSingleRestaurantLoading(false);
    } catch (err) {
      setSingleRestaurantErrorMsg('Unable to load restaurant details');
      setSingleRestaurantLoading(false);
    }
  };

  return [
    getRestaurant,
    singleRestaurant,
    singleRestaurantLoading,
    singleRestaurantErrorMsg,
  ];
};
