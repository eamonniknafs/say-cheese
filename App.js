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
  number: 0,
  smile: false,
  blink: false,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  switchContainer: {
    margin: '10%',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent: 'center'
  },
  camera: {
    flex: 1,
  },
  switch: {
    marginLeft: 30,
  },
  buttonContainer: {
    flex: 1,
    marginTop: '10%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'black',
    borderRadius: 50,
    alignItems: 'center',
    maxHeight: '8%',
    width: '60%',
  },
  button: {
    marginTop: '8%',
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
  textField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: '20%',
    marginRight: '20%',
    borderRadius: 8,
    margin: 30
  },
  icons: {
    flex: 1,
    margin: 10,
    alignContent: 'flex-end'
  }
});
