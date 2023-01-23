import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const styles=StyleSheet.create(
    {
        userItemContainer:{
            flexDirection:'row',
            padding:15,
            display:'flex',         
            alignItems:'center'         
        },
        userIcon:{
            width:60,
            height:60,
            flex:1
        },
        userDetailsSectionsContainer:{
            marginLeft:15,
            flexDirection:'row',
            flex:5,
            justifyContent:'space-between'
        },
        indicate:{
            height:13,
            width:13,
            
        },
        label1:{
            color:colors.zblack,
            fontSize:17,
            fontWeight:'500',
            lineHeight: 22
        },
        chatitemcontainer:{
            height:'80%',
        },
        label2:{
            color:colors.zblack,
            opacity:0.5,
            fontWeight: '400'
        }

    }
)