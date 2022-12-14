import { clampText } from 'src/utils/formater'
import { Ad } from 'src/__generated__/graphql'
import { Button, Text, View } from 'react-native'

export default function AdListItem(props: AdListItemProps) {
  return (
    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ flex: 1, padding: 8 }}>{clampText(props.title, 112)}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Button title="Edit" />
        <Button title="Delete" color={'#C7372F'} />
      </View>
    </View>
  )
}

type AdListItemProps = {
  id: Ad['_id']
  title: Ad['title']
}
