import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	KeyboardAvoidingView,
	TextInput,
	TouchableOpacity,
	Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function Login({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = () => {
		if (!email || !password) {
			return Alert.alert(
				"⚠️ Could Not Login",
				"Please enter an email and password"
			);
		}
        // fetch login data from API
		fetch("http://192.168.1.158:3000/users/login", {
			method: "POST",
            headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({ 
                email: email,
                password: password
             }),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.error) {
                    // if error, alert user
					return Alert.alert(
						"⚠️ Could Not Login",
						`Error: ${data.error.code.substring(5)}`
					);
				} else {
                    // if no error, navigate to home screen
                    return navigation.replace("Root", { user: data.user });
				}
			});

	};

	return (
		<KeyboardAvoidingView style={styles.loginContainer}>
			<View style={styles.loginSubContainer}>
				<View style={styles.loginTitleContainer}>
					<Text style={styles.title}>Login</Text>
				</View>
				<View style={styles.formContainer}>
					<TextInput
						style={styles.textInput}
						placeholder="Email"
						onChangeText={(email) => setEmail(email)}
						value={email}
						autoCapitalize="none"
					/>
					<TextInput
						style={styles.textInput}
						placeholder="Password"
						onChangeText={(password) => setPassword(password)}
						value={password}
						secureTextEntry={true}
						autoCapitalize="none"
					/>
					<TouchableOpacity style={styles.primaryButton} onPress={login}>
						<Text style={styles.text}>Login</Text>
					</TouchableOpacity>
					<Text style={styles.linkText}>Forgotten Password?</Text>
				</View>
				<View style={styles.orContainer}>
					<View style={styles.hr} />
					<Text style={styles.text}>Or</Text>
					<View style={styles.hr} />
				</View>
				<View style={styles.socialLoginContainer}>
					<TouchableOpacity>
						<Text style={styles.text}>
							<Icon name="logo-facebook" size={18} /> Sign In
						</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.text}>
							<Icon name="logo-google" size={18} /> Sign In
						</Text>
					</TouchableOpacity>
				</View>
				<Text style={styles.text}>
					Don't Have an Account?{" "}
					<Text
						style={styles.linkText}
						onPress={() => navigation.navigate("Signup")}
					>
						Sign Up
					</Text>
				</Text>
			</View>
		</KeyboardAvoidingView>
	);
}

// ------------ Login Styles ------------ //
const styles = StyleSheet.create({
	inputLabel: {
		color: "white",
		fontSize: 18,
		marginBottom: 5,
	},
	title: {
		color: "white",
		fontSize: 35,
	},
	loginContainer: {
		minHeight: "100%",
		minWidth: "100%",
		backgroundColor: "#222d42",
		// backgroundColor: '#1a212e',
	},
	loginSubContainer: {
		marginTop: 20,
		maxHeight: "90%",
		flex: 1,
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	loginTitleContainer: {
		minWidth: "100%",
		alignItems: "center",
	},
	formContainer: { alignItems: "center" },
	textInput: {
		fontSize: 18,
		backgroundColor: "white",
		minWidth: "85%",
		marginBottom: 15,
		borderRadius: 5,
		padding: 15,
	},
	primaryButton: {
		minWidth: "85%",
		backgroundColor: "#366cc9",
		alignItems: "center",
		padding: 15,
		borderRadius: 5,
		marginBottom: 15,
	},
	linkText: {
		color: "white",
		textDecorationLine: "underline",
		marginTop: 5,
	},
	text: { color: "white", fontSize: 18 },
	orContainer: {
		width: "90%",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
	hr: {
		backgroundColor: "white",
		width: "38%",
		height: StyleSheet.hairlineWidth,
	},
	socialLoginContainer: {
		width: "50%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
});
