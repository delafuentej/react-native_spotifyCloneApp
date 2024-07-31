/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './presentation/navigation/BottomTabNavigation/BottomTabNavigator';
import { PaperProvider } from 'react-native-paper';



const App = () => {
  return (
    <PaperProvider>
       <NavigationContainer>
        <BottomTabNavigator/>
      </NavigationContainer>
    </PaperProvider>
  );
};
export default App;
