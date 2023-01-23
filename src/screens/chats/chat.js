import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import Search from '../../components/Searchbox/search';
import {styles} from './chat.style'
import UserListing from './UserListing/UserListing';
const Chats=()=>{
    return(
        <><View>
            <SafeAreaView>
                <Text>Header</Text>
            </SafeAreaView>
        </View>
            <View>
                <SafeAreaView>
                    <Text>status</Text>
                </SafeAreaView>
            </View>
        <View>
                <SafeAreaView>
                    <Search />
                </SafeAreaView>
            </View>
            <View>
                <UserListing></UserListing>
                <StatusBar style="auto" />
            </View></>
    )
}

 export default Chats
