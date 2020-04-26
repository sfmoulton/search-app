import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Button,
  View,
} from 'react-native';

const ResultsTypeScreen = ({ navigation }) => {

  const categoryId = navigation.getParam('categoryId');
  const location = navigation.getParam('location');
  

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default ResultsTypeScreen;
