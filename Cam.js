import React, { useState, useEffect } from 'react';
import { Alert, Text, View, TouchableOpacity } from 'react-native';
import * as FaceDetector from 'expo-face-detector';
import { Camera } from 'expo-camera';

export default function Cam(props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    function handleFacesDetected(){
        Alert.alert(
            "Face Detected!",
            "Your shit seems to work. Don't get too excited.",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );
    }

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={props.styles.container}>
            <Camera
                style={props.styles.camera}
                type={type}
                onFacesDetected={handleFacesDetected}
                faceDetectorSettings={{
                    mode: FaceDetector.Constants.Mode.fast,
                    detectLandmarks: FaceDetector.Constants.Landmarks.none,
                    runClassifications: FaceDetector.Constants.Classifications.none,
                    minDetectionInterval: 100,
                    tracking: true,
                }}
            >

                <View style={props.styles.buttonContainer}>
                    <TouchableOpacity
                        style={props.styles.button}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>
                        <Text style={props.styles.text}> Flip </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}