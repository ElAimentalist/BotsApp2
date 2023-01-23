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

            backgroundColor:'blue',
            opacity:0.2,
            borderRadius:40,
  
        }
    });