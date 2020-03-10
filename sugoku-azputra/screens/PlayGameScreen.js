import React, { useState } from 'react'
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Constants from 'expo-constants';
import { useDispatch, useSelector } from 'react-redux'
import getBoard from '../store/actions/getBoardAction'

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

export default function PlayGameScreen(props) {
    const dispatch = useDispatch()
    const username = useSelector((state) => state.userReducer.username);

    return (
        <View style={styles.container}>
            <View style={{ marginTop: Constants.statusBarHeight }}>
                <View style={{ width: 200 }}>
                    <View style={{ marginBottom: 5 }}>
                        <TouchableOpacity
                            style={styles.button}
                            title="level"
                            onPress={props.navigation.navigate('BoardGameScreen', { level: props.route.params.level })}>
                            <Text> PLAY GAME </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        </View>
    )
}