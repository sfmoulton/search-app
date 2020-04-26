import { useState } from 'react';
import zomato from '../api/zomato';
import * as FileSystem from 'expo-file-system';
// Reduce api call in dev
//import data from './categories.json';

export default () => {
  const [categories, setCategories] = useState([]);
  const [categoriesErrorMsg, setCategoriesErrorMsg] = useState('');
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  const getCategories = async () => {
    setCategoriesLoading(true);
    try {
      const categories = await zomato.get('/categories');

      FileSystem.writeAsStringAsync('./categories.json', categories);
      //console.log(data);

      setCategories(categories.data.categories);
      setCategoriesLoading(false);
    } catch (err) {
      setCategoriesErrorMsg('Error: Cannot return categories');
      setCategoriesLoading(false);
    }
  };

  return [getCategories, categories, categoriesErrorMsg, categoriesLoading];
};
