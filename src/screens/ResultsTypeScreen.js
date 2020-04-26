import React, { useEffect } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Button,
  View,
} from 'react-native';
import useRestaurants from '../hooks/useRestaurants';
import ResultsList from '../components/ResultsList';

const ResultsTypeScreen = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId');
  const categoryName = navigation.getParam('categoryName');
  const cityID = navigation.getParam('cityID');

  const [
    findRestaurants,
    restaurants,
    restaurantsErrorMsg,
    restaurantsLoading,
  ] = useRestaurants();

  useEffect(() => {
    findRestaurants(cityID, 0, 20, categoryId);
  }, []);

  if (!restaurantsLoading && restaurants.length === 0) {
    return (
      <View>
        <Text>{categoryName}</Text>
        <Text>No {categoryName} options in location</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>{categoryName}</Text>
      {restaurantsErrorMsg ? <Text>{restaurantsErrorMsg}</Text> : null}
      <ResultsList restaurants={restaurants} title='Restaurants' />
    </View>
  );
};

export default ResultsTypeScreen;
