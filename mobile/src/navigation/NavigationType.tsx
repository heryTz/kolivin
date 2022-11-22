import { route } from './NavigationConfig'

export type MainStackParamList = {
  [route.AD_LIST]: undefined
  [route.TENANT_LIST]: undefined
  [route.AD_SAVE]: {
    id?: string
  }
  [route.AD_ITEM]: {
    id: string
  }
}
