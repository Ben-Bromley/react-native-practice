import { View, Text } from 'react-native'
import React from 'react'
import globalStyles from '../../styles/styles'

export default function SavedEvents() {
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Your Saved Events</Text>
    </View>
  )
}