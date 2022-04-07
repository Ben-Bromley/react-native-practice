import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './home';
import SearchScreen from '../events/search';
import CreateEvent from '../events/create';
import SavedEvents from '../events/saved';
import ProfileScreen from './profile';


import Icon from 'react-native-vector-icons/Ionicons';

export default function Root() {
    const Tab = createBottomTabNavigator();
    
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let icons = {
                        Home: 'home',
                        Search: 'search',
                        Create: 'add-circle',
                        Saved: 'bookmark',
                        Profile: 'person'
                    }
                    return <Icon name={`${icons[route.name]}${focused ? "" : "-outline"}`} size={size} color={color} />
                },
                tabBarStyle: { backgroundColor: '#183059', borderTopWidth: 0 },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'lightgray',
                tabBarShowLabel: false,
                headerShown: false
            })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Create" component={CreateEvent} />
            <Tab.Screen name="Saved" component={SavedEvents} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}