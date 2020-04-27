import React, { useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ResultsList from '../components/ResultsList';

const ResultsTypeScreen = ({ navigation }) => {
  const categoryId = navigation.getParam('categoryId');
  const categoryName = navigation.getParam('categoryName');
  const cityID = navigation.getParam('cityID');

  return (
    <View style={styles.restaurantContainer}>
      <ResultsList
        cityID={cityID}
        title={categoryName}
        categoryId={categoryId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  restaurantContainer: {
    alignItems: 'center',
  },
});

export default ResultsTypeScreen;
