import { PropsWithChildren } from 'react'
import { View } from 'react-native'

export default function EmptyList(props: EmptyListProps) {
  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{props.children}</View>
}

type EmptyListProps = PropsWithChildren<{}>
