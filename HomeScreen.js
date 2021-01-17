import * as React from 'react';
import {TouchableOpacity, View, Text, TextInput, Switch} from 'react-native';
import {useState} from "react";
import {Camera} from "expo-camera";
import Icon from "react-native-vector-icons/Ionicons";


export default function HomeScreen(props) {
    const [number, setNumber] = useState(props.preferences.number);
    const [isSmileEnabled, setIsSmileEnabled] = useState(props.preferences.smile);
    const [isBlinkEnabled, setIsBlinkEnabled] = useState(props.preferences.blink);

    function toggleSmile() {
        setIsSmileEnabled(!isSmileEnabled);
        props.preferences.smile = !props.preferences.smile;
    }

    function toggleBlink() {
        setIsBlinkEnabled(!isBlinkEnabled);
        props.preferences.blink = !props.preferences.blink;
    }
    function addPerson(){
        setNumber(number+1)
        props.preferences.number = number;
    }
    function removePerson(){
        setNumber(number-1)
        props.preferences.number = number;
    }

    return (
        <View style={props.styles.container}>
            <Text
                style={props.styles.text}>
                How many?
            </Text>
            <View style={props.styles.switchContainer}>
                <Icon
                    name="remove-circle-outline"
                    size={50}
                    style={props.styles.icons}
                    onPress={removePerson} />
                <Text style={props.styles.number}>{props.preferences.number}</Text>
                <Icon
                    name="add-circle-outline"
                    size={50}
                    style={props.styles.icons}
                    onPress={addPerson} />
            </View>
            <View style={props.styles.switchContainer}>
                <Text
                    style={props.styles.text}>
                    Track Smiles
                </Text>
                <Switch
                    style={props.styles.switch}
                    trackColor={{false: "#767577", true: "#81b0ff"}}
                    thumbColor={isSmileEnabled ? "#000000" : "#f4f3f4"}
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
                    thumbColor={isBlinkEnabled ? "#000000" : "#f4f3f4"}
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
            <Text>{props.preferences.number.toString()}</Text>
            <Text>{props.preferences.smile.toString()}</Text>
            <Text>{props.preferences.blink.toString()}</Text>

        </View>
    );
}


// ... other code from the previous section