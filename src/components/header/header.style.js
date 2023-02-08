import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors } from "../../theme/colors";
export const styles=StyleSheet.create({
    textheading:{
        fontSize: 50,
        fontWeight:'bold'
    },
    container:{
        display:'flex',
        flexDirection:'row'
    },
    container1:{
        display:'flex',
        flexDirection:'row',

        paddingLeft:20
    },
    editheading:{
        color:'blue'
    },

    icons:{
        display:'flex',

        flexDirection:'row',
        marginLeft:250
        },
    icon:{
        marginLeft:15
    }

})