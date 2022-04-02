import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './home';
// import SearchScreen from './search';
import ProfileScreen from './profile';

export default function Root() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#183059',
                    borderTopWidth: 0,
                    // shadowOffset: { height: 0, width: 0 },
                    // shadowOpacity: 0,
                    // shadowRadius: 0,
                    // elevation: 0,
                },
                // labelStyle: {
                //     fontSize: 12,
                //     fontWeight: 'bold',
                //     marginBottom: 5,
                // },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false,
                headerShown: false
            }}>
            <Tab.Screen name="Home" component={HomeScreen} />
            {/* <Tab.Screen name="Search" component={SearchScreen} /> */}
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}