import React, { useState, useEffect } from 'react';
import { Alert, Text, View, TouchableOpacity } from 'react-native';
import * as FaceDetector from 'expo-face-detector';
import { Camera } from 'expo-camera';
import * as  MediaLibrary  from 'expo-media-library'
import { Audio } from 'expo-av';

export default function Cam(props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
   ///
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
   
    // const __savePhoto = () => {}

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);


    // const takePicture = async () => {
    //     if (cameraRef){
    //         const data = await ref.current.takePictureAsync(options);
    //         console.log(data.uri)
    //     }
    // };
   
    function countDown(){
        props.preferences.countDownSeconds = 100000;
    }
        
    function cancelCountDown(){
        clearInterval(props.preferences.countDownSeconds);
        // this.setState({
        // countDownSeconds: this.props.countDownSeconds,
        // countDownStarted: false,
        // });
    }
    
    function handleCountDownTime (){
        if (props.preferences.countDownSeconds > 0){
        let newSeconds = props.preferences.countDownSeconds-1;
        props.preferences.countDownSeconds = newSeconds;
        } else {
            cancelCountDown();
            takePhoto();
        }
    }

    async function takePhoto (){
        let photo = await cameraRef.takePictureAsync();
        console.log('photo', photo);
        await MediaLibrary.saveToLibraryAsync(photo.uri); //asks user for access to put into photo library
    }

    function handleFacesDetected(e){
        
        if (e.faces.length === 1){ //need to take a photo if this is detected
           takePhoto();
        //    playSound();
            //handleCountDownTime();
            //_takePhoto
            // if (!e.faces.faceDetected && !e.faces.state.countDownStarted){
            //     e.faces.initCountDown();
            // }
            // Alert.alert(
            //     "Face Detected!",
            //     e.faces.length + " face detected!",
            //     [
            //         { text: "OK", onPress: () => console.log("OK Pressed") }
            //     ],
            //     { cancelable: false }
            // );
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
                    {/* add button here if you want */}
                </View>

            </Camera>
        </View>
    );
}

{/* this is the portion that takes a photo on a button press */}
                    {/* <TouchableOpacity style={{alignSelf: 'center'}} onPress={async() => { 
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
                    </TouchableOpacity> */}
                        {/* end section that takes photo with button */}