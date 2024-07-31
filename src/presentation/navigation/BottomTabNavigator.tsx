/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home/HomeScreen';
import { SearchScreen } from '../screens/search/SearchScreen';
import { FavouritesScreen } from '../screens/favourites/FavouritesScreen';

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = () =>{
  return (
    <BottomTab.Navigator screenOptions={{
        headerShown:false,
    }}>
      <BottomTab.Screen name="HomeScreen" component={HomeScreen} />
      <BottomTab.Screen name="SearchScreen" component={SearchScreen} />
      <BottomTab.Screen name="FavouritesScreen" component={FavouritesScreen} />
    </BottomTab.Navigator>
  );
}