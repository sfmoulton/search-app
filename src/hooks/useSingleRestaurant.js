import { useEffect, useState } from 'react';
import zomato from '../api/zomato';

export default (id) => {
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const getRestaurant = async (id) => {
    try {
      setLoading(true);
      const response = await zomato.get('/restaurant', {
        params: {
          res_id: id,
        },
      });
      setRestaurant(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setErrorMessage('Unable to load restaurant details');
    }
  };

  useEffect(() => {
    getRestaurant(id);
  }, []);

  return [restaurant, loading, errorMessage];
};
