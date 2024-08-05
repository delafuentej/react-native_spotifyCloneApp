
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from '../StackNavigation/HomeStackNavigator';
import SearchStackNavigator from '../StackNavigation/SearchStackNavigator';
import FavouritesStackNavigator from '../StackNavigation/FavouritesStackNavigator';
import { CustomIcon } from '../../components/ui/CustomIcon';

type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Favourites: undefined;
}

export const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () =>{
  return (
    <BottomTab.Navigator 
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
        let iconName: string;
        color = focused ? '#20C563' : 'gray';
        size= 20;

        switch(route.name){
          case 'Home':
            iconName = 'home';
            break;
          case 'Search':
            iconName = 'search';
            break;
          case 'Favourites':
            iconName = 'heart';
            break;
          default:
            break;
        }
        return <CustomIcon name={iconName} size={size} color={color} />
      },
      tabBarActiveTintColor: '#20C563',
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <BottomTab.Screen name="Home" component={HomeStackNavigator} />
      <BottomTab.Screen name="Search" component={SearchStackNavigator} />
      <BottomTab.Screen name="Favourites" component={FavouritesStackNavigator} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;