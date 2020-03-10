import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import HomeStackNavigation from './HomeStackNavigation'
import ProfileStackNavigation from './ProfileStackNavigation'

const Tab = createBottomTabNavigator()
export default function RootNavigation() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'black',
                labelStyle: {
                    fontWeight: 'bold'
                }
            }}>
            <Tab.Screen
                name="Home"
                component={HomeStackNavigation}
                options={{
                    tabBarIcon: () => <FontAwesome name="gamepad" size={32} color="#00aced" />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStackNavigation}
                options={{ tabBarIcon: () => <MaterialCommunityIcons name="face-profile" size={32} color="#00aced" /> }}
            />
        </Tab.Navigator>
    )
}