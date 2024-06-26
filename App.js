import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./screens/Home";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack=createNativeStackNavigator();


export default function App() {
  return (

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={"home"} component={Home}/>

        </Stack.Navigator>
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
