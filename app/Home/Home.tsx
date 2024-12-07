import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#f5f5f5", // Optional background color
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});
