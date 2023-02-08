import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View,Pressable } from 'react-native';
import { SafeAreaView } from 'react-native';
import { styles } from './UserListing.style';
import { SwipeListView } from 'react-native-swipe-list-view';
import { images } from '../../../images';
import { useNavigation } from '@react-navigation/native';
const Data = [
    { id: 1, name: 'Akshit', image: images.user_1, lastMessage: 'You: Hi, How are you ? - 9:40 AM ',indicate:images.online },
    { id: 2, name: 'Wadani', image: images.user_1, lastMessage: 'You: Thats Great ! - 9:40 AM ',indicate:images.online },
    { id: 3, name: 'Francis', image: images.user_1, lastMessage: 'You: Cheers ! - 9:40 AM ',indicate:images.offline },
    { id: 4, name: 'Akshit', image: images.user_1, lastMessage: 'You: Hi, How are you ? - 9:40 AM ',indicate:images.online },
    { id: 5, name: 'Wadani', image: images.user_1, lastMessage: 'You: Thats Great ! - 9:40 AM ',indicate:images.offline },
    { id: 6, name: 'Francis', image: images.user_1, lastMessage: 'You: Cheers ! - 9:40 AM ',indicate:images.offline },
    { id: 7, name: 'Francis', image: images.user_1, lastMessage: 'You: Cheers ! - 9:40 AM ',indicate:images.offline },
    { id: 8, name: 'Akshit', image: images.user_1, lastMessage: 'You: Hi, How are you ? - 9:40 AM ',indicate:images.online },
    { id: 9, name: 'Wadani', image: images.user_1, lastMessage: 'You: Thats Great ! - 9:40 AM ',indicate:images.offline },
    { id: 10, name: 'Francis', image: images.user_1, lastMessage: 'You: Cheers ! - 9:40 AM ',indicate:images.offline },
]
const UserListing = () => {
    const navigation = useNavigation();
    const renderItem = ({ item }) => {
        return (
                <Pressable
                onPress={() => navigation.navigate("Chat")}>
            <View style={styles.userItemContainer}>
                <Image source={item.image} style={styles.userIcon} />
                <View style={styles.userDetailsSectionsContainer}>
                    <View>
                        <Text style={styles.label1}>{item.name}</Text>
                        <Text style={styles.label2}>{item.lastMessage}</Text>
                    </View>
                    <Image style={styles.indicate} source={item.indicate} />
                </View>
            </View>
            </Pressable>
        );
    };
    return (
        <View style={styles.chatitemcontainer}>
            <SwipeListView data={Data} renderItem={renderItem} />
        </View>
    );
};

export default UserListing 