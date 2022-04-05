import { StyleSheet } from "react-native";
export default StyleSheet.create({
    screenContainer: {
        minHeight: '100%',
        backgroundColor: '#1a212e',
        padding: 15,
    },
    textLight: {
        color: "white",
        fontSize: 15,
    },
    hr: {
        borderBottomColor: "white",
        borderBottomWidth: 1,
        marginBottom: 15,
        marginTop: 15,
    },
    // ------- Profile Styles -------- //
    title: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 10,
    },
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
        borderBottomColor: "white",
        borderBottomWidth: 1,
        borderTopColor: "white",
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
        color: "white",
        fontSize: 20,
        marginVertical: 10,
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
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    }
});