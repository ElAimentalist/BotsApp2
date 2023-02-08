import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './Footer.style';
import { images } from '../../images';
const Footer=()=>{

    return (
      <View style={styles.footerWrapper}>
        <Image style={styles.footimage1} source={images.footmenu}></Image>
        <Image style={styles.footimage} source={images.footcommunity}></Image>
        <Image style={styles.footimage} source={images.footpayment}></Image>
        <Image style={styles.footimage} source={images.footchat}></Image>
        <Image style={styles.footimage} source={images.footsettings}></Image>

      </View>
    );
  }


export default Footer;
