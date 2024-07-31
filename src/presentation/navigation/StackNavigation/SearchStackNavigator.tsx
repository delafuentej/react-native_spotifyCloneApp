/* eslint-disable prettier/prettier */
import { createStackNavigator } from '@react-navigation/stack';
import { SearchScreen } from '../../screens/search/SearchScreen';


type SearchStackParamList = {
  Search: undefined
};
const SearchStack = createStackNavigator<SearchStackParamList>();

const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator screenOptions={{
      headerShown: false,
  }}>
      <SearchStack.Screen name="Search" component={SearchScreen} />
    </SearchStack.Navigator>
  );
};

export default SearchStackNavigator;