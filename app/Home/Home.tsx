import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase"; // Import Firebase auth

export default function Home() {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    // Access the current authenticated user and set their email
    const user = auth.currentUser;
    if (user) {
      setUserEmail(user.email); // Set the email of the logged-in user
    } else {
      setUserEmail("No user signed in");
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Signed in as: {userEmail}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5", // Optional background color
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});
