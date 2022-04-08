import {
	View,
	Text,
	ScrollView,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import React from "react";
import globalStyles from "../../styles/styles";
import Icon from "react-native-vector-icons/Ionicons";

export default function SearchScreen() {
	return (
		<View style={globalStyles.screenContainer}>
			<View style={styles.searchBar}>
				<TextInput style={styles.searchInput} placeholder="Search..." />
				<TouchableOpacity style={styles.searchButtonContainer}>
					<Icon name="search" size={20} color="white" />
				</TouchableOpacity>
			</View>
			<ScrollView style={styles.searchResults}></ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	searchBar: {
		flexDirection: "row",
		justifyContent: "space-between",
		// alignItems: "center",
    height: 40,
	},
	searchInput: {
		backgroundColor: "#eeeeee",
		padding: 10,
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
		width: "80%",
		height: "100%",
	},
	searchButtonContainer: {
		backgroundColor: "#183059",
		padding: 10,
		borderTopRightRadius: 5,
		borderBottomRightRadius: 5,
		width: "20%",
		height: "100%",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
