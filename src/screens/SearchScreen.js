import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import ResultsList from '../components/ResultsList';
import Loader from '../components/Loader';

const SearchScreen = () => {

  const [term, setTerm] = useState('');
  const [findLocationId, restaurants, errorMessage, loading] = useRestaurants();

  const filterRestaurantsByPrice = (price_range) => {
    return restaurants.filter((result) => {
      return result.restaurant.price_range === price_range;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => findLocationId(term)}
      />
      <Loader loading={loading}/>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          restaurants={filterRestaurantsByPrice(1)}
          title='Cheap as Chips'
        />
        <ResultsList
          restaurants={filterRestaurantsByPrice(2)}
          title='Reasonable'
        />
        <ResultsList
          restaurants={filterRestaurantsByPrice(3)}
          title='A Little Pricier'
        />
        <ResultsList
          restaurants={filterRestaurantsByPrice(4)}
          title='Splash the Cash'
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
});

export default SearchScreen;
