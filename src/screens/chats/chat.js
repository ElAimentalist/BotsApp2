import { ImageBackground, StyleSheet, FlatList } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import Message from "../../components/Message";
import messages from "../../../assets/data/messages.json";
import InputBox from "../../components/Inputbox";
const ChatScreen = () => {


return (
  <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.bg}
  >
    <ImageBackground>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
				style={{ padding: 10 }}
				inverted
      />

		</ImageBackground>
<InputBox />
  </KeyboardAvoidingView>
)

  
};
const styles = StyleSheet.create({
  bg: {
    flex: 1,
    marginBottom:80
  },
});
export default ChatScreen