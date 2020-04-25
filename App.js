import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import HomeScreen from './src/screens/HomeScreen';
import ResultsTypeScreen from './src/screens/ResultsTypeScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
    Home: HomeScreen,
    Type: ResultsTypeScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Brunch Finder',
      cardStyle: {
        backgroundColor: '#33658A',
      },
      headerStyle: {
        backgroundColor: '#F6AE2D',
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
    },
  }
);

export default createAppContainer(navigator);
