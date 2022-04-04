import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './home';
// import SearchScreen from './search';
import ProfileScreen from './profile';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Root() {
    const Tab = createBottomTabNavigator();
    
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    switch (route.name) {
                        case 'Home':
                            return <Icon name='home' size={size} color={color} />;
                            break;
                        case "Profile":
                            return <Icon name='person' size={size} color={color} />;
                            break;
                    }
                },
                tabBarStyle: { backgroundColor: '#183059', borderTopWidth: 0 },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false,
                headerShown: false
            })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            {/* <Tab.Screen name="Search" component={searchScreen} /> */}
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}