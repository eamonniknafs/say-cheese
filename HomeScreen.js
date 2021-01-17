import * as React from 'react';
import {TouchableOpacity, View, Text, TextInput, Switch} from 'react-native';
import {useState} from "react";


export default function HomeScreen(props) {
    const [isSmileEnabled, setIsSmileEnabled] = useState(false);
    const [isBlinkEnabled, setIsBlinkEnabled] = useState(false);

    function toggleSmile() {
        setIsSmileEnabled(!isSmileEnabled);
        props.preferences.smile = !props.preferences.smile;
    }

    function toggleBlink() {
        setIsBlinkEnabled(!isBlinkEnabled);
        props.preferences.blink = !props.preferences.blink;
    }

    return (
        <View style={props.styles.container}>
            <Text
                style={props.styles.text}>
                How many?
            </Text>
            <TextInput
                style={props.styles.textField}
                keyboardType='numeric'
                value={props.preferences.number}
            />
            <View style={props.styles.switchContainer}>
                <Text
                    style={props.styles.text}>
                    Track Smiles
                </Text>
                <Switch
                    style={props.styles.switch}
                    trackColor={{false: "#767577", true: "#81b0ff"}}
                    thumbColor={isSmileEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSmile}
                    value={isSmileEnabled}
                />
            </View>
            <View style={props.styles.switchContainer}>
                <Text
                    style={props.styles.text}>
                    Track Blinks
                </Text>
                <Switch
                    style={props.styles.switch}

                    trackColor={{false: "#767577", true: "#81b0ff"}}
                    thumbColor={isBlinkEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleBlink}
                    value={isBlinkEnabled}
                />
            </View>
            <TouchableOpacity
                style={props.styles.buttonContainer}
                onPress={() => props.navigation.navigate('Camera')}
            >
                <Text style={props.styles.button}>Say Cheese!</Text>
            </TouchableOpacity>
            <Text>{props.preferences.smile.toString()}</Text>
            <Text>{props.preferences.blink.toString()}</Text>

        </View>
    );
}


// ... other code from the previous section