import * as React from 'react';
import {TouchableOpacity, View, Text, TextInput, Switch} from 'react-native';
import {useState} from "react";
import Icon from "react-native-vector-icons/Ionicons";


export default function HomeScreen(props) {
    const [number, setNumber] = useState(props.preferences.number);
    const [photos, setPhotos] = useState(props.preferences.photos);
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

    function addPerson() {
        setNumber(number + 1)

    }

    function removePerson() {
        if (number > 1) {
            setNumber(number - 1)
        }
    }

    function addPhoto() {
        setPhotos(photos + 1)
    }

    function removePhoto() {
        if (photos > 1) {
            setPhotos(photos - 1)
        }
    }

    function sayCheese(){
        props.preferences.number = number;
        props.preferences.photos = photos;
        props.navigation.navigate('Camera');
    }

    return (
        <View style={props.styles.container}>
            <Text
                style={props.styles.text}>
                How many people?
            </Text>
            <View style={props.styles.numContainer}>
                <Icon
                    name="remove-circle-outline"
                    size={50}
                    style={props.styles.icons}
                    onPress={removePerson}/>
                <Text style={props.styles.big}>{number}</Text>
                <Icon
                    name="add-circle-outline"
                    size={50}
                    style={props.styles.icons}
                    onPress={addPerson}/>
            </View>
            <Text
                style={props.styles.text}>
                How many photos?
            </Text>
            <View style={props.styles.numContainer}>
                <Icon
                    name="remove-circle-outline"
                    size={50}
                    style={props.styles.icons}
                    onPress={removePhoto}/>
                <Text style={props.styles.big}>{photos}</Text>
                <Icon
                    name="add-circle-outline"
                    size={50}
                    style={props.styles.icons}
                    onPress={addPhoto}/>
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
                onPress={() => sayCheese()}
            >
                <Text style={props.styles.button}>Say Cheese!</Text>
            </TouchableOpacity>
        </View>
    );
}


// ... other code from the previous section