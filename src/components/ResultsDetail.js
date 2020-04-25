import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.restaurant.thumb }} />
      <Text style={styles.name}>{result.restaurant.name}</Text>
      <Text>
        Rating: {result.restaurant.user_rating.aggregate_rating}, Votes:{' '}
        {result.restaurant.user_rating.votes}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 12,
  },
  image: {
    width: 150,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  },
});

export default ResultsDetail;
