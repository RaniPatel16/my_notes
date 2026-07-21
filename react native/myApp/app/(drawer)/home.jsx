import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Product Title</Text>
        <Text style={styles.price}>$99.99</Text>
        <Text style={styles.description}>
          This is a beautiful product description.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ca6060',
    padding: 50,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#c9bc75',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,           // For Android shadow
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    color: '#007AFF',
    marginVertical: 8,
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
});

export default App;