import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as SecureStore from "expo-secure-store";
import { router } from "expo-router";

const HomeScreen = () => {

  // Check if user is logged in
  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const token = await SecureStore.getItemAsync("Bharat");

    // If token does not exist, go back to Login
    if (!token) {
      router.replace("login");
    }
  };

  // Logout Function
  const handleLogout = async () => {
    await SecureStore.deleteItemAsync("Bharat");
    router.replace("login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Home Screen</Text>

      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a3d2e5",
    padding: 20,
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
});