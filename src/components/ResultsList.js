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

const ResultsList = ({ title, cityID, navigation, categoryId }) => {
  const [start, setStart] = useState(0);
  const [count, setCount] = useState(20);
  const [currentCityID, setCurrentCityID] = useState(cityID);

  const [
    findRestaurants,
    restaurants,
    restaurantsErrorMsg,
    restaurantsLoading,
  ] = useRestaurants();

  useEffect(() => {
    findRestaurants(cityID, start, count, categoryId);
  }, [cityID, start, count, categoryId]);

  return (
    <View style={styles.container}>
      <Loader loading={restaurantsLoading} />
      {restaurantsErrorMsg ? (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{restaurantsErrorMsg}</Text>
        </View>
      ) : null}
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>{title}</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={restaurants}
        keyExtractor={(item, index) => {
          return item.restaurant.id + index.toString();
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Restaurant', { id: item.restaurant.id })
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
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 10,
    color: 'white',
    fontFamily: 'PlayfairDisplay-SemiBold',
  },
  container: {
    marginBottom: 8,
    marginTop: 8,
  },
  titleContainer: {
    backgroundColor: '#ad343e',
    alignSelf: 'center',
    padding: 2,
  },
  error: {
    fontFamily: 'Assistant-Bold',
    color: 'white',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  errorContainer: {
    backgroundColor: '#ad343e',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
});

export default withNavigation(ResultsList);
