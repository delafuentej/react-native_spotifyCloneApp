/* eslint-disable prettier/prettier */
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../../screens/home/HomeScreen';

type HomeStackParamList = {
  HomeScreen: undefined;
};
const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{
      headerShown: false,
  }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

export default HomeStackNavigator;