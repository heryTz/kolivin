import { Ad } from './Ad'
import { Tenant } from './Tenant'

export type Renting = {
  _id: string
  status: 'pending' | 'accepted' | 'rejected'
  ad: Ad
  tenant: Tenant
}
