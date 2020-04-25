import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import useSingleRestaurant from '../hooks/useSingleRestaurant';

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  
  const restaurant = useSingleRestaurant(id);

  if (!restaurant) {
    return null; //maybe show error message or loading indicator
  }

  return (
    <View>
      <Text>{restaurant.name}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurant.photos}
        keyExtractor={(item) => {
          item.photo.url;
        }}
        renderItem={({ item }) => {
          return (
            <Image style={styles.image} source={{ uri: item.photo.url }} />
          );
        }}
      />
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
