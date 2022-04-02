import React from 'react';
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';

export default function EventCard() {
	return (
		<View style={styles.container}>
            <Text style={styles.text}>Hello User</Text>
		</View>
	);
}

const styles = StyleSheet.create({
    // ------- Profile Styles -------- //
	container: {
        backgroundColor: "#1a212e",
        minHeight: '100%',
    },
    text: {
        color: 'white',
        fontSize: 15,
    }
});