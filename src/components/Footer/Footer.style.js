import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles= StyleSheet.create({
        container:{
            display:'flex',
            flex: 1,
        },
        footerWrapper:{
            position:'absolute',
            bottom: 10,
            width:'95%',
            marginLeft:'2.5%',
            height:'10%',
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            paddingLeft:30,
            backgroundColor:colors.zblack,
            opacity:1,
            borderRadius:30,
  
        },
        footimage:{
            height:42,
            width:42,
            marginLeft:25

        },
        footimage1:{
            height:42,
            width:42,}
    });