import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [findLocationId, results, errorMessage] = useResults();

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => findLocationId(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList title='Easy'/>
      <ResultsList title='Medium'/>
      <ResultsList title='Difficult'/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
