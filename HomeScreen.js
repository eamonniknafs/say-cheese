import * as React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

export default function HomeScreen(props) {
  return (
      <View style={props.styles.container}>
          <TouchableOpacity
              style={props.styles.buttonContainer}
              onPress={() => props.navigation.navigate('Camera')}
          >
              <Text style={props.styles.button}>Say Cheese!</Text>
          </TouchableOpacity>

      </View>
  );
}


// ... other code from the previous section