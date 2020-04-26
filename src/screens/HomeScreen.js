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
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

const HomeScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    'Assistant-ExtraLight': require('../../assets/fonts/Assistant-ExtraLight.ttf'),
    'Assistant-Light': require('../../assets/fonts/Assistant-Light.ttf'),
    'Assistant-Regular': require('../../assets/fonts/Assistant-Regular.ttf'),
    'Assistant-Bold': require('../../assets/fonts/Assistant-Bold.ttf'),
    'PlayfairDisplay-Bold': require('../../assets/fonts/PlayfairDisplay-Bold.ttf'),
    'PlayfairDisplay-Regular': require('../../assets/fonts/PlayfairDisplay-Regular.ttf'),
    'PlayfairDisplay-SemiBold': require('../../assets/fonts/PlayfairDisplay-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View>
        <Image
          source={require('../../assets/logo3.png')}
          style={styles.image}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <View style={styles.button}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontFamily: 'PlayfairDisplay-SemiBold',
              }}
            >
              Get started
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  image: {
    width: 325,
    height: 325,
    borderColor: 'white',
    alignSelf: 'center',
    marginTop: 80,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#AD343E',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 15,
    width: 300,
    alignSelf: 'center',
    elevation: 5,
  },
});

export default withNavigation(HomeScreen);
