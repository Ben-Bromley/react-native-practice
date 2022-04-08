import { StyleSheet } from "react-native";
export default StyleSheet.create({
	screenContainer: {
		minHeight: "100%",
		backgroundColor: "#1a212e",
		padding: 15,
	},
	textLight: {
		color: "#eeeeee",
		fontSize: 15,
	},
	hr: {
		borderBottomColor: "#eeeeee",
		borderBottomWidth: 1,
		marginBottom: 15,
		marginTop: 15,
	},
	title: {
		color: "#eeeeee",
		fontSize: 30,
		fontWeight: "bold",
		marginBottom: 10,
	},
	// ------- Profile Styles -------- //
	textSecondaryLink: {
		color: "gray",
		fontSize: 15,
		textDecorationStyle: "solid",
		textDecorationLine: "underline",
		textDecorationColor: "gray",
	},
	profile: {
		marginTop: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 15,
		borderBottomColor: "#eeeeee",
		borderBottomWidth: 1,
		borderTopColor: "#eeeeee",
		borderTopWidth: 1,
	},
	profileImg: {
		width: 80,
		height: 80,
		borderRadius: 50,
		backgroundColor: "#183059",
	},
	optionsList: {
		padding: 20,
	},
	option: {
		color: "#eeeeee",
		fontSize: 20,
		marginVertical: 10,
	},
    // ------- Button Styles -------- //
	primaryButton: {
		// minWidth: "85%",
		backgroundColor: "#366cc9",
		alignItems: "center",
		padding: 15,
		borderRadius: 5,
		marginBottom: 15,
	},
	secondaryButton: {
		// minWidth: "85%",
        borderWidth: 2,
        borderColor: "#eeeeee",
		alignItems: "center",
		padding: 15,
		borderRadius: 5,
		marginBottom: 15,
	},
	button: {
		backgroundColor: "#183059",
		padding: 10,
		borderRadius: 5,
		marginVertical: 20,
		width: 110,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		color: "#eeeeee",
		fontSize: 20,
		fontWeight: "bold",
	},

	// ------- FORM Styles -------- //
	textInput: {
		fontSize: 16,
		backgroundColor: "#eeeeee",
		minWidth: "85%",
		marginBottom: 15,
		borderRadius: 5,
		padding: 12,
	},
	textArea: {
		fontSize: 16,
		backgroundColor: "#eeeeee",
		minWidth: "85%",
		marginVertical: 15,
		borderRadius: 5,
		padding: 12,
		paddingTop: 14,
		textAlignVertical: "top",
	},
});
