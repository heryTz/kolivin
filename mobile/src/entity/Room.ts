import { File } from './File'
import { Property } from './Property'

export type Room = {
  _id: string
  title: string
  surface: number
  property: Property
  pictures: File[]
}
