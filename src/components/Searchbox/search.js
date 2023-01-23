import React, { Component } from 'react';
import { View,Image, Text,TextInput } from 'react-native';
import { styles } from './search.style';
import { images } from '../../images';
import { colors } from '../../theme/colors';
const Search=()=>{

    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
        <Image style={styles.searchicon}source={images.search}></Image>
        <TextInput placeholder='Search' placeholderTextColor={colors.grey02}/>
        </View>
      </View>
    );
  }


export default Search;
