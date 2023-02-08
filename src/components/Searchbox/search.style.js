import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors } from "../../theme/colors";
export const styles=StyleSheet.create({
   container:{
    display:'flex',
    backgroundColor:colors.white
   },
   
   contentContainer:{
    flexDirection:'row',
    backgroundColor:colors.grey02,

    padding:15,
    marginHorizontal:15,
    marginBottom:20,
    borderRadius:10
   },
   searchicon:{
    width:16,
    height:16,
    marginRight:15
   },
   storyimages:{
      height:70,
      width:70
   },
   searchbox:{
      marginLeft:10
   },
   story:{

      backgroundColor:colors.zblack,
      paddingtop:10,

      margin:10,

      backgroundColor:colors.zblack,
      opacity:1,
      borderRadius:30,

   },

   label1:{
      color:colors.white,
      paddingTop:10,
      paddingLeft:15
   },
   userItemStatus:{
      paddingRight:30

   }
}
)