import * as React from 'react';
import { Button, View, Text } from 'react-native';
import Cam from "./Cam";

export default function HomeScreen({navigation}) {
  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Home Screen</Text>
      <Button
        title="Go to Camera"
        onPress={() => navigation.navigate('Cam')}
      />
    // </View>
  );
}


// ... other code from the previous section