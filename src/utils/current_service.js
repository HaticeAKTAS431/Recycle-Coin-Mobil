import AsyncStorage from '@react-native-async-storage/async-storage';
const _tokenTag = '@token',
    _currentNameTag = '@currentInformation';

export class CurrentService {
    static async getValueAsync() {
        return JSON.parse(await AsyncStorage.getItem(_currentNameTag));
    }

    static async setValueAsync(values) {
        await AsyncStorage.setItem(_currentNameTag, JSON.stringify(values));
    }

    static async getTokenAsync() {
        const token = await AsyncStorage.getItem(_tokenTag);
        return token ? token.toString() : null;
    }

    static async setTokenAsync(token) {
        await AsyncStorage.setItem(_tokenTag, token.toString());
    }

    static async clearStorageAsync() {
        await AsyncStorage.clear();
    }
}