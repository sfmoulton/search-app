import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';
import { withNavigation } from 'react-navigation';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Image source={require('../../assets/logo.png')} style={styles.image} />
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <View style={styles.button}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: '500' }}>
            Find my breakfast!
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    borderColor: 'white',
    alignSelf: 'center',
    marginTop: 80,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#F26419',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 15,
    width: 300,
    alignSelf: 'center' ,
    elevation: 5
    
  },
});

export default withNavigation(HomeScreen);
