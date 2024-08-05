/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';

export class AsyncStorageAdapter {
    static async getItem (key: string) : Promise<string | null>{
        try{
            return await AsyncStorage.getItem(key);
        }catch(error){
            console.log(error);
            return null;
        }
    }

    static async setItem (key: string, value: string): Promise<void>{
        try{
             await AsyncStorage.setItem(key, value);
        }catch(error){
            console.log(error);
            throw new Error(`Error setting item ${key}- ${value}`);
        }
    }


}