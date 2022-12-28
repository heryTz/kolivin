import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { SafeAreaView, StyleSheet } from 'react-native'
import Main from './src/Main'
import { API } from '@env'

if (__DEV__) {
  require('./ReactotronConfig')
}

const client = new ApolloClient({
  uri: API,
  cache: new InMemoryCache(),
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
