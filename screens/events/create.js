import {
	View,
	ScrollView,
	Text,
	TextInput,
	KeyboardAvoidingView,
	StyleSheet,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard,
	Platform,
	Alert,
} from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { useHeaderHeight } from "@react-navigation/elements";

import globalStyles from "../../styles/styles";

export default function CreateEvent({ navigation }) {
	// get header height for keyboard view offset
	const headerHeight = useHeaderHeight();

	// state for event values
	const [eventName, setEventName] = useState("");
	const [eventDate, setEventDate] = useState(new Date());
	const [eventCapacity, setEventCapacity] = useState();
	const [eventDescription, setEventDescription] = useState("");

	// state for date picker
	const [pickerMode, setMode] = useState("date");
	const [show, setShow] = useState(false);

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate;
		setEventDate(currentDate);
	};
	const showPicker = (currentMode) => {
		setMode(currentMode);
		// allow users to alternative between picker type
		// without having to click twice
		if (!show || currentMode === pickerMode) {
			setShow(!show);
		}
	};

	const handleSubmit = () => {
		if (!eventName) {
			Alert.alert(
				"⚠️ Could Not Create Event",
				"Please enter a name for the event"
			);
			return;
		}
		// consolidate event data into an object
		let event = {
			name: eventName,
			date: eventDate,
			capacity: eventCapacity,
			description: eventDescription,
			// current capacity is 0 or one depending on if the host is attending
		};

		// make POST request to server
		fetch("http://192.168.1.158:3000/events/create", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(event),
		})
			.then((response) => response.json())
			.then((data) => {
				// alert user if event was created successfully
				if (data.status === 200 && data.message === "Success") {
					Alert.alert("Success! 🎉", "Your event has been created");
					navigation.navigate("Home");
				}
			})
			.catch((error) => {
				// alert user if event was not created successfully
				Alert.alert(
					"⚠️ Could Not Create Event",
					"Please try again later"
				);
			});
	};

	const resetForm = () => {
		setEventName("");
		setEventDate(new Date());
		setEventCapacity();
		setEventDescription("");
	};

	return (
		<KeyboardAvoidingView
			style={[globalStyles.screenContainer, { flex: 1 }]}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			keyboardVerticalOffset={headerHeight + 60}
		>
			<TouchableWithoutFeedback
				onPress={() => {
					Keyboard.dismiss();
				}}
			>
				<ScrollView>
					<Text style={globalStyles.title}>Create a New Event</Text>
					<TextInput
						style={globalStyles.textInput}
						placeholder="Event Name"
						onChangeText={(eventName) => setEventName(eventName)}
						value={eventName}
					/>
					<TextInput
						style={globalStyles.textInput}
						keyboardType="numeric"
						maxLength={3} //setting limit of input
						placeholder="Event Capacity"
						onChangeText={(eventCapacity) =>
							setEventCapacity(eventCapacity)
						}
						value={eventCapacity}
					/>
					<View style={styles.dateContainer}>
						<Text style={styles.dateTitle}>Event Date:</Text>
						<TouchableOpacity
							style={styles.dateTextContainer}
							onPress={() => showPicker("date")}
						>
							<Text style={[globalStyles.textLight]}>
								{moment(eventDate).format("ddd DD MMM y")}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.dateTextContainer}
							onPress={() => showPicker("time")}
						>
							<Text style={[globalStyles.textLight]}>
								{moment(eventDate).format("HH:mma")}
							</Text>
						</TouchableOpacity>
					</View>
					{show && (
						<View style={{ minWidth: 130, borderWidth: 0 }}>
							<DateTimePicker
								// testID="dateTimePicker"
								value={eventDate}
								mode={pickerMode}
								is24Hour={true}
								onChange={onChange}
								display="spinner"
								textColor="white"
							/>
						</View>
					)}
					<TextInput
						placeholder="Event Details"
						multiline
						numberOfLines={4}
						style={globalStyles.textArea}
						onChangeText={(eventDescription) =>
							setEventDescription(eventDescription)
						}
						value={eventDescription}
					/>
					<TouchableOpacity
						style={globalStyles.primaryButton}
						onPress={handleSubmit}
					>
						<Text style={globalStyles.textLight}>Create Event</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={globalStyles.secondaryButton}
						onPress={resetForm}
					>
						<Text style={globalStyles.textLight}>Reset Form</Text>
					</TouchableOpacity>
				</ScrollView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	dateContainer: {
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		paddingLeft: 12,
	},
	dateTitle: {
		color: "#eeeeee",
		fontSize: 18,
		marginBottom: 5,
		marginRight: "auto",
		fontWeight: "bold",
	},
	dateTextContainer: {
		backgroundColor: "#183059",
		marginLeft: 5,
		padding: 10,
		borderRadius: 5,
	},
});
