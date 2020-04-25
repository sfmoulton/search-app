import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, restaurants }) => {
  console.log('HELLO', restaurants);

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={(result) => result.restaurant.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item}/>;
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
    marginBottom: 5
  },
  container: {
    marginBottom: 8,
    marginTop: 8
  }
});

export default ResultsList;
