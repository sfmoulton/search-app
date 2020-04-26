import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, restaurants, navigation }) => {
  if (!restaurants.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Type', { restaurants })}
        restaurants={restaurants}
      >
        <Text style={styles.titleStyle}>{title}</Text>
      </TouchableOpacity>
      <FlatList
        data={restaurants}
        keyExtractor={(item, index) => {
          return item.restaurant.id + index.toString();
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ResultsShow', { id: item.restaurant.id })
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
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
    marginBottom: 5,
    color: 'white',
  },
  container: {
    marginBottom: 8,
    marginTop: 8,
  },
});

export default withNavigation(ResultsList);
