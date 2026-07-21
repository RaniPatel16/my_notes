import { CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, Linking, Platform } from 'react-native';

export default function CameraScreen() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [mediaLibraryPermission, requestMediaLibraryPermission] = MediaLibrary.usePermissions();
  const cameraRef = useRef(null);
  const [lastPhoto, setLastPhoto] = useState(null);

  if (!permission || !mediaLibraryPermission) {
    // Permissions are still loading.
    return <View style={styles.loadingContainer} />;
  }

  const isWeb = Platform.OS === 'web';
  if (!permission.granted || (!isWeb && !mediaLibraryPermission.granted)) {
    // Permissions are not granted yet.
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>We need camera and photo gallery permissions.</Text>
        <Text style={{color: '#999', marginBottom: 20, textAlign: 'center'}}>If the prompt doesn't appear, you must allow them in Settings.</Text>
        
        <TouchableOpacity 
          style={styles.permissionButton} 
          onPress={async () => {
            if (!permission?.granted) {
              await requestPermission();
            }
            const isWeb = Platform.OS === 'web';
            if (!isWeb && !mediaLibraryPermission?.granted) {
              await requestMediaLibraryPermission();
            }
          }}>
          <Text style={styles.permissionButtonText}>Grant Permissions</Text>
        </TouchableOpacity>

        {Platform.OS !== 'web' && (
          <TouchableOpacity 
            style={[styles.permissionButton, { backgroundColor: '#444', marginTop: 15 }]} 
            onPress={() => Linking.openSettings()}>
            <Text style={styles.permissionButtonText}>Open Settings</Text>
          </TouchableOpacity>
        )}
        {Platform.OS === 'web' && (
           <Text style={{color: '#aaa', marginTop: 15, textAlign: 'center'}}>On the web, click the lock icon next to your URL bar to allow camera access, then refresh.</Text>
        )}
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  async function takePhoto() {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync({
          quality: 1, // Highest quality
          base64: false,
          exif: false,
        });

        // Show a little thumbnail preview of the photo we just took
        setLastPhoto(photo.uri);

        // Save to the actual phone gallery
        if (Platform.OS !== 'web') {
          await MediaLibrary.saveToLibraryAsync(photo.uri);
        }
      } catch (error) {
        console.error(error);
        Alert.alert("Error", "Failed to take or save the photo.");
      }
    }
  }

  return (
    <View style={styles.container}>
      <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
        <View style={styles.overlay}>
          {/* Flip Button */}
          <TouchableOpacity style={styles.flipButton} onPress={toggleCameraFacing}>
            <Text style={styles.flipText}>Flip</Text>
          </TouchableOpacity>
          
          {/* Square Take Photo Button */}
          <TouchableOpacity style={styles.squareButton} onPress={takePhoto}>
            <Text style={styles.squareButtonText}>Take Photo</Text>
          </TouchableOpacity>
          
          {/* Image Preview Thumbnail */}
          <View style={styles.previewContainer}>
            {lastPhoto ? (
              <Image source={{ uri: lastPhoto }} style={styles.previewImage} />
            ) : (
              <View style={styles.placeholderSpace} />
            )}
          </View>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    padding: 20,
  },
  permissionText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '500',
  },
  permissionButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  permissionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  camera: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 40,
    paddingHorizontal: 30,
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 120,
  },
  flipButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  flipText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  squareButton: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  squareButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  previewContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'white',
  },
  placeholderSpace: {
    width: 60,
    height: 60,
  }
});
