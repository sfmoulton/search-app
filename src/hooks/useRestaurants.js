import { useState, useEffect } from 'react';
import zomato from '../api/zomato';

export default () => {
  const [location, setLocation] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);

  const findLocationId = async (searchTerm) => {
    setLoading(true);
    try {
      const locationSearch = await zomato.get('/cities', {
        params: {
          q: searchTerm,
        },
      });

      const locationId = locationSearch.data.location_suggestions[0].id;
      const locationName = locationSearch.data.location_suggestions[0].name;
      const locationCountry =
        locationSearch.data.location_suggestions[0].country_name;

      //setLocation([locationId, locationName, locationCountry]);
      findBreakfastResturants(locationId);
      setLoading(false);
    } catch (err) {
      setErrorMessage('Invalid location');
      setLoading(false);
    }
  };

  const findBreakfastResturants = async (locationId) => {
    try {
      const response = await zomato.get('/search', {
        params: {
          entity_id: locationId,
          entity_type: 'city',
          start: 0,
          count: 20,
          category: 8, //breakfast
        },
      });
      const resultingRestaurants = response.data.restaurants;
      // console.log(resultingRestaurants);
      // resultingRestaurants.forEach((restaurant) => {
      //   console.log(restaurant.restaurant.name);
      // });

      setRestaurants(resultingRestaurants);
    } catch (err) {
      setErrorMessage('Could not find the resturants in city...' + err);
    }
  };

  useEffect(() => {
    findLocationId('Manchester');
  }, []);

  return [findLocationId, restaurants, errorMessage, loading];
};
