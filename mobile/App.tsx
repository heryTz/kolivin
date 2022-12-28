import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { SafeAreaView, StyleSheet } from 'react-native'
import Main from './src/Main'
import { API } from '@env'

if (__DEV__) {
  require('./ReactotronConfig')
}

const client = new ApolloClient({
  uri: API,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          ads: {
            keyArgs: false,
            merge(existing, incoming) {
              if (existing === undefined) return incoming
              return { ...existing, data: [...existing.data, ...incoming.data] }
            },
          },
        },
      },
    },
  }),
})

export default function App() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={styles.fill}>
        <Main />
      </SafeAreaView>
    </ApolloProvider>
  )
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
})
