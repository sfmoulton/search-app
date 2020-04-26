import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import ResultsList from '../components/ResultsList';
import Loader from '../components/Loader';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [
    findLocationId,
    restaurants,
    errorMessage,
    loading,
    categories,
  ] = useRestaurants();

  const filterRestaurantsByCategory = (category) => {
    return restaurants.filter((result) => {
      return result.restaurant.highlights.filter((highlight) => {
        if (highlight === category) {
          return result;
        }
      });
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => findLocationId(term)}
      />
      <Loader loading={loading} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <ResultsList
              title={item.categories.name}
              restaurants={filterRestaurantsByCategory(item.categories.name)}
            />
          )}
        />

        {/* <ResultsList
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
         /> */}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
