import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default function CustomInput({ value, setValue, placeholder, secureTextEntry }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={[
        styles.container,
        { 
          borderColor: isFocused ? "" : "#e8e8e8", // Orange on focus, default gray otherwise
        },
      ]}
    >
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        placeholderTextColor="#A9A9A9"
        onFocus={() => setIsFocused(true)} // Highlight on focus
        onBlur={() => setIsFocused(false)} // Reset highlight on blur
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white", // Background color of the container
    width: "90%", // Adjust width for responsiveness
    borderWidth: 1, // Single border for the container
    borderRadius: 5, // Rounded corners
    marginVertical: 5, // Space between multiple inputs
    paddingHorizontal: 0, // Ensure no extra padding inside
  },

  input: {
    fontSize: 16, // Set font size for text
    color: "black", // Text color
    padding: 10, // Space inside the input field
    margin: 0, // Ensure no extra margin inside the TextInput
    height: 40, // Explicit height to prevent unintended growth
  },
});
