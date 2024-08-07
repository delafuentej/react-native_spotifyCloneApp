/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/self-closing-comp */
import { createStackNavigator } from "@react-navigation/stack";
import { LoadingScreen } from "../../screens/loading/LoadingScreen";
import BottomTabNavigator from "../BottomTabNavigation/BottomTabNavigator";
import { LoginScreen } from "../../screens/auth/LoginScreen";



export type RootStackParams = {
    LoadingScreen: undefined;
    LoginScreen: undefined;
    MainScreen: undefined;
}

const Stack = createStackNavigator<RootStackParams>();


export const StackNavigator = () => {
    return(
        <Stack.Navigator
        initialRouteName='LoginScreen'
        screenOptions={{
            headerShown: false,
        }}
        >
            <Stack.Screen name='LoadingScreen' component={LoadingScreen}/>
            <Stack.Screen name='LoginScreen' component={LoginScreen}/>
            <Stack.Screen name='MainScreen' component={BottomTabNavigator}/>

        </Stack.Navigator>
    );
}
