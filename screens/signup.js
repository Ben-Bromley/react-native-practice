import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TextInput,
	Pressable
} from 'react-native';

export default function SignUp() {
	return (
		<SafeAreaView style={styles.signupContainer}>
			<View style={styles.signupSubContainer}>
				<View style={styles.loginTitleContainer}>
					<Text style={styles.title}>Sign Up</Text>
				</View>
				<View style={styles.formContainer}>
					<Text style={styles.inputLabel}>Username:</Text>
					<TextInput style={styles.textInput} placeholder="Username" />
					<Text style={styles.inputLabel}>Email:</Text>
					<TextInput style={styles.textInput} placeholder="Email" />
					<Text style={styles.inputLabel}>Password:</Text>
					<TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true} />
					<Text style={styles.inputLabel}>Confirm:</Text>
					<TextInput style={styles.textInput} placeholder="Confirm Password" secureTextEntry={true} />
					<Pressable style={styles.primaryButton}>
						<Text style={styles.text}>Sign Up</Text>
					</Pressable>
				</View>
			</View>
		</SafeAreaView>
	);
}

// ------------ Signup Styles ------------ //
const styles = StyleSheet.create({
	inputLabel: {
		color: 'white',
		fontSize: 18,
		marginBottom: 5
	},
    title: {
		color: 'white',
		fontSize: 35,
		marginBottom: 20
	},
	signupContainer: {
		minHeight: '100%',
		minWidth: '100%',
		backgroundColor: '#222d42',
		paddingTop:20,
	},
	signupSubContainer: {
		marginTop: 20,
		maxHeight: '85%',
		flex: 1,
		justifyContent: 'space-evenly',
		alignItems: 'center'
	},
	formContainer: { alignItems: 'stretch', },
	textInput: {
        fontSize: 18,
		backgroundColor: 'white',
		minWidth: '85%',
		marginBottom: 15,
		borderRadius: 5,
		padding: 15
	},
	primaryButton: {
		minWidth: '85%',
		backgroundColor: '#366cc9',
		alignItems: 'center',
		padding: 15,
		borderRadius: 5,
		marginBottom: 15
	},
	linkText: {
		color: 'white',
		textDecorationLine: 'underline'
	},
	text: { color: 'white', fontSize: 18, },
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