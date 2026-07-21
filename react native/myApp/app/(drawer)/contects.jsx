// import React, { useState } from "react";
// import { View,Text,Button,StyleSheet,FlatList,Alert} from "react-native";
// import * as Contacts from "expo-contacts";

// const ContactsScreen = () => {
//   const [contacts, setContacts] = useState([]);

//   const getContacts = async () => {
//     //  for permission
//     const { status } = await Contacts.requestPermissionsAsync();

//     if (status !== "granted") {
//       Alert.alert("Access Denied", "Permission to access contacts was denied.");
//       return;
//     }

//     // to  contacts
//     const { data } = await Contacts.getContactsAsync({
//       fields: [Contacts.Fields.PhoneNumbers],
//     });

//     if (data.length > 0) {
//       setContacts(data);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Contacts</Text>

//       <Button title="Get Contacts" onPress={getContacts} />

//       <FlatList
//         data={contacts}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.contactItem}>
//             <Text style={styles.name}>{item.name}</Text>

//             <Text>{item.phoneNumbers?.[0]?.number || "No contacts found"}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default ContactsScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     marginTop: 50,
//   },

//   heading: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//     textAlign: "center",
//   },

//   contactItem: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ccc",
//   },

//   name: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });




import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  Alert,
  ActivityIndicator,
} from "react-native";
import * as Contacts from "expo-contacts";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getContacts = async () => {
    setLoading(true);

    // Ask Permission
    const { status } = await Contacts.requestPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Please allow contact permission."
      );
      setLoading(false);
      return;
    }

    // Fetch Contacts
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.PhoneNumbers],
    });

    console.log(data); // Check terminal for fetched contacts

    setContacts(data);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Contacts</Text>

      <Button title="Get Contacts" onPress={getContacts} />

      {loading && (
        <ActivityIndicator
          size="large"
          color="blue"
          style={{ marginTop: 20 }}
        />
      )}

      {!loading && contacts.length === 0 && (
        <Text style={styles.emptyText}>
          No Contacts Found
        </Text>
      )}

      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.contactCard}>
            <Text style={styles.name}>
              {item.name}
            </Text>

            <Text style={styles.number}>
              {item.phoneNumbers?.length > 0
                ? item.phoneNumbers[0].number
                : "No Phone Number"}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    marginTop: 50,
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  emptyText: {
    textAlign: "center",
    marginTop: 20,
    color: "gray",
    fontSize: 16,
  },

  contactCard: {
    backgroundColor: "#F4F4F4",
    padding: 15,
    borderRadius: 10,
    marginTop: 12,
    elevation: 2,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },

  number: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
  },
});