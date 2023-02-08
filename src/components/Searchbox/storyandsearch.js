import React from 'react';
import { View,Image, Text,TextInput } from 'react-native';
import { styles } from './search.style';
import { images } from '../../images';
import { colors } from '../../theme/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SliderBase } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
const data=[
  {id:'1',image:images.user_1,name:'Akshit'},
  {id:'2',image:images.user_1,name:'Akshit'},
  {id:'3',image:images.user_1,name:'Akshit'},
  {id:'4',image:images.user_1,name:'Akshit'},
  {id:'5',image:images.user_1,name:'Akshit'}
]
const StoryandSearch=()=>{

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
return (
  <View >


    <View style={styles.story}>
        <SwipeListView data={data} renderItem={renderItem} style={styles.story} horizontal={true}  showsHorizontalScrollIndicator={false}/>
        <View style={styles.contentContainer}>
        <Ionicons name='search' size={20} color='white'></Ionicons>
        <TextInput placeholderTextColor={colors.white} style={styles.searchbox} placeholder='Search'></TextInput></View>
    </View>
    <View>

    </View>
    </View>
);
};
export default StoryandSearch;
