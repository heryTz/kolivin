import { TimeStamp } from '../utils/types'
import { Property } from './Property'
import { Renting } from './Renting'

export type Ad = {
  _id: string
  title: string
  description: string
  rentalUnit: number
  property?: Property | null
  rentings: Renting[]
  createdAt: TimeStamp
}
