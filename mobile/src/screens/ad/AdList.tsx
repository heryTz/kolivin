import { useQuery } from '@apollo/client'
import { useRef } from 'react'
import { ActivityIndicator, Button, FlatList, Text, View } from 'react-native'
import EmptyList from '../../components/EmptyList'
import ErrorAlert from '../../components/ErrorAlert'
import OverlayLoading from '../../components/OverlayLoading'
import Separator from '../../components/Separator'
import { GET_ADS } from './Ad.query'
import AdListItem from './components/AdListItem'

export default function AdList(props: AdListProps) {
  // Parfois, "onEndReached" n'est pas exécuté direcetement si on scroll trop.
  // Met le "limit" à 10 pour le voir
  const { data, loading, error, fetchMore } = useQuery(GET_ADS, {
    notifyOnNetworkStatusChange: true,
    variables: {
      sort: 'title:DESC',
      offset: 0,
      limit: 20,
    },
  })
  // One call per scroll
  // https://stackoverflow.com/questions/53408470/flatlist-onendreached-being-called-multiple-times
  const callOnScrollEnd = useRef(true)

  const onEndReached = () => {
    if (!callOnScrollEnd.current) return
    callOnScrollEnd.current = false
    fetchMore({
      variables: {
        offset: data?.ads.data.length ?? 0,
      },
    })
  }

  const onMomentumScrollBegin = () => {
    callOnScrollEnd.current = true
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 8 }}>
        <Button title="Ajouter" />
      </View>
      <Separator />
      {loading && !data?.ads.data && <OverlayLoading />}
      {error && <ErrorAlert message={error.message} />}
      {data && (
        <FlatList
          data={data.ads.data}
          renderItem={({ item }) => <AdListItem title={item.title} id={item._id} />}
          keyExtractor={item => item._id}
          ItemSeparatorComponent={itemSeparatorComponent}
          ListEmptyComponent={
            <EmptyList>
              <Text>No ads for now.</Text>
            </EmptyList>
          }
          ListFooterComponent={loading ? <ActivityIndicator /> : null}
          onEndReachedThreshold={0.5}
          onEndReached={onEndReached}
          onMomentumScrollBegin={onMomentumScrollBegin}
        />
      )}
    </View>
  )
}

type AdListProps = {}

const itemSeparatorComponent = () => <Separator />
