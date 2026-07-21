import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import * as Clipboard from "expo-clipboard";

const ClipboardScreen = () => {
  const [textToCopy, setTextToCopy] = useState("");

  const handleTextToCopy = async () => {
    await Clipboard.setStringAsync(textToCopy);
    alert("Text copied to clipboard!");
  };

  const handlePasteText = async () => {
    const text = await Clipboard.getStringAsync();
    setTextToCopy(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clipboard Demo</Text>

      <TextInput
        style={styles.input}
        placeholder="Type something to copy..."
        value={textToCopy}
        onChangeText={setTextToCopy}
      />

      <Pressable style={styles.button} onPress={handleTextToCopy}>
        <Text style={styles.buttonText}>Text To Copy</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={handlePasteText}>
        <Text style={styles.buttonText}>Paste From Clipboard</Text>
      </Pressable>
    </View>
  );
};

export default ClipboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "lightgrey",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "rebeccapurple",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
