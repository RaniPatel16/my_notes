import { View, Text, Button, TextInput, Alert } from "react-native";
import * as Clipboard from "expo-clipboard";
import { useState } from "react";

export default function Clip() {
  const [text, setText] = useState("");
  const [copiedText, setCopiedText] = useState("");

  // Copy text to clipboard
  const handleCopy = async () => {
    await Clipboard.setStringAsync(text);
  };

  // Get copied text from clipboard
  const handlecopiedText = async () => {
    const res = await Clipboard.getStringAsync();

    console.log(res);

    setCopiedText(res);
  };

  // Check whether clipboard has text
  const handleGetCopiedText = async () => {
    const hasData = await Clipboard.hasStringAsync();

    if (!hasData) {
      Alert.alert("Clipboard", "Nothing to copy");
      return;
    }

    const res = await Clipboard.getStringAsync();

    console.log(res);

    setCopiedText(res);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
      }}
    >
      <Text>React Clipboard Class</Text>

      <TextInput
        placeholder="Enter something"
        value={text}
        onChangeText={setText}
        style={{
          backgroundColor: "white",
          width: 200,
          padding: 10,
          margin: 10,
        }}
      />

      <Button title="Copy Text" onPress={handleCopy} />

      <Button title="Get Text" onPress={handlecopiedText} />

      <Button
        title="Get Copied Text"
        onPress={handleGetCopiedText}
      />

      <Text style={{ marginTop: 20, fontSize: 18 }}>
        Text: {copiedText}
      </Text>
    </View>
  );
}









// import React, { useState } from "react";
// import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
// import * as Clipboard from "expo-clipboard";

// const ClipboardScreen = () => {
//   const [textToCopy, setTextToCopy] = useState("");

//   const handleTextToCopy = async () => {
//     await Clipboard.setStringAsync(textToCopy);
//     alert("Text copied to clipboard!");
//   };

//   const handlePasteText = async () => {
//     const text = await Clipboard.getStringAsync();
//     setTextToCopy(text);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Clipboard Demo</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Type something to copy..."
//         value={textToCopy}
//         onChangeText={setTextToCopy}
//       />

//       <Pressable style={styles.button} onPress={handleTextToCopy}>
//         <Text style={styles.buttonText}>Text To Copy</Text>
//       </Pressable>

//       <Pressable style={styles.button} onPress={handlePasteText}>
//         <Text style={styles.buttonText}>Paste From Clipboard</Text>
//       </Pressable>
//     </View>
//   );
// };

// export default ClipboardScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//     backgroundColor: "lightgrey",
//   },

//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },

//   input: {
//     width: "100%",
//     borderWidth: 1,
//     borderColor: "gray",
//     borderRadius: 8,
//     padding: 10,
//     marginBottom: 20,
//   },

//   button: {
//     backgroundColor: "rebeccapurple",
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     marginVertical: 10,
//   },

//   buttonText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });
