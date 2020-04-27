import { useState } from 'react';
import zomato from '../api/zomato';

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantsErrorMsg, setRestaurantsErrorMsg] = useState('');
  const [restaurantsLoading, setRestaurantsLoading] = useState(true);

  const findRestaurants = async (cityID, start, count, categoryId) => {
    setRestaurantsLoading(true);

    try {
      const response = await zomato.get('/search', {
        params: {
          entity_id: cityID,
          entity_type: 'city',
          start: start,
          count: count,
          sort: 'rating',
          order: 'desc',
          category: categoryId ? categoryId : null,
        },
      });

      setRestaurants(response.data.restaurants);
      setRestaurantsLoading(false);
    } catch (err) {
      setRestaurantsErrorMsg('Error: Could not find the restaurants in city');
      setRestaurantsLoading(false);
    }
  };

  return [
    findRestaurants,
    restaurants,
    restaurantsErrorMsg,
    restaurantsLoading,
  ];
};
