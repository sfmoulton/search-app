import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
  const imageURI = result.restaurant.thumb;
  const defaultFeatureImg =
    'https://images.unsplash.com/photo-1585747733279-8f64c2b71381?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: imageURI.length ? imageURI : defaultFeatureImg,
        }}
      />
      <Text style={styles.name}>{result.restaurant.name}</Text>
      <Text style={styles.info}>
        Rating: {result.restaurant.user_rating.aggregate_rating}, Votes:{' '}
        {result.restaurant.user_rating.votes}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderColor: 'white',
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: '#404b1a',
    alignItems: 'center',
    width: 250,
    padding: 10,
  },
  image: {
    width: 150,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    color: 'white',
    fontFamily: 'PlayfairDisplay-Regular',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 2,
    marginBottom: 2,
  },
  info: {
    color: 'white',
    fontFamily: 'Assistant-Light',
    fontSize: 15,
    marginTop: 2,
    marginBottom: 2,
  },
});

export default ResultsDetail;
