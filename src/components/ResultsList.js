import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';
import useRestaurants from '../hooks/useRestaurants';
import Loader from '../components/Loader';

const ResultsList = ({ title, cityID, navigation }) => {
  const [start, setStart] = useState(0);
  const [count, setCount] = useState(20);
  const [currentCityID, setCurrentCityID] = useState('');

  const [
    findRestaurants,
    restaurants,
    restaurantsErrorMsg,
    restaurantsLoading,
  ] = useRestaurants();

  useEffect(() => {
    setCurrentCityID(cityID);
    findRestaurants(currentCityID, start, count);
  }, []);

  return (
    <View style={styles.container}>
      <Loader loading={restaurantsLoading} />
      {restaurantsErrorMsg ? <Text>{restaurantsErrorMsg}</Text> : null}
      <TouchableOpacity
        onPress={() => navigation.navigate('Type', { restaurants })}
        restaurants={restaurants}
      >
        <Text style={styles.titleStyle}>{title}</Text>
      </TouchableOpacity>
      <FlatList
        data={restaurants}
        keyExtractor={(item, index) => {
          return item.restaurant.id + index.toString();
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ResultsShow', { id: item.restaurant.id })
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
    marginBottom: 5,
    color: 'white',
  },
  container: {
    marginBottom: 8,
    marginTop: 8,
  },
});

export default withNavigation(ResultsList);
