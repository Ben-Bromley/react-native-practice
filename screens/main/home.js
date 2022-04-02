import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import EventCard from '../../components/event-card';

export default function Home() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.mainContainer}>
                <Text>Tag1</Text>
                <Text>Tag2</Text>
                <View style={styles.eventContainer}>
                    {/* for each event in array, render a card: */}
                    <EventCard />
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
	mainContainer: {
		backgroundColor: '#1a212e',
		padding: 15,

	},
	eventContainer: {
		alignItems: 'center',
		paddingBottom: 20
	},
});