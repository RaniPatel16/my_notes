import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

export default function LocationScreen() {
  const [location, setLocation] = useState(null);

  const getCurrentLocation = async () => {
    try {
      const { status } =
        await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          "Location permission is required."
        );
        return;
      }

      const currentLocation =
        await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });

      setLocation(currentLocation.coords);

      console.log(currentLocation.coords);
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Unable to fetch location.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Location Demo</Text>

      <Pressable style={styles.button} onPress={getCurrentLocation}>
        <Text style={styles.buttonText}>Get Current Location</Text>
      </Pressable>

      {location && (
        <>
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>
              Latitude: {location.latitude}
            </Text>

            <Text style={styles.locationText}>
              Longitude: {location.longitude}
            </Text>
          </View>

          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title="Current Location"
              description="You are here"
            />
          </MapView>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 60,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 8,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  locationContainer: {
    marginTop: 20,
    alignItems: "center",
  },

  locationText: {
    fontSize: 16,
    marginVertical: 3,
  },

  map: {
    width: 350,
    height: 350,
    marginTop: 20,
  },
});