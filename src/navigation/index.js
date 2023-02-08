import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Chats from "../screens/chats/Chats";
import ChatScreen from "../screens/chats/Chat";
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{
    headerShown: false
  }}>
        
        <Stack.Screen name="Chats" component={Chats} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;