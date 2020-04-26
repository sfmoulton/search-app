import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import Loader from '../components/Loader';
import { withNavigation } from 'react-navigation';

import useCity from '../hooks/useCity';
import useCategories from '../hooks/useCategories';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');

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
  }, []);

  return (
    <>
      <Loader loading={cityIDLoading} />
      <View style={styles.locationContainer}>
        <Text style={styles.titleStyle}>My location: </Text>
        <Text style={styles.locationStyle}>{cityName}</Text>
      </View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => findCityID(term)}
      />
      {cityErrorMsg ? <Text>{cityErrorMsg}</Text> : null}
      <Text style={styles.titleStyle}>Search by type: </Text>
      <View style={styles.typeContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={(item, index) => {
            return item.categories.id.toString() + index.toString();
          }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Category', {
                  categoryId: item.categories.id,
                  categoryName: item.categories.name,
                  cityID: cityID,
                })
              }
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>{item.categories.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.resultsContainer}>
        <ResultsList cityID={cityID} title='Top Rated' />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    padding: 10,
    margin: 2,
    backgroundColor: '#ad343e',
    height: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  buttonText: {
    fontSize: 17,
    alignSelf: 'center',
    fontFamily: 'PlayfairDisplay-SemiBold',
    color: 'white',
    alignSelf: 'center',
  },
  titleStyle: {
    fontFamily: 'PlayfairDisplay-Bold',
    color: 'white',
    fontSize: 20,
    marginLeft: 12,
    marginTop: 10,
    marginBottom: 10,
  },
  typeContainer: {
    height: 70,
    marginLeft: 12,
    marginRight: 12,
  },
  locationStyle: {
    fontFamily: 'PlayfairDisplay-Regular',
    color: 'white',
    fontSize: 20,
    marginLeft: 12,
    marginTop: 10,
    marginBottom: 10,
  },
  locationContainer: {
    flexDirection: 'row',
  },
  resultsContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default withNavigation(SearchScreen);
