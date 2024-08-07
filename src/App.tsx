/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './presentation/navigation/BottomTabNavigation/BottomTabNavigator';
import { PaperProvider } from 'react-native-paper';
import { StackNavigator } from './presentation/navigation/StackNavigation/StackNavigator';



const App = () => {
  return (
    <PaperProvider>
       <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};
export default App;
