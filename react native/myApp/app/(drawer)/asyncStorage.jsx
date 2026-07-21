import React, { useState } from "react";
import {StyleSheet,View,Text,TextInput,Button,} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AsyncStorageExample = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [savedName, setSavedName] = useState("");
  const [savedEmail, setSavedEmail] = useState("");

  // Save Data
  const handleSaveData = async () => {
    try {
      const user = {
        name: name,
        email: email,
      };

      await AsyncStorage.setItem("userData", JSON.stringify(user));

      alert("Data Saved Successfully!");

      setName("");
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };

  // Get Data
  const handleGetData = async () => {
    try {
      const value = await AsyncStorage.getItem("userData");

      if (value !== null) {
        const user = JSON.parse(value);

        setSavedName(user.name);
        setSavedEmail(user.email);
      } else {
        alert("No Data Found!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Data
  const handleDeleteData = async () => {
    try {
      await AsyncStorage.removeItem("userData");

      setSavedName("");
      setSavedEmail("");

      alert("Data Deleted Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>AsyncStorage Example</Text>

      <Text>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Button title="Save Data" onPress={handleSaveData} />

      <View style={{ height: 15 }} />

      <Button title="Get Data" onPress={handleGetData} />

      <View style={{ height: 15 }} />

      <Button title="Delete Data" onPress={handleDeleteData} />

      <Text style={styles.result}>Saved Name: {savedName}</Text>

      <Text style={styles.result}>Saved Email: {savedEmail}</Text>
    </View>
  );
};

export default AsyncStorageExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1ebeb",
    justifyContent: "center",
    padding: 20,
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: "#f5eded",
  },

  result: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});