
import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import Slider from "@react-native-community/slider";

export default function Camera() {
  const cameraRef = useRef(null);
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState("back");
  const [zoom, setZoom] = useState(0);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>
          Camera permission is required.
        </Text>
        <Button
          title="Request Permission"
          onPress={requestPermission}
        />
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  return (
    <View style={styles.container}>
      <CameraView
        ref={cameraRef}
        style={styles.camera}
        facing={facing}
        zoom={zoom}
      />

      <View style={styles.controls}>
        <Text style={styles.zoomText}>
          Zoom: {(zoom * 100).toFixed(0)}%
        </Text>

        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          value={zoom}       />

        <Button
          title="Flip Camera"
          onPress={toggleCameraFacing}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  permissionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  permissionText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center",
  },

  camera: {
    flex: 1,
  },

  controls: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 15,
    borderRadius: 12,
  },

  zoomText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },

  slider: {
    width: "100%",
    height: 40,
    marginBottom: 15,
  },
});
// import { Button, StyleSheet, View, Text } from "react-native";
// import {CameraView,useCameraPermissions,useMicrophonePermissions} from "expo-camera";
// import { useRef, useState } from "react";
// import { VideoView, useVideoPlayer } from "expo-video";

// export default function CameraScreen() {
//   const videoRef = useRef(null);
//   const [video, setVideo] = useState(null);
//   const [permission, requestPermission] = useCameraPermissions();
//   const [micPermission, micRequestPermission] =useMicrophonePermissions();
//   const player = useVideoPlayer(video);
//   const [recording, setRecording] = useState(false);

//   if (!permission?.granted) {
//     return (
//       <View>
//         <Button
//           title="Permission Granted"
//           onPress={requestPermission}
//         />
//       </View>
//     );
//   }

//   if (!micPermission?.granted) {
//     return (
//       <View>
//         <Button
//           title="Mic Permission Granted"
//           onPress={micRequestPermission}
//         />
//       </View>
//     );
//   }

//   const handleStartRecording = async () => {
//     setRecording(true);

//     const result = await videoRef.current?.recordAsync();

//     console.log(result);

//     if (result) {
//       setVideo(result.uri);
//     }

//     setRecording(false);
//   };

//   const handleEndingRecording = () => {
//     videoRef.current?.stopRecording();
//   };

//   return (
//     <View style={style.container}>
//       <CameraView
//         style={style.camera}
//         ref={videoRef}
//         mode="video"
//       />

//       <View style={style.buttonContainer}>
//         <Button
//           title="Start Recording"
//           onPress={handleStartRecording}
          
//         />

//         <Button
//           title="End Recording"
//           onPress={handleEndingRecording}
         
//         />
//       </View>

//       {recording && (
//         <Text style={style.recordingText}>
//           Start Recording...
//         </Text>
//       )}

//       {video && (
//         <VideoView
//           style={style.video}
//           player={player}
//         />
//       )}
//     </View>
//   );
// }

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "white",
//   },

//   camera: {
//     width: "100%",
//     height: 400,
//     marginBottom: 20,
//     borderRadius: 10,
//   },

//   video: {
//     width: "100%",
//     height: 250,
//     marginTop: 20,
//   },

//   buttonContainer: {
//     marginBottom: 10,
//   },

//   recordingText: {
//     fontSize: 18,
//     textAlign: "center",
//     marginTop: 15,
//     fontWeight: "bold",
//   },
// });





// // import { CameraView, useCameraPermissions } from 'expo-camera';
// // import * as MediaLibrary from 'expo-media-library';
// // import { useState, useRef } from 'react';
// // import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, Linking, Platform } from 'react-native';

// // export default function CameraScreen() {
// //   const [facing, setFacing] = useState('back');
// //   const [permission, requestPermission] = useCameraPermissions();
// //   const [mediaLibraryPermission, requestMediaLibraryPermission] = MediaLibrary.usePermissions();
// //   const cameraRef = useRef(null);
// //   const [lastPhoto, setLastPhoto] = useState(null);

// //   if (!permission || !mediaLibraryPermission) {
// //     // Permissions are still loading.
// //     return <View style={styles.loadingContainer} />;
// //   }

// //   const isWeb = Platform.OS === 'web';
// //   if (!permission.granted || (!isWeb && !mediaLibraryPermission.granted)) {
// //     // Permissions are not granted yet.
// //     return (
// //       <View style={styles.permissionContainer}>
// //         <Text style={styles.permissionText}>We need camera and photo gallery permissions.</Text>
// //         <Text style={{color: '#999', marginBottom: 20, textAlign: 'center'}}>If the prompt doesn't appear, you must allow them in Settings.</Text>
        
// //         <TouchableOpacity 
// //           style={styles.permissionButton} 
// //           onPress={async () => {
// //             if (!permission?.granted) {
// //               await requestPermission();
// //             }
// //             const isWeb = Platform.OS === 'web';
// //             if (!isWeb && !mediaLibraryPermission?.granted) {
// //               await requestMediaLibraryPermission();
// //             }
// //           }}>
// //           <Text style={styles.permissionButtonText}>Grant Permissions</Text>
// //         </TouchableOpacity>

// //         {Platform.OS !== 'web' && (
// //           <TouchableOpacity 
// //             style={[styles.permissionButton, { backgroundColor: '#444', marginTop: 15 }]} 
// //             onPress={() => Linking.openSettings()}>
// //             <Text style={styles.permissionButtonText}>Open Settings</Text>
// //           </TouchableOpacity>
// //         )}
// //         {Platform.OS === 'web' && (
// //            <Text style={{color: '#aaa', marginTop: 15, textAlign: 'center'}}>On the web, click the lock icon next to your URL bar to allow camera access, then refresh.</Text>
// //         )}
// //       </View>
// //     );
// //   }

// //   function toggleCameraFacing() {
// //     setFacing(current => (current === 'back' ? 'front' : 'back'));
// //   }

// //   async function takePhoto() {
// //     if (cameraRef.current) {
// //       try {
// //         const photo = await cameraRef.current.takePictureAsync({
// //           quality: 1, // Highest quality
// //           base64: false,
// //           exif: false,
// //         });

// //         // Show a little thumbnail preview of the photo we just took
// //         setLastPhoto(photo.uri);

// //         // Save to the actual phone gallery
// //         if (Platform.OS !== 'web') {
// //           await MediaLibrary.saveToLibraryAsync(photo.uri);
// //         }
// //       } catch (error) {
// //         console.error(error);
// //         Alert.alert("Error", "Failed to take or save the photo.");
// //       }
// //     }
// //   }

// //   return (
// //     <View style={styles.container}>
// //       <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
// //         <View style={styles.overlay}>
// //           {/* Flip Button */}
// //           <TouchableOpacity style={styles.flipButton} onPress={toggleCameraFacing}>
// //             <Text style={styles.flipText}>Flip</Text>
// //           </TouchableOpacity>
          
// //           {/* Square Take Photo Button */}
// //           <TouchableOpacity style={styles.squareButton} onPress={takePhoto}>
// //             <Text style={styles.squareButtonText}>Take Photo</Text>
// //           </TouchableOpacity>
          
// //           {/* Image Preview Thumbnail */}
// //           <View style={styles.previewContainer}>
// //             {lastPhoto ? (
// //               <Image source={{ uri: lastPhoto }} style={styles.previewImage} />
// //             ) : (
// //               <View style={styles.placeholderSpace} />
// //             )}
// //           </View>
// //         </View>
// //       </CameraView>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: 'black',
// //   },
// //   loadingContainer: {
// //     flex: 1,
// //     backgroundColor: 'black',
// //   },
// //   permissionContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#1E1E1E',
// //     padding: 20,
// //   },
// //   permissionText: {
// //     color: 'white',
// //     fontSize: 18,
// //     textAlign: 'center',
// //     marginBottom: 20,
// //     fontWeight: '500',
// //   },
// //   permissionButton: {
// //     backgroundColor: '#007AFF',
// //     paddingHorizontal: 24,
// //     paddingVertical: 12,
// //     borderRadius: 8,
// //   },
// //   permissionButtonText: {
// //     color: 'white',
// //     fontSize: 16,
// //     fontWeight: '600',
// //   },
// //   camera: {
// //     flex: 1,
// //   },
// //   overlay: {
// //     position: 'absolute',
// //     bottom: 0,
// //     left: 0,
// //     right: 0,
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     paddingBottom: 40,
// //     paddingHorizontal: 30,
// //     backgroundColor: 'rgba(0,0,0,0.5)',
// //     height: 120,
// //   },
// //   flipButton: {
// //     backgroundColor: 'rgba(255, 255, 255, 0.2)',
// //     paddingHorizontal: 16,
// //     paddingVertical: 10,
// //     borderRadius: 8,
// //   },
// //   flipText: {
// //     color: 'white',
// //     fontSize: 16,
// //     fontWeight: '600',
// //   },
// //   squareButton: {
// //     backgroundColor: 'white',
// //     paddingHorizontal: 16,
// //     paddingVertical: 14,
// //     borderRadius: 6,
// //     shadowColor: "#000",
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.3,
// //     shadowRadius: 4,
// //     elevation: 5,
// //   },
// //   squareButtonText: {
// //     color: 'black',
// //     fontWeight: 'bold',
// //     fontSize: 14,
// //     textTransform: 'uppercase',
// //   },
// //   previewContainer: {
// //     width: 60,
// //     height: 60,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   previewImage: {
// //     width: 60,
// //     height: 60,
// //     borderRadius: 8,
// //     borderWidth: 2,
// //     borderColor: 'white',
// //   },
// //   placeholderSpace: {
// //     width: 60,
// //     height: 60,
// //   }
// // });



