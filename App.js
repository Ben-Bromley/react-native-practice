// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	StyleSheet,
	View,
} from 'react-native';

// import Homepage from './components/home.jsx';
// import Icon from 'react-native-vector-icons';

import Login from './screens/login.js';
import SignUp from './screens/signup.js';
import Home from './screens/home.js';

export default function App() {
	return (
		<View>
			{/* <Login /> */}
			{/* <SignUp /> */}
			<Home />
		</View>
	);
}

const styles = StyleSheet.create({
});
