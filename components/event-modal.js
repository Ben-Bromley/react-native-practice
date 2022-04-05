import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import moment from 'moment';
import globalStyles from "../styles/styles";

export default function EventModal({event, setShowModal}) {
  
  let displayDate = moment(event.start).format("MMMM Do YYYY, h:mma");

  return (
    <View style={styles.modalContainer}>
      <TouchableOpacity style={styles.closeButton}
        onPress={() => setShowModal(false)}>
        <Icon name="close" size={30} color="white" />
      </TouchableOpacity>
      <Text style={styles.textSecondary}>{displayDate}</Text>
      <Text style={styles.modalTitle}>{event.name}</Text>
      <Text style={styles.textSecondary}>{event.current_capacity}/{event.total_capacity} People going</Text>
      <TouchableOpacity style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>Book in</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'rgba(14, 23, 38, 0.98)',
    position: 'absolute',
    bottom: 0,
    paddingTop: 40,
    paddingHorizontal: 20,
    width: '100%',
    minHeight: 450,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  closeButton: {
    backgroundColor: '#183059',
    borderRadius: 25,
    padding: 4,
    zIndex: 1,
    position: 'absolute',
    top: 20,
    right: 20,
  },
  modalTitle: {
    color: 'white',
    fontSize: 30,
    maxWidth: '80%',
  },
	textSecondary: {
		color: 'lightgray',
	},
});
