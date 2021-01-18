import React from 'react';
import { StyleSheet } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import Cam from "./Cam";


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
          name="Preferences">
          {(props) => <HomeScreen  {...props} preferences={preferences} styles={styles} />}
        </Stack.Screen>
        <Stack.Screen name="Camera">
          {(props) => <Cam  {...props} preferences={preferences} styles={styles} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

let preferences = {
  number: 1,
  photos: 1,
  smile: false,
  blink: false,
  countDownSeconds: 0 //has to do with the count down
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: vw(8),
  },
  switchContainer: {
    margin: vh(3),
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  numContainer: {
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: vh(6)
  },
  camera: {
    flex: 1,
  },
  switch: {
    marginLeft: vw(6),
  },
  buttonContainer: {
    flex: 1,
    marginTop: vh(12),
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'black',
    borderRadius: 50,
    alignItems: 'center',
    maxHeight: vh(7),
    width: vw(60),
  },
  button: {
    marginTop: vh(2.2),
    marginBottom: 'auto',
    flex: 1,
    fontSize: 18,
    color: 'white'
  },
  text: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  big: {
    fontSize: 35,
    color: 'black',
    fontWeight: '900',
    textAlign: 'center',
  },
  number: {
    flex: 1,
    fontSize: 20,
  },
  icons: {
    margin: 10,

  }
});
