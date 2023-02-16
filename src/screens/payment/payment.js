import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import { images } from '../../images';
import { styles } from './payment.style';
import { SwipeListView } from 'react-native-swipe-list-view';

const data = [
    { id: '1', image: images.payicon, name: 'Pay' },
    { id: '2', image: images.bankicon, name: 'Bank Transfer' },
    { id: '3', image: images.addmoneyicon, name: 'Add' },
]
const feature=[
    { id: '1', image: images.recharge, name: 'Recharge' },
    { id: '2', image: images.flights, name: 'Flights' },
    { id: '3', image: images.movie, name: 'Movies & Events' },
]
const feature2=[
    { id: '1', image: images.shopping, name: 'Shopping' },
    { id: '2', image: images.metro, name: 'Metro' },
    { id: '3', image: images.more, name: 'More' },
]
const Paymentscreen = () => {
    const renderItem = ({ item }) => {
        return (
            

                <View style={styles.userItemStatus}>

                    <Image source={item.image} style={styles.storyimages} />
                    <View style={styles.userDetailsSectionsContainer}>
                        <View>
                            <Text style={styles.label1}>{item.name}</Text>
                        </View>
                        <Image style={styles.indicate} source={item.indicate} />
                    </View>
                </View>
        );
    };
    const renderfeatures = ({ item }) => {
        return (
                <View style={styles.features}>
                    <Image source={item.image} style={styles.featicon} />
                    <View style={styles.userDetailsSectionsContainer}>
                        <View>
                            <Text style={styles.label2}>{item.name}</Text>
                        </View>   
                    </View>
                </View>
        );
    };
    return (
        <SafeAreaView>
        <View >

            <Text style={styles.textheading}>
                Hi Wadani
            </Text>
            <View style={styles.story}>
                <SwipeListView data={data} renderItem={renderItem} style={styles.story} horizontal={true} showsHorizontalScrollIndicator={false} />

            </View>
            <View style={styles.feaur}>
            <SwipeListView data={feature} renderItem={renderfeatures}  horizontal={true} showsHorizontalScrollIndicator={false} />
           
            

            </View>
            <View style={styles.feaur}>
            <SwipeListView data={feature2} renderItem={renderfeatures}  horizontal={true} showsHorizontalScrollIndicator={false} /></View>
        </View></SafeAreaView>
    );
}

export default Paymentscreen
