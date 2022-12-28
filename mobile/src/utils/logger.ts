import reactotron from 'reactotron-react-native'

export function log(...args: any[]) {
  reactotron.log && reactotron.log(args)
}
