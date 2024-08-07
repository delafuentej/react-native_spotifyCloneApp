/* eslint-disable prettier/prettier */
import { View } from "react-native";
import { globalStyles } from "../../../config/theme/globalStyles"
import { ActivityIndicator } from 'react-native-paper';


export const LoadingScreen = () => {
    return(
        <View style = {globalStyles.centeredContainer}>
            <ActivityIndicator />
        </View>
    );
}