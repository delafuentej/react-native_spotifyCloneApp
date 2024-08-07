/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { Pressable, StyleSheet } from 'react-native';
import { colors } from '../../../config/theme/globalStyles';
import { Text } from 'react-native-paper';
import { CustomIcon } from './CustomIcon';



interface Props {
    label: string;
    color?: string;
    blackText? :boolean;
    iconName?: string;
    onPress: () => void;
}
export const LoginButton = ({
    label,
    color = colors.darkGray,
    blackText = false,
    iconName,
    onPress,
}: Props) => {
    return <Pressable
        onPress={()=> onPress()}
        style={({pressed})=>(
        [styles.button, {
            backgroundColor: color,
            opacity: (pressed) ? 0.7 : 1,
        }]
        )}
    >
        
            {iconName && (
                <CustomIcon
                    name={iconName}
                    color={ iconName === 'logo-google' ? 'red' : iconName === 'logo-facebook' ? 'blue' : colors.shiningWhite}
                    size={25}
                />
            )}
            <Text
                style={{
                    ...styles.buttonText,
                    color: (blackText) ? colors.background : colors.shiningWhite,
                }}
            >{label}</Text>

        
       
    </Pressable>
};

const styles = StyleSheet.create({
    button: {
       padding: 10,
       width: 300,
       borderRadius:25,
       alignItems:'center',
       justifyContent:'center',
       flexDirection:'row',
       marginVertical:10,
       borderColor: '#c0c0c0',
       borderWidth: 0.8,
    },
    buttonText: {
        fontWeight:'bold',
        textAlign:'center',
        flex:1,
    },

});

