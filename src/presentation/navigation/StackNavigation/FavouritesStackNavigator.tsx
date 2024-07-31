/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { createStackNavigator } from '@react-navigation/stack';
import { FavouritesScreen } from '../../screens/favourites/FavouritesScreen';


type FavouriteStackParamList = {
  Favourites: undefined;
}

const FavouritesStack = createStackNavigator<FavouriteStackParamList>();

const FavouritesStackNavigator = () => {
  return (
    <FavouritesStack.Navigator screenOptions={{
      headerShown: false,
  }}>
      <FavouritesStack.Screen name="Favourites" component={FavouritesScreen} />
    </FavouritesStack.Navigator>
  );
};

export default FavouritesStackNavigator;