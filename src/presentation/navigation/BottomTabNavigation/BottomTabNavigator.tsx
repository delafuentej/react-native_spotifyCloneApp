/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from '../StackNavigation/HomeStackNavigator';
import SearchStackNavigator from '../StackNavigation/SearchStackNavigator';
import FavouritesStackNavigator from '../StackNavigation/FavouritesStackNavigator';
import { CustomIcon } from '../../components/ui/CustomIcon';

type BottomTabParamList = {
  HomeTab: undefined;
  SearchTab: undefined;
  FavouritesTab: undefined;
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
          case 'HomeTab':
            iconName = 'home';
            break;
          case 'SearchTab':
            iconName = 'search';
            break;
          case 'FavouritesTab':
            iconName = 'heart';
            break;
          default:
            break;
        }
        return <CustomIcon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#20C563',
      tabBarInactiveTintColor: 'gray',
     
    })}
    >
      <BottomTab.Screen name="HomeTab" component={HomeStackNavigator} />
      <BottomTab.Screen name="SearchTab" component={SearchStackNavigator} />
      <BottomTab.Screen name="FavouritesTab" component={FavouritesStackNavigator} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;