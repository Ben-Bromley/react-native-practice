import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import EventCard from '../components/event-card.js';

export default function Home() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.mainContainer}>
                <Text>Tag1</Text>
                <Text>Tag2</Text>
                <View style={styles.eventContainer}>
                    {/* for each event in array, render a card: */}
                    <EventCard />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    // ------------- Main menu Styles -------------//
	container: {
		flex: 1,
		justifyContent: 'space-between',
		minHeight: '100%'
	},
	topContainer: {
		backgroundColor: '#183059',
		width: '100%',
	},
	titleContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		color: 'white',
		fontSize: 25
	},
	mainContainer: {
		backgroundColor: '#466785'
	},
	eventContainer: {
		alignItems: 'center',
		paddingBottom: 20
	},
});