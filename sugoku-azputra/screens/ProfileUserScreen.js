import React from 'react'
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Constants from 'expo-constants';

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

export default function BoardGameScreen(props) {
    return (
        <View style={styles.container}>
            <View style={{ marginTop: Constants.statusBarHeight }}>
                <View style={{ width: 200 }}>
                    <Text>DONE</Text>
                </View>
            </View >
        </View>
    )
}