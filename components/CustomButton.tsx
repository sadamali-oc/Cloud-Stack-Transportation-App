import * as React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

// Define the possible 'type' values
type ButtonType = 'PRIMARY' | 'TERTIARY';

interface CustomButtonProps {
  text: string;
  onPress: () => void;
  type?: ButtonType; // 'type' can be 'PRIMARY' or 'TERTIARY'
  bgcolor?: string; // Optional background color
  fgcolor?: string; // Optional text color
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onPress, type = 'PRIMARY', bgcolor, fgcolor }) => {
  return (

    
    <Pressable
      style={[
        styles.container,
        styles[`container_${type}` as keyof typeof styles],
        bgcolor ? { backgroundColor: bgcolor } : {},
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}` as keyof typeof styles],
          fgcolor ? { color: fgcolor } : {},
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00A3E0',
    width: '90%',
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 5,
    marginVertical:3,
  },
  container_PRIMARY: {
    backgroundColor: '#00A3E0',
  },
  container_TERTIARY: {
    backgroundColor: 'transparent', // No background for tertiary button
  },
  text: {
    color: 'white', // Default text color
    fontWeight: 'bold',
    fontSize: 15,
  },
  text_TERTIARY: {
    color: 'gray', // Set text color to gray for tertiary button
  },
});

export default CustomButton;
