import { Text, View } from 'react-native'

export default function ErrorAlert(props: ErrorAlertProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', paddingTop: 16 }}>
      <Text style={{ color: '#C7372F' }}>{props.message}</Text>
    </View>
  )
}

type ErrorAlertProps = {
  message: string
}
