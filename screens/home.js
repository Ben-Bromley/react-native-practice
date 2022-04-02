import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import EventCard from '../components/event-card.js';

export default function Home() {
    return (
        <View style={styles.container}>
            {/* this padds past the notch */}
            <View style={styles.topContainer}>
                <View style={styles.titleContainer}>
                    {/* <Icon name="rocket" size={30} color="#900" /> */}
                    <Text style={styles.title}>Sport Share</Text>
                </View>
            </View>
            <ScrollView style={styles.mainContainer}>
                <Text>Sample</Text>
                <Text>Sample</Text>
                <View style={styles.eventContainer}>
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </View>
            </ScrollView>
            <View style={styles.nav}>
                <Text>Sample</Text>
                <Text>Sample</Text>
                <Text>Sample</Text>
            </View>
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
		height: StatusBar.currentHeight + 70
	},
	titleContainer: {
		marginTop: StatusBar.currentHeight,
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
	nav: {
		backgroundColor: '#183059',
		height: 80,
		// borderTopColor: 'black',
		// borderTopWidth: 2,
		// shadowColor: 'pink',
		shadowOffset: { height: 300, width: 300 },
		shadowOpacity: 0.2,
		shadowRadius: 0
	},
});