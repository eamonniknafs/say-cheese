import React, {useState, useEffect} from 'react';
import {Alert, Text, View, Linking} from 'react-native';
import * as FaceDetector from 'expo-face-detector';
import Icon from 'react-native-vector-icons/Ionicons';
import * as  MediaLibrary from 'expo-media-library'
import {Camera} from 'expo-camera';

export default function Cam(props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [cameraRef, setCameraRef] = useState(null);

    useEffect(() => {
        (async () => {
            const {status} = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    function openPhotos() {
        switch (Platform.OS) {
            case "ios":
                Linking.openURL("photos-redirect://");
                break;
            case "android":
                Linking.openURL("content://media/internal/images/media");
                break;
            default:
                console.log("Could not open gallery app");
        }
    }

    async function takePhoto(e) {
        let capture = true;
        if (props.preferences.smile && props.preferences.blink) {
            for (let i = 0; i < e.faces.length; i++) {
                if (e.faces[i].smilingProbability < .8) capture = false;
                if (e.faces[i].leftEyeOpenProbability < .8 && e.faces[i].rightEyeOpenProbability < .8) capture = false;
            }
        } else if (props.preferences.smile) {
            for (let i = 0; i < e.faces.length; i++) {
                if (e.faces[i].smilingProbability < .8) capture = false;
            }
        } else if (props.preferences.blink) {
            for (let i = 0; i < e.faces.length; i++) {
                if (e.faces[i].leftEyeOpenProbability < .8 && e.faces[i].rightEyeOpenProbability < .8) capture = false;
            }
        }
        if (capture === true) {
            let photo = await cameraRef.takePictureAsync();
            console.log('photo', photo);
            await MediaLibrary.saveToLibraryAsync(photo.uri); //asks user for access to put into photo library
        }
    }

    function handleFacesDetected(e) {
        if (e.faces.length === props.preferences.number) { //need to take a photo if this is detected
            let i = 0;
            while (i < props.preferences.photos) {
                takePhoto(e).then(r => i++);
                console.log("i: " + i);
            }
            // openPhotos();

        } else {
            console.log(e.faces.length + " face detected!");
            console.log(props.preferences);
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
                ref={ref => {
                    setCameraRef(ref);
                }} //cameraRef
                onFacesDetected={(e) => handleFacesDetected(e)}
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
                    }}/>
            </Camera>
        </View>
    );
}