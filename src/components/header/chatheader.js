import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './header.style';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native';


const ChatHeader=()=> {
    return (
        <>
        <SafeAreaView>
         <View style={styles.container1}>
          <Text style={styles.editheading}>Edit</Text>
        <View style={styles.icons}>
        <Ionicons style={styles.icon} name='camera' size={20} color='black'></Ionicons>
        <Ionicons style={styles.icon}name='menu' size={20} color='black'></Ionicons>
        </View></View> 
      <View style={styles.container}>
        <Text style={styles.textheading}> Chats </Text>
      </View></SafeAreaView>
      </>
    );
  }
export default ChatHeader
