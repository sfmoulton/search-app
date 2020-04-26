import React, { useEffect } from 'react';
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

import { useFonts } from '@use-expo/font';

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [
    getRestaurant,
    singleRestaurant,
    singleRestaurantLoading,
    singleRestaurantErrorMsg,
  ] = useSingleRestaurant();

  useEffect(() => {
    getRestaurant(id);
  }, []);

  let [fontsLoaded] = useFonts({
    'Quicksand-Bold': require('../../assets/fonts/Quicksand-Bold.ttf'),
  });

  if (!singleRestaurant) {
    return null; //maybe show error message or loading indicator
  }

  const imageURI = singleRestaurant.featured_image
    ? singleRestaurant.featured_image
    : 'https://images.unsplash.com/photo-1585747733279-8f64c2b71381?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

  return (
    <ScrollView>
      <Loader loading={singleRestaurantLoading} />
      {singleRestaurantErrorMsg ? (
        <Text>{singleRestaurantErrorMsg}</Text>
      ) : null}
      <Text style={styles.name}>{singleRestaurant.name}</Text>
      <Image style={styles.image} source={{ uri: imageURI }} />
      <Text style={styles.establishment}>{singleRestaurant.establishment}</Text>
      <Text style={styles.info}>
        User Rating: {singleRestaurant.user_rating.rating_text} (
        {singleRestaurant.user_rating.aggregate_rating})
      </Text>
      <Text style={styles.info}>
        Average Cost for Two: £{singleRestaurant.average_cost_for_two}
      </Text>
      <Text style={styles.info}>
        Address: {singleRestaurant.location.address}
      </Text>
      <Text style={styles.info}>Timings: {singleRestaurant.timings}</Text>

      <Text style={styles.title}>Customer Photos</Text>
      <View style={styles.photoContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={singleRestaurant.photos}
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
    fontFamily: 'Quicksand-Bold',
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
