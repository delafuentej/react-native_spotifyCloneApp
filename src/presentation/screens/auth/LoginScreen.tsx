/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { SafeAreaView, View} from 'react-native';
import { Text } from 'react-native-paper';
import { LoginButton } from '../../components/ui/LoginButton';
import { colors, globalStyles } from '../../../config/theme/globalStyles';


export const  LoginScreen = () => {
  return (
      <SafeAreaView style={globalStyles.centeredContainer}>
        {/* img spotify */}

        {/* text */}
        <Text variant="titleLarge">Millions of Songs Free on Spotify!</Text>
        <Text variant="titleMedium">Sing into Spotify </Text>


        <View style={{height: 150}}/>

        {/* sign in fields */}

        <LoginButton
          color={colors.green}
          onPress={()=>{}}
          label="Sign In with Spotify"
          blackText
        />
         <LoginButton
          onPress={()=>{}}
          iconName="logo-google"
          label="Continue with Google"


        />
         <LoginButton
          onPress={()=>{}}
          label="Sign with Facebook"
           iconName="logo-facebook"

        />
         <LoginButton
          onPress={()=>{}}
          label="Sign with Apple"
          iconName="logo-apple"

        />
      </SafeAreaView>
  );
};
