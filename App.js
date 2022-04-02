import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/login.js';
import SignUpScreen from './screens/signup.js';
import Root from './screens/main/index.js';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
				<Stack.Screen name="Signup" component={SignUpScreen} options={{ title:"Sign Up" }}/>
				<Stack.Screen
					name="Root"
					component={Root}
					options={{
						title: "Sport Share",
						headerStyle: {
							backgroundColor: "#183059",
						},
						headerTitleStyle: {
							color: 'white',
							fontWeight: 'bold',
						},
						headerLeft: null,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

