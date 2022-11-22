import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AdItem from '../screens/ad/AdItem'
import AdList from '../screens/ad/AdList'
import AdSave from '../screens/ad/AdSave'
import TenantList from '../screens/tenant/TenantList'
import { route } from './NavigationConfig'
import { MainStackParamList } from './NavigationType'

const Stack = createNativeStackNavigator<MainStackParamList>()

export function MainStack(props: MainStackProps) {
  return (
    <Stack.Navigator initialRouteName={route.AD_LIST} screenOptions={{ animation: 'slide_from_right' }}>
      <Stack.Screen name={route.AD_LIST} component={AdList} options={{ title: 'Ads' }} />
      <Stack.Screen name={route.AD_SAVE} component={AdSave} options={{ title: 'Ads save' }} />
      <Stack.Screen name={route.AD_ITEM} component={AdItem} options={{ title: 'A' }} />
      <Stack.Screen name={route.TENANT_LIST} component={TenantList} />
    </Stack.Navigator>
  )
}

type MainStackProps = {}
