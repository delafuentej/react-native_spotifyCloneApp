
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CustomIcon } from '../../components/ui/CustomIcon';
import { HomeScreen } from '../../screens/home/HomeScreen';
import { SearchScreen } from '../../screens/search/SearchScreen';
import { FavouritesScreen } from '../../screens/favourites/FavouritesScreen';

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
        tabBarStyle:{
          backgroundColor:'rgba(0,0,0,0.5)',
          position:'absolute',
          bottom:0,
          left:0,
          right:0,
          shadowOpacity:4,
          shadowRadius:4, 
          elevation:4,
          shadowOffset: {
            width:0,
            height: -4,
          },
          borderTopWidth:0,
        },
        tabBarIcon: ({ focused, color, size }) => {
        let iconName: string;
        color = focused ? '#20C563' : 'gray';
        size = 20;

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
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Search" component={SearchScreen} />
      <BottomTab.Screen name="Favourites" component={FavouritesScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;