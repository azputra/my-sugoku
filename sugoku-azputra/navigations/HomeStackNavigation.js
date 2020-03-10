import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FormUsername from '../screens/FormUsernameScreen'
import StartGame from '../screens/PlayGameScreen'
import BoardGame from '../screens/BoardGameScreen'
import FinishGame from '../screens/FinishGameScreen'

const Stack = createStackNavigator()
export default function HomeStackNavigation() {

    return (
        <Stack.Navigator
        // screenOptions={{
        //     headerShown: false
        // }}
        >
            <Stack.Screen name="FormUsernameScreen" component={FormUsername} />
            <Stack.Screen name="PlayGameScreen" component={StartGame} />
            <Stack.Screen name="BoardGameScreen" component={BoardGame} />
            <Stack.Screen name="FinishGameScreen" component={FinishGame} />
        </Stack.Navigator>
    )
}