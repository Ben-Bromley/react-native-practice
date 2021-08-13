// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	StatusBar,
	ScrollView,
	TextInput,
	Button,
	Pressable
} from 'react-native';
import Homepage from './components/home.jsx';
import Icon from 'react-native-vector-icons';

export default function App() {
	return (
		<SafeAreaView>
			{/* <Login /> */}
			{/* <SignUp /> */}
			<Home />
		</SafeAreaView>
	);
}

function Login() {
	return (
		<SafeAreaView style={styles.loginContainer}>
			<View style={styles.loginTitleContainer}>
				<Text style={styles.title}>Login</Text>
			</View>
			<View style={styles.formContainer}>
				<TextInput style={styles.textInput} placeholder="Username" />
				<TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true} />
				{/* <Button style={styles.loginButton} title="Login" /> */}
				<Pressable style={styles.loginButton}>
					<Text style={styles.text}>Login</Text>
				</Pressable>
				<Text style={styles.linkText}>Forgotten Password?</Text>
			</View>
			<View style={styles.orContainer}>
				{/* <Text style={styles.hr}>---------------</Text> */}
				<View style={styles.hr} />
				<Text style={styles.text}>Or</Text>
				<View style={styles.hr} />
				{/* <Text style={styles.hr}>---------------</Text> */}
			</View>
			<View style={styles.socialLoginContainer}>
				{/* Buttons */}
				<Pressable style={styles.facebookLogin}>
					<Text style={styles.text}>Sign In With Facebook</Text>
				</Pressable>
				<Pressable style={styles.twitterLogin}>
					<Text style={styles.text}>Sign In With Twitter</Text>
				</Pressable>
				<Text style={styles.text}>Don't Have an Account?</Text>
				<Text style={styles.linkText}>Sign Up Here</Text>
			</View>
		</SafeAreaView>
	);
}

function SignUp() {
	return (
		<SafeAreaView style={styles.signupContainer}>
			<View style={styles.signupSubContainer}>
				<View style={styles.loginTitleContainer}>
					<Text style={styles.title}>Sign Up</Text>
				</View>
				<View style={styles.formContainer}>
					<TextInput style={styles.textInput} placeholder="Username" />
					<TextInput style={styles.textInput} placeholder="Email" />
					<TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true} />
					<TextInput style={styles.textInput} placeholder="Confirm Password" secureTextEntry={true} />
					{/* <Button style={styles.loginButton} title="Login" /> */}
					<Pressable style={styles.loginButton}>
						<Text style={styles.text}>Sign Up</Text>
					</Pressable>
				</View>
			</View>
		</SafeAreaView>
	);
}

function Home() {
	return (
		<View style={styles.container}>
			{/* this padds past the notch */}
			<View style={styles.topContainer}>
				<View style={styles.titleContainer}>
					{/* <Icon name="rocket" size={30} color="#900" /> */}
					<Text style={styles.title}>Sport Share</Text>
				</View>
			</View>
			<ScrollView style={styles.mainContainer}>
				<Text>Sample</Text>
				<Text>Sample</Text>
				<View style={styles.eventContainer}>
					<EventCard />
					<EventCard />
					<EventCard />
					<EventCard />
					<EventCard />
					<EventCard />
				</View>
			</ScrollView>
			<View style={styles.nav}>
				<Text>Sample</Text>
				<Text>Sample</Text>
				<Text>Sample</Text>
			</View>
		</View>
	);
}

function EventCard() {
	return (
		<View style={styles.cardContainer}>
			<Text style={styles.cardBigText}>Tennis Session</Text>
			<Text style={styles.cardSmallText}>hosted by John Smith</Text>
			<Text style={styles.cardBigText}>12 Aug, 7pm-9pm</Text>
			<Text style={styles.cardSmallText}>2/4 people booked in</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	// ------------- Main menu Styles -------------//
	container: {
		flex: 1,
		justifyContent: 'space-between',
		minHeight: '100%'
	},
	topContainer: {
		backgroundColor: '#183059',
		width: '100%',
		height: StatusBar.currentHeight + 70
	},
	titleContainer: {
		marginTop: StatusBar.currentHeight,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		color: 'white',
		fontSize: 25
	},
	mainContainer: {
		backgroundColor: '#466785'
	},
	eventContainer: {
		alignItems: 'center',
		paddingBottom: 20
	},
	nav: {
		backgroundColor: '#183059',
		height: 80,
		// borderTopColor: 'black',
		// borderTopWidth: 2,
		// shadowColor: 'pink',
		shadowOffset: { height: 300, width: 300 },
		shadowOpacity: 0.2,
		shadowRadius: 0
	},
	// ------- EventCard Styles -------- //
	cardContainer: {
		backgroundColor: '#183059',
		padding: 15,
		borderWidth: 1,
		borderColor: 'white',
		borderStyle: 'solid',
		borderRadius: 10,
		width: '85%',
		marginTop: 20,

		shadowOffset: { height: 300, width: 300 },
		shadowOpacity: 0.2,
		shadowRadius: 0
	},
	cardBigText: {
		color: 'white',
		fontSize: 25
	},
	cardSmallText: {
		color: 'grey'
	},
	// ------------ Login / Signup Styles ------------ //
	loginContainer: {
		minHeight: '100%',
		minWidth: '100%',
		flex: 1,
		justifyContent: 'space-evenly',
		alignItems: 'center',
		backgroundColor: '#183059'
	},
	signupContainer: {
		minHeight: '100%',
		minWidth: '100%',
		backgroundColor: '#183059'
	},
	signupSubContainer: {
		maxHeight: '70%',
		flex: 1,
		justifyContent: 'space-evenly',
		alignItems: 'center'
	},
	loginTitleContainer: {
		minWidth: '100%',
		alignItems: 'center'
	},
	formContainer: { alignItems: 'center' },
	textInput: {
		backgroundColor: 'white',
		minWidth: '85%',
		height: 40,
		marginBottom: 15,
		borderRadius: 5,
		padding: 8
	},
	loginButton: {
		minWidth: '85%',
		backgroundColor: '#366cc9',
		alignItems: 'center',
		padding: 10,
		borderRadius: 20,
		marginBottom: 15
	},
	linkText: {
		color: 'white',
		textDecorationLine: 'underline'
	},
	text: { color: 'white' },
	orContainer: {
		width: '90%',
		maxHeight: 30,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	hr: {
		backgroundColor: 'white',
		width: '38%',
		height: StyleSheet.hairlineWidth
	},
	socialLoginContainer: { alignItems: 'center' },
	facebookLogin: {
		minWidth: '85%',
		backgroundColor: '#366cc9',
		alignItems: 'center',
		padding: 10,
		borderRadius: 20,
		marginBottom: 15
	},
	twitterLogin: {
		minWidth: '85%',
		backgroundColor: '#14aaff',
		alignItems: 'center',
		padding: 10,
		borderRadius: 20,
		marginBottom: 15
	}
});
