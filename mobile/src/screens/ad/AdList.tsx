import { useQuery } from '@apollo/client'
import { ActivityIndicator, Button, FlatList, Text, View } from 'react-native'
import EmptyList from '../../components/EmptyList'
import ErrorAlert from '../../components/ErrorAlert'
import OverlayLoading from '../../components/OverlayLoading'
import Separator from '../../components/Separator'
import { GET_ADS } from './Ad.query'
import AdListItem from './components/AdListItem'

export default function AdList(props: AdListProps) {
  const { data, loading, error } = useQuery(GET_ADS, {
    variables: {
      sort: 'createdAt:DESC',
      offset: 0,
      limit: 12,
    },
  })

  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 8 }}>
        <Button title="Ajouter" />
      </View>
      <Separator />
      {loading && <OverlayLoading />}
      {error && <ErrorAlert message={error.message} />}
      {data && (
        <FlatList
          data={data.ads.data}
          renderItem={({ item }) => <AdListItem key={item!._id} title={item!.title!} id={item!._id!} />}
          keyExtractor={item => item?._id!}
          ItemSeparatorComponent={itemSeparatorComponent}
          ListEmptyComponent={
            <EmptyList>
              <Text>No ads for now.</Text>
            </EmptyList>
          }
          ListFooterComponent={loading ? <ActivityIndicator /> : null}
        />
      )}
    </View>
  )
}

type AdListProps = {}

const itemSeparatorComponent = () => <Separator />
