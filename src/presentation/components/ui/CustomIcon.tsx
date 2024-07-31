/* eslint-disable prettier/prettier */

import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    name: string;
    size?: number;
    color?: string;
}


export const CustomIcon = ({name, size, color}: Props) =>{
    return <Icon style={styles.icon} name={name} size={size} color={color} />;
};

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
    },
});