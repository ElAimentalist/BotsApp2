import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import Chats from './src/screens/chats/chat'
import Footer from './src/components/Footer/Footer';
export default function App() {
  return <><Chats/><Footer /></>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatcontainer:{
    height:2
  }
});
