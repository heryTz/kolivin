import { Button, Text, View } from 'react-native'
import { Ad } from '../../../entity/Ad'
import { clampText } from '../../../utils/formater'

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
