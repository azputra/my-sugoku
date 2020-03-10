import React from 'react'
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Constants from 'expo-constants';
import { useSelector } from 'react-redux'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
});

export default function FormUsernameScreen(props) {
    const username = useSelector((state) => state.userReducer.username);
    const myStatus = useSelector((state) => state.statusGameReducer.status);

    return (
        <View style={styles.container}>
            <View style={{ marginTop: Constants.statusBarHeight }}>
                {
                    myStatus == 'solved' ?
                        <View style={{ width: 200 }}>
                            <Text>{username}</Text>
                        </View>
                        :
                        <Text>YOU LOSE</Text>
                }
            </View >
        </View>
    )
}