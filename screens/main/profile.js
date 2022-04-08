import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import globalStyles from "../../styles/styles";

export default function Profile({ navigation }) {
	let user = {
		name: "John Smith",
	};

    const logout = () => {
        // TODO: logout user
        // navigate to login screen
        navigation.replace("Login");
    }

	return (
		<View style={globalStyles.screenContainer}>
			{/* <View style={globalStyles.hr}></View> */}
			<View style={globalStyles.profile}>
				<View>
					<Text style={globalStyles.title}>{user.name}</Text>
					<Text style={globalStyles.textSecondaryLink}>
						Edit Your Profile
					</Text>
				</View>
				<View style={globalStyles.profileImg}></View>
			</View>
			<View style={globalStyles.optionsList}>
				<Text style={globalStyles.option}>My Events</Text>
				<Text style={globalStyles.option}>Friends</Text>
				<Text style={globalStyles.option}>Account</Text>
				<Text style={globalStyles.option}>Settings</Text>
			</View>
			{/* <View style={globalStyles.hr}></View> */}
			<TouchableOpacity
				style={globalStyles.secondaryButton}
				onPress={() => {logout()}}
			>
				<Text style={globalStyles.textLight}>Logout</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	// ------- Profile Styles -------- //
});
