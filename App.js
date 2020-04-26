import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import HomeScreen from './src/screens/HomeScreen';
import ResultsTypeScreen from './src/screens/ResultsTypeScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Restaurant: ResultsShowScreen,
    Home: HomeScreen,
    Category: ResultsTypeScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      cardStyle: {
        backgroundColor: '#606c38',
      },
      headerStyle: {
        backgroundColor: '#404B1A',
        height: 65,
        elevation: 10
      },
      headerTintColor: '#ffffff',
      headerTitleAlign: 'center',
    },
  }
);

export default createAppContainer(navigator);
