import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable } from 'react-native';
import { SafeAreaView } from 'react-native';
import StoryandSearch from '../../components/Searchbox/storyandsearch';
import {styles} from './chat.style'
import UserListing from './UserListing/UserListing';
import ChatHeader from '../../components/header/chatheader';
import { useNavigation } from '@react-navigation/native';

import Footer from '../../components/Footer/Footer';

const Chats=()=>{
    const navigation = useNavigation();
    return(
        <><View>
            <SafeAreaView>
                <ChatHeader />

            </SafeAreaView>
        </View>
            <View>
                <SafeAreaView>

                </SafeAreaView>
            </View>
        <View>
                <SafeAreaView>
                    <StoryandSearch />
                </SafeAreaView>
            </View>

    
            <View>
            <Pressable
      onPress={() => navigation.navigate("Chat")}>
                <UserListing></UserListing>
                <StatusBar style="auto" /></Pressable>
            </View>
            <Footer />
            </>
    )
}

 export default Chats
