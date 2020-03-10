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

export default function FormUsernameScreen(props) {
    const dispatch = useDispatch()
    const username = useSelector((state) => state.userReducer.username);
    const [name, setName] = useState('')

    const playGame = (level) => {
        if (level === 'easy') {
            dispatch(getBoard('easy'))
            dispatch({ type: 'USERNAME', payload: name })
            props.navigation.navigate('PlayGameScreen', { level: 'easy' })
        } else if (level === 'medium') {
            dispatch(getBoard('medium'))
            dispatch({ type: 'USERNAME', payload: name })
            props.navigation.navigate('PlayGameScreen', { level: 'medium' })
        } else {
            dispatch(getBoard('hard'))
            dispatch({ type: 'USERNAME', payload: name })
            props.navigation.navisgate('PlayGameScreen')
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ marginTop: Constants.statusBarHeight }}>
                <View style={{ width: 200 }}>
                    <TextInput
                        placeholder="Username"
                        style={{ borderWidth: 1, marginBottom: 10 }}
                        onChangeText={val => setName(val)}
                    />
                    <View style={{ marginBottom: 5 }}>
                        <TouchableOpacity
                            style={styles.button}
                            title="easy"
                            onPress={() => playGame('easy')}>
                            <Text> Easy </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginBottom: 5 }}>
                        <TouchableOpacity
                            style={styles.button}
                            title="medium"
                            onPress={() => playGame('medium')}>
                            <Text> Medium </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginBottom: 5 }}>
                        <TouchableOpacity
                            style={styles.button}
                            title="hard"
                            onPress={() => playGame('hard')}>
                            <Text> Hard </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        </View>
    )
}