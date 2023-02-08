import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import Chats from './src/screens/chats/Chats';
import Footer from './src/components/Footer/Footer';
import chat from './src/screens/chats/Chat';
import Navigator from './src/navigation'
export default function App() {
  // return <><Chats/><Footer /></>
  return <><Navigator></Navigator></>
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
