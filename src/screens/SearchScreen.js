import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import Loader from '../components/Loader';
import { withNavigation } from 'react-navigation';

import useCity from '../hooks/useCity';
import useCategories from '../hooks/useCategories';
import useRestaurants from '../hooks/useRestaurants';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [
    findRestaurants,
    restaurants,
    restaurantsErrorMsg,
    restaurantsLoading,
  ] = useRestaurants();
  const [findCityID, cityID, cityErrorMsg, cityIDLoading, cityName] = useCity();
  const [
    getCategories,
    categories,
    categoriesErrorMsg,
    categoriesLoading,
  ] = useCategories();

  useEffect(() => {
    getCategories();
    findCityID('London');
    findRestaurants(cityID, 0, 20);
  }, []);

  return (
    <>
      <Text>My location: {cityName}</Text>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => findCityID(term)}
      />
      <Loader loading={restaurantsLoading} />
      {restaurantsErrorMsg ? <Text>{restaurantsErrorMsg}</Text> : null}

      <Text>Search by type: </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Type', {
                categoryId: item.categories.id,
                location: term,
              })
            }
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>{item.categories.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <ScrollView>
        <ResultsList restaurants={restaurants} title='Top Rated' />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: 'white',
    borderWidth: 2,
    padding: 2,
    margin: 2,
    backgroundColor: 'white',
    height: 55,
  },
  buttonText: {
    fontSize: 20,
    alignSelf: 'center',
  },
});

export default withNavigation(SearchScreen);
