/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from '../StackNavigation/HomeStackNavigator';
import SearchStackNavigator from '../StackNavigation/SearchStackNavigator';
import FavouritesStackNavigator from '../StackNavigation/FavouritesStackNavigator';

type BottomTabParamList = {
  HomeTab: undefined;
  SearchTab: undefined;
  FavouritesTab: undefined;
}

export const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () =>{
  return (
    <BottomTab.Navigator screenOptions={{
        headerShown: false,
    }}>
      <BottomTab.Screen name="HomeTab" component={HomeStackNavigator} />
      <BottomTab.Screen name="SearchTab" component={SearchStackNavigator} />
      <BottomTab.Screen name="FavouritesTab" component={FavouritesStackNavigator} />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;