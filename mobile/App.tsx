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
            merge(existing, incoming, options) {
              if (existing === undefined) return incoming
              const data = existing.data.slice()
              for (let i = 0; i < incoming.data.length; ++i) {
                data[options.args?.offset + i] = incoming.data[i]
              }
              return { ...existing, data }
            },
            // Je ne sais pas pourquoi mais lorsque j'utilise cette methode, si je définis le "keyExtractor" de "FlatList",
            // React considère toujours qu'il y a des duplications des enfants: "Encountered two children with the same key"
            //
            // merge(existing, incoming) {
            //   if (existing === undefined) return incoming
            //   return { ...existing, data: [...existing.data, ...incoming.data] }
            // },
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
