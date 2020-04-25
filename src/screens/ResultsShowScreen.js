import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  View,
} from 'react-native';
import useSingleRestaurant from '../hooks/useSingleRestaurant';
import Loader from '../components/Loader';
import { withOrientation } from 'react-navigation';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [restaurant, loading, errorMessage] = useSingleRestaurant(id);

  let [fontsLoaded] = useFonts({
    'Quicksand-Bold': require('../../assets/fonts/Quicksand-Bold.ttf'),
  });

  if (!restaurant) {
    return null; //maybe show error message or loading indicator
  }

  const imageURI = restaurant.featured_image
    ? restaurant.featured_image
    : 'https://images.unsplash.com/photo-1585747733279-8f64c2b71381?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

  return (
    <ScrollView>
      <Loader loading={loading} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {fontsLoaded ? (
        <Text
          style={{
            fontSize: 40,
            fontFamily: 'Quicksand-Bold',
          }}
        >
          Quicksand-Bold Font
        </Text>
      ) : (
        <AppLoading />
      )}
      <Text style={styles.name}>{restaurant.name}</Text>
      <Image style={styles.image} source={{ uri: imageURI }} />
      <Text style={styles.establishment}>{restaurant.establishment}</Text>
      <Text style={styles.info}>
        User Rating: {restaurant.user_rating.rating_text} (
        {restaurant.user_rating.aggregate_rating})
      </Text>
      <Text style={styles.info}>
        Average Cost for Two: £{restaurant.average_cost_for_two}
      </Text>
      <Text style={styles.info}>Address: {restaurant.location.address}</Text>
      <Text style={styles.info}>Timings: {restaurant.timings}</Text>

      <Text style={styles.title}>Customer Photos</Text>
      <View style={styles.photoContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={restaurant.photos}
          keyExtractor={(item) => {
            return item.photo.url;
          }}
          renderItem={({ item }) => {
            return (
              <Image
                style={styles.image}
                source={{
                  uri: item.photo.url,
                }}
              />
            );
          }}
        />
      </View>

      {/* <Button title='Menu'>{restaurant.menu_url}</Button> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 250,
    borderRadius: 4,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  name: {
    color: 'white',
    fontSize: 25,
    marginTop: 10,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  photoContainer: {
    backgroundColor: '#2f4858',
    paddingTop: 15,
    paddingBottom: 15,
  },
  info: {
    color: 'white',
    lineHeight: 30,
    marginLeft: 12,
    marginRight: 12,
  },
  establishment: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
    alignSelf: 'center',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default ResultsShowScreen;
