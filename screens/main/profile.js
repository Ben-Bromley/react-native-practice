import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import globalStyles from '../../styles/styles';

export default function EventCard() {

    let user = {
        name: 'John Smith',
    };

    return (
        <View style={globalStyles.screenContainer}>
            {/* <View style={globalStyles.hr}></View> */}
            <View style={globalStyles.profile}>
                <View>
                    <Text style={globalStyles.title}>{user.name}</Text>
                    <Text style={globalStyles.textSecondaryLink}>Edit Your Profile</Text>
                </View>
                <View style={globalStyles.profileImg}></View>
            </View>
            <View style={globalStyles.optionsList}>
                <Text style={globalStyles.option}>My Events</Text>
                <Text style={globalStyles.option}>Friends</Text>
                <Text style={globalStyles.option}>Account</Text>
                <Text style={globalStyles.option}>Settings</Text>
            </View>
            {/* <View style={globalStyles.hr}></View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    // ------- Profile Styles -------- //

});