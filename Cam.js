import React, {useState, useEffect} from 'react';
import {Alert, Text, View} from 'react-native';
import * as FaceDetector from 'expo-face-detector';
import Icon from 'react-native-vector-icons/Ionicons';
import * as  MediaLibrary  from 'expo-media-library'
import {Camera} from 'expo-camera';
import { Audio } from 'expo-av';

export default function Cam(props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [cameraRef,setCameraRef] = useState(null);
    //    const [sound, setSound] = React.useState();

//    async function playSound() {
//     console.log('Loading Sound');
//     const { sound } = await Audio.Sound.createAsync(
//        require('./assets/Cheese.m4a')
//     );
//     setSound(sound);

//     console.log('Playing Sound');
//     await sound.playAsync(); }

//   React.useEffect(() => {
//     return sound
//       ? () => {
//           console.log('Unloading Sound');
//           sound.unloadAsync(); }
//       : undefined;
//   }, [sound]);

    useEffect(() => {
        (async () => {
            const {status} = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    async function takePhoto (){
        let photo = await cameraRef.takePictureAsync();
        console.log('photo', photo);
        await MediaLibrary.saveToLibraryAsync(photo.uri); //asks user for access to put into photo library
    }

    function handleFacesDetected(e){
        if (e.faces.length === props.preferences.number){ //need to take a photo if this is detected
            takePhoto();
            //    playSound();
        }else{
        Alert.alert(
            "Face Detected!",
            e.faces.length + " face detected!",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );
        }
    }

    if (hasPermission === null) {
        return <View/>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={props.styles.camera}>
            <Camera
                style={props.styles.camera}
                type={type}
                ref = {ref => {setCameraRef(ref);}} //cameraRef
                onFacesDetected={(e)=>handleFacesDetected(e)}
                faceDetectorSettings={{
                    mode: FaceDetector.Constants.Mode.precision,
                    detectLandmarks: FaceDetector.Constants.Landmarks.none,
                    runClassifications: FaceDetector.Constants.Classifications.none,
                    minDetectionInterval: 2000,
                    tracking: true,
                }}
            >

                    <Icon
                        name="camera-reverse-outline"
                        size={50}
                        style={props.styles.icons}
                        onPress={() => {
                        setType(
                            type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back
                        );
                    }} />
            </Camera>
        </View>
    );
}