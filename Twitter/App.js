import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
        initialRouteName="notification"
        screenOptions={{
          tabBarStyle: {
            height: 65,
            backgroundColor: "rgb(0,0,0)",
            borderTopWidth: 1,
            borderTopColor:""
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: "white",
          headerStyle:{
            backgroundColor:"black",
            borderBottomColor:""
          }
        }}
      >
        
      </Tab.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
