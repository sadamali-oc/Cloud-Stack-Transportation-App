import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      {/* Welcome message with platform-specific styling */}
      <Text style={styles.welcomeText}>Hello Welcome UOM</Text>
    </ThemedView>
  );
}

// Define styles with platform-specific adjustments
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa', // Light background to enhance theme
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Platform.OS === 'ios' ? '#007AFF' : '#6200EE', // Blue for iOS, Purple for Android
    padding: 10,
    textAlign: 'center',
  },
});
