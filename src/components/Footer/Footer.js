import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './Footer.style';
import { images } from '../../images';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Footer=()=>{
  const navigation = useNavigation();
    return (
      <View style={styles.footerWrapper}>
        <Image style={styles.footimage1} source={images.footmenu}></Image>
        <Image style={styles.footimage} source={images.footcommunity}></Image>
        <TouchableOpacity activeOpacity = { .5 } onPress={()=>navigation.navigate("Payment")}>
          <Image style={styles.footimage} source={images.footpayment}></Image>
        </TouchableOpacity>
        <Image style={styles.footimage} source={images.footchat}></Image>
        <Image style={styles.footimage} source={images.footsettings}></Image>

      </View>
    );
  }


export default Footer;
