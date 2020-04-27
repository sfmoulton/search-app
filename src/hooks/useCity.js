import { useState } from 'react';
import zomato from '../api/zomato';

export default () => {
  const [cityName, setCityName] = useState('');
  const [cityID, setCityID] = useState('61'); //london
  const [cityErrorMsg, setCityErrorMsg] = useState('');
  const [cityIDLoading, setCityIDLoading] = useState(true);

  const findCityID = async (cityName) => {
    setCityIDLoading(true);
    try {
      const locationSearch = await zomato.get('/cities', {
        params: {
          q: cityName,
        },
      });
      setCityName(cityName);
      setCityID(locationSearch.data.location_suggestions[0].id);
      setCityIDLoading(false);
    } catch (err) {
      setCityErrorMsg('Error: Could not find city');
      setCityIDLoading(false);
    }
  };

  return [findCityID, cityID, cityErrorMsg, cityIDLoading, cityName];
};
