import React, { useState, useEffect } from 'react';
import { Alert, Text, View, TouchableOpacity } from 'react-native';
import * as FaceDetector from 'expo-face-detector';
import { Camera } from 'expo-camera';

export default function Cam(props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
   ///
   const [cameraRef,setCameraRef] = useState(null);
    const __savePhoto = () => {}

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    // _takePhoto = async () => {
    //     const photo = await ref.current.takePictureAsync()
    //     console.debug(photo)
    // }

    // takePicture(() => {
    //     (async () => {
    //         const {photo} = await Camera.takePictureAsync();
    //     })();
    // },[]);

    function handleFacesDetected(e){
        if (e.faces.length === 1){ //need to take a photo if this is detected
            //_takePhoto
            // if (!e.faces.faceDetected && !e.faces.state.countDownStarted){
            //     e.faces.initCountDown();
            // }
            Alert.alert(
                "Face Detected!",
                e.faces.length + " face detected!",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
        }else{
        //     e.faces.setState({
        //         faceDetected: false
        //     });
        //     e.faces.cancelCountDown();
        // }


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
                ref = {ref => {setCameraRef(ref);}} //cameraRef
                onFacesDetected={(e)=>handleFacesDetected(e)}
                faceDetectorSettings={{
                    mode: FaceDetector.Constants.Mode.precision,
                    detectLandmarks: FaceDetector.Constants.Landmarks.none,
                    runClassifications: FaceDetector.Constants.Classifications.none,
                    minDetectionInterval: 1000,
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
                    {/* this is the portion that takes a photo on a button press */}
                    <TouchableOpacity style={{alignSelf: 'center'}} onPress={async() => { 
                        if(cameraRef){
                        let photo = await cameraRef.takePictureAsync();
                        console.log('photo', photo);
                        }
                    }}>
                        <View style={{ 
                        borderWidth: 2,
                        borderRadius:"50%",
                        borderColor: 'white',
                        height: 50,
                        width:50,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'}}
                        >
                        <View style={{
                            borderWidth: 2,
                            borderRadius:"50%",
                            borderColor: 'white',
                            height: 40,
                            width:40,
                            backgroundColor: 'white'}} >
                        </View>
                        </View>
                    </TouchableOpacity>
                        {/* end section that takes photo with button */}
                </View>

            </Camera>
        </View>
    );
}