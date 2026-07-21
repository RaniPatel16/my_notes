import React, { useState } from "react";
import {StyleSheet,Text, View,TextInput,Button,} from "react-native";
import * as SecureStore from "expo-secure-store";
import { router } from "expo-router";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (name === "rani" && password === "123456") {
      await SecureStore.setItemAsync("Bharat", "India45");
      router.replace("/home1");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Name..."
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Password..."
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dd8b8b",
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#353232",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#1d1818",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    
  },
});