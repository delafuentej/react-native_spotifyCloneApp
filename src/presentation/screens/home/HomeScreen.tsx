/* eslint-disable prettier/prettier */

import { Text, View } from 'react-native';
 import { getToken } from '../../../actions/token/getAccessToken';



export const  HomeScreen = () => {
   getToken();
  return (
      <View>
        <Text>HomeScreen</Text>
      </View>
  );
};