import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function Separator() {
  return <View style={styles.container} />
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.3,
    borderBottomColor: '#999',
  },
})
