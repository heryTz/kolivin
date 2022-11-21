import { File } from './File'
import { Room } from './Room'

export type Property = {
  _id: string
  title: string
  address: string
  surface: number
  rooms: Room[]
  pictures: File[]
}
