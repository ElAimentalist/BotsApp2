import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors } from "../../theme/colors";
export const styles=StyleSheet.create({
   container:{
    display:'flex',
    backgroundColor:colors.white
   },

   searchicon:{
    width:16,
    height:16,
    marginRight:15
   },
   storyimages:{
      height:70,
      width:70,
      marginTop:15
   },
   featicon:{
    height:60,
    width:60
 },
 label2:{
    paddingTop:8
 },
 feaur:{
    alignItems:'center',
    alignContent:'center'

 },
 features:{
    paddingRight:25,
    paddingLeft:25,
    alignContent:'center',
    alignItems:"center",
    marginTop:10
 },
   textheading:{
    fontSize: 30,
    fontWeight:'bold',
    paddingLeft:15
},
   searchbox:{
      marginLeft:10
   },
   story:{
      backgroundColor:'green',
      height:160,
      paddingtop:10,
      margin:10,
      opacity:1,
      borderRadius:30,
      alignContent:'center',
      

   },

   label1:{
      color:colors.white,
      paddingTop:10,


   },
   userItemStatus:{
      paddingRight:50,
      alignItems:'center'

   }
}
)