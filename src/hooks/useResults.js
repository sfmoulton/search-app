import {useState, useEffect} from 'react';
import swapi from '../api/swapi';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await swapi.get('/people/', {
        params: {
          search: searchTerm,
        },
      });
      setResults(response.data.results);
    } catch (err) {
      setErrorMessage('Something went wrong...');
    }
  };

  useEffect(() => {
    searchApi('Darth Vader');
  }, []);

  return [searchApi, results, errorMessage];
}