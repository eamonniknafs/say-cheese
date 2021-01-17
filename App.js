import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cam from "./Cam";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './HomeScreen'

const Stack = createStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Cam styles={styles}/>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          />
        <Stack.Screen name="Cam">
          {(props) => <Cam  {...props} styles={styles} />}
          {/* {(props) => <HomeScreen  {...props} preferences={preferences} styles={styles} />} */}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

let preferences = {
  countDownSeconds: countDownSeconds

}

// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name = "Home"
//           component = {HomeScreen}
//           options = {{title: 'Welcome'}}
//           />
//         <Stack.Screen name = "Camera" component={Cam} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
