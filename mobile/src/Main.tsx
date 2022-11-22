import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { MainStack } from './navigation'

export default function Main(props: MainProps) {
  return (
    <NavigationContainer>
      <MainStack />
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}

type MainProps = {}
