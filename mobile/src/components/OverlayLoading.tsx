import { ActivityIndicator, StyleSheet, View } from 'react-native'

export default function OverlayLoading(props: OverlayLoadingProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  )
}

type OverlayLoadingProps = {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 10,
  },
})
