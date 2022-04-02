import React from 'react';
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';

export default function EventCard() {
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
    // ------- EventCard Styles -------- //
	cardContainer: {
		backgroundColor: '#183059',
		padding: 15,
		borderRadius: 5,
		width: '85%',
		marginTop: 20,

		shadowOffset: { height: 3, width: 3 },
		shadowOpacity: 0.2,
		shadowRadius: 0
	},
	cardBigText: {
		color: 'white',
		fontSize: 25
	},
	cardSmallText: {
		color: 'lightgrey'
	},
});