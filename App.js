import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Homepage from './components/home.jsx';
// import Icon from 'react-native-vector-icons';

import Login from './screens/login.js';
import SignUp from './screens/signup.js';
import HomeScreen from './screens/home.js';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				{/* <Stack.Screen name="Login" component={Login} /> */}
				{/* <Stack.Screen name="SignUp" component={Signup} /> */}
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{
						title: "Sport Share",
						headerStyle: {
							backgroundColor: "#183059",
						},
						headerTitleStyle: {
							color: 'white',
							fontWeight: 'bold',
						},
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

