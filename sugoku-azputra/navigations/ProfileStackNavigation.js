import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileUser from '../screens/ProfileUserScreen'

const Stack = createStackNavigator()
export default function HomeStackNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="ProfileUserScreen" component={ProfileUser} />
        </Stack.Navigator>
    )
}