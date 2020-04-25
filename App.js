import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import HomeScreen from './src/screens/HomeScreen';

// import * as Font from 'expo-font';
// import { AppLoading } from 'expo';
// import {useState} from 'react';

// const fetchFonts = () => {
//   return Font.loadAsync({
//     'Quicksand-Bold': require('./assets/fonts/Quicksand-Bold.ttf'),
//     'Quicksand-Light': require('./assets/fonts/Quicksand-Light.ttf'),
//     'Quicksand-Medium': require('./assets/fonts/Quicksand-Medium.ttf'),
//     'Quicksand-Regular': require('./assets/fonts/Quicksand-Regular.ttf'),
//     'Quicksand-SemiBold': require('./assets/fonts/Quicksand-SemiBold.ttf'),
//   });
// };

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Find My Breakfast!',
      cardStyle: {
        backgroundColor: '#2F4858',
      },
      headerStyle: {
        backgroundColor: '#33658A',
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center'
    },
  }
);

export default createAppContainer(navigator);
