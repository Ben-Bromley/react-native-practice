import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function tag({tag = "Default Tag"}) {
  return (
    <View style={styles.tagContainer}>
      <Text style={styles.tagText}>{tag}</Text>
    </View>
  )

}

const styles = StyleSheet.create({
    // ------- Tag Styles -------- //
    tagContainer: {
        backgroundColor: '#183059',
        paddingHorizontal: 18,
        paddingVertical: 8,
        borderRadius: 50,
        margin: 5,
    },
    tagText: {
        color: 'white',
        fontSize: 14,
    }
});