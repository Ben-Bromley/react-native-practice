import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import moment from 'moment';

export default function EventCard(props) {
	let event = props.event || {};
	let displayDate = moment(event.start).format("MMMM Do YYYY, h:mma");
	
	const showEventDetails = () => {
		props.setShowModal(true);
		props.setSelectedEvent(event);
	}

	return (
		<TouchableOpacity style={styles.cardContainer} 
		onPress={()=>{showEventDetails()}}>
			<View>
				<Text style={styles.textPrimary}>{event.name}</Text>
				<Text style={styles.textSecondary}>{displayDate}</Text>
			</View>
			<View style={styles.eventCount}>
				<Text style={styles.textSecondary}>
					{event.current_capacity}/{event.total_capacity}
				</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	// ------- EventCard Styles -------- //
	cardContainer: {
		backgroundColor: '#183059',
		padding: 15,
		borderRadius: 5,
		width: '100%',
		marginTop: 20,
		shadowOffset: { height: 3, width: 3 },
		shadowOpacity: 0.2,

		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	textPrimary: {
		color: 'white',
		fontSize: 25
	},
	textSecondary: {
		color: 'lightgray',
	},
	eventCount: {
		borderColor: 'gray',
		borderWidth: 1,
		padding: 10,
		width: 45,
		height: 45,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 25,
	}
});