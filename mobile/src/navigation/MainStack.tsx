import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { route } from './NavigationConfig'
import { MainStackParamList } from './NavigationType'
import AdItem from 'src/screens/ad/AdItem'
import AdList from 'src/screens/ad/AdList'
import AdSave from 'src/screens/ad/AdSave'
import TenantList from 'src/screens/tenant/TenantList'

const Stack = createNativeStackNavigator<MainStackParamList>()

export function MainStack(props: MainStackProps) {
  return (
    <Stack.Navigator initialRouteName={route.AD_LIST} screenOptions={{ animation: 'slide_from_right' }}>
      <Stack.Screen name={route.AD_LIST} component={AdList} options={{ title: 'Ads' }} />
      <Stack.Screen name={route.AD_SAVE} component={AdSave} options={{ title: 'Ads save' }} />
      <Stack.Screen name={route.AD_ITEM} component={AdItem} options={{ title: 'Ad item' }} />
      <Stack.Screen name={route.TENANT_LIST} component={TenantList} />
    </Stack.Navigator>
  )
}

type MainStackProps = {}
