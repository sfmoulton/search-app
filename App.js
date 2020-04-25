import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
    Home: HomeScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Find My Breakfast!',
    },
  }
);

export default createAppContainer(navigator);
