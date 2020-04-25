import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Button } from 'react-native';
import useSingleRestaurant from '../hooks/useSingleRestaurant';
import Loader from '../components/Loader';

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [restaurant, loading, errorMessage] = useSingleRestaurant(id);

  if (!restaurant) {
    return null; //maybe show error message or loading indicator
  }

  const imageURI = restaurant.featured_image
    ? restaurant.featured_image
    : 'https://images.unsplash.com/photo-1585747733279-8f64c2b71381?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

  return (
    <View>
      <Loader loading={loading} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>{restaurant.name}</Text>
      <Image style={styles.image} source={{ uri: imageURI }} />
      <Text>{restaurant.establishment}</Text>
      <Text>
        User Rating: {restaurant.user_rating.rating_text} (
        {restaurant.user_rating.aggregate_rating})
      </Text>
      <Text>Average Cost for Two: £{restaurant.average_cost_for_two}</Text>
      <Text>Address: {restaurant.location.address}</Text>
      <Text>Timings: {restaurant.timings}</Text>

      <Text>Customer Photos</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurant.photos}
        keyExtractor={(item) => {
          item.photo.url;
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
      {/* <Button title='Menu'>{restaurant.menu_url}</Button> */}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 250,
    borderRadius: 4,
    marginLeft: 5,
    marginRight: 5,
  },
});

export default ResultsShowScreen;
