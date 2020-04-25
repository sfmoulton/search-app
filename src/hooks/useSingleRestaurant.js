import { useEffect, useState } from 'react';
import zomato from '../api/zomato';

export default (id) => {
  const [restaurant, setRestaurant] = useState(null);

  const getRestaurant = async (id) => {
    const response = await zomato.get('/restaurant', {
      params: {
        res_id: id,
      },
    });
    setRestaurant(response.data);
  };

  useEffect(() => {
    getRestaurant(id);
  }, []);

  return restaurant;
};
