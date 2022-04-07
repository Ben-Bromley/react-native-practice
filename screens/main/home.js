import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity } from 'react-native';

import EventCard from '../../components/event-card';
import EventModal from '../../components/event-modal';
import Tag from '../../components/tag';

import globalStyles from '../../styles/styles';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Home({navigation}) {
	const [events, setEvents] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [selectedEvent, setSelectedEvent] = useState({});

	useEffect(() => {
		if (events.length === 0) {
			fetch("http://192.168.1.158:3000/events/all")
				.then(response => response.json())
				.then(data => setEvents(data.data))
				.catch(err => console.log(err));
		}
	}, []);

	return (
		<>
			<ScrollView style={globalStyles.screenContainer}>
				{/* TAGS / FILTERS */}
				<ScrollView horizontal={true}>
					<Tag tag="Tennis" />
					<Tag tag="Badminton" />
					<Tag tag="Football" />
					<Tag tag="Baseball" />
					<Tag tag="Golf" />
				</ScrollView>
				<View>
					{/* for each event in array, render a card: */}
					{events.map(event =>
						<EventCard event={event} key={event} setShowModal={setShowModal} setSelectedEvent={setSelectedEvent}/>
					)}
					{/* if no events, render message */}
					{events.length === 0 && <Text style={styles.searchEmpty}>No events found</Text>}
				</View>
			</ScrollView>
			<TouchableOpacity style={styles.addButton} onPress={() => { navigation.navigate("Create") }}>
				<Icon style={{ marginLeft: 2.6,}} name="add" size={40} color="lightgray" />
			</TouchableOpacity>
			{/* conditionally render modal element */}
			{showModal && <EventModal event={selectedEvent} setShowModal={setShowModal} />}
		</>
	);
}

const styles = StyleSheet.create({
	// ------------- Main menu Styles ------------- //
	searchEmpty: {
		fontSize: 20,
		color: 'lightgray',
		textAlign: 'center',
		marginTop: 20,
	},
	addButton: {
		backgroundColor: '#183059',
		position: 'absolute',
		padding: 8,
		bottom: 25,
		right: 25,
		borderRadius: 50,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});