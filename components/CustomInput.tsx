import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";

export default function CustomInput({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <>
          <View
            style={[
              styles.container,
              {
                borderColor: error ? "red" : "#e8e8e8", // Red border for errors, gray otherwise
              },
            ]}
          >
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
              placeholderTextColor={error ? "red" : "#A9A9A9"} // Change placeholder color based on error state
            />
          </View>

          {/* Display error message if exists */}
          {error && (
            <Text style={styles.errorText}>
              {error.message || "Error"}
            </Text>
          )}
        </>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white", // Background color of the container
    width: "90%", // Adjust width for responsiveness
    borderWidth: 1, // Single border for the container
    borderRadius: 5, // Rounded corners
    marginVertical: 5, // Space between multiple inputs
    paddingHorizontal: 10, // Add padding for consistent spacing
  },
  input: {
    fontSize: 16, // Set font size for text
    color: "black", // Text color
    padding: 10, // Space inside the input field
    margin: 0, // Ensure no extra margin inside the TextInput
    height: 40, // Explicit height to prevent unintended growth
  },
  errorText: {
    color: "red", // Error message color
    fontSize: 12, // Smaller font size for the error message
    alignSelf: "stretch", // Stretch to match the width of the container
    marginTop: 5, // Add small space between input field and error message
    marginLeft: 20, // Align the error message with input padding
  },
});
