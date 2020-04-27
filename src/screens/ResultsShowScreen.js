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
      <Text style={styles.restaurantName}>{singleRestaurant.name}</Text>
      <Image style={styles.image} source={{ uri: imageURI }} />
      <Text style={styles.establishment}>{singleRestaurant.establishment}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoBold}>User Rating: </Text>
        <Text style={styles.info}>
          {singleRestaurant.user_rating.rating_text} (
          {singleRestaurant.user_rating.aggregate_rating})
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoBold}>Average Cost for Two: </Text>
        <Text style={styles.info}>
          £{singleRestaurant.average_cost_for_two}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoBold}>Address: </Text>
        <Text style={styles.info}> {singleRestaurant.location.address}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoBold}>Opening Times:</Text>
      </View>
      <Text style={styles.timings}> {singleRestaurant.timings}</Text>
      <Text style={styles.photoTitle}>Customer Photos</Text>
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
  restaurantName: {
    color: 'white',
    fontSize: 22,
    marginTop: 10,
    alignSelf: 'center',
    fontFamily: 'PlayfairDisplay-SemiBold',
  },
  photoContainer: {
    backgroundColor: '#404b1a',
    paddingTop: 15,
    paddingBottom: 15,
  },
  info: {
    color: 'white',
    lineHeight: 30,
    fontFamily: 'Assistant-Light',
    alignSelf: 'center',
    fontSize: 15,
  },
  infoBold: {
    color: 'white',
    lineHeight: 30,
    fontFamily: 'Assistant-Bold',
    alignSelf: 'center',
    fontSize: 15,
  },
  establishment: {
    color: 'white',
    fontSize: 17,
    marginLeft: 12,
    alignSelf: 'center',
    fontFamily: 'Assistant-Bold',
    marginBottom: 10,
    marginTop: 10,
  },
  photoTitle: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
    fontFamily: 'Assistant-Bold',
  },
  infoContainer: {
    flexDirection: 'row',
    width: 250,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 3,
    marginBottom: 3,
  },
  timings: {
    marginLeft: 12,
    marginRight: 12,
    color: 'white',
    lineHeight: 30,
    marginLeft: 20,
    marginRight: 20,
    fontFamily: 'Assistant-Light',
    alignSelf: 'center',
  },
});

export default ResultsShowScreen;
