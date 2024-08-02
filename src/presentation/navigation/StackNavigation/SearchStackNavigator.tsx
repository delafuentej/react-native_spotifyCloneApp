/* eslint-disable prettier/prettier */
import { createStackNavigator } from '@react-navigation/stack';
import { SearchScreen } from '../../screens/search/SearchScreen';


type SearchStackParamList = {
  SearchScreen: undefined
};
const SearchStack = createStackNavigator<SearchStackParamList>();

const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator screenOptions={{
      headerShown: false,
  }}>
      <SearchStack.Screen name="SearchScreen" component={SearchScreen} />
    </SearchStack.Navigator>
  );
};

export default SearchStackNavigator;