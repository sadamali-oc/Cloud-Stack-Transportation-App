import * as React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  Image,
  ImageStyle,
  TextStyle,
  ViewStyle,
} from "react-native";

type ButtonType = "PRIMARY" | "TERTIARY";

interface CustomButtonProps {
  text: string;
  onPress: () => void;
  type?: ButtonType;
  bgcolor?: string;
  fgcolor?: string;
  icon?: React.ReactNode; // Custom React icon
  source?: any; // External image like Google/Facebook logos
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  onPress,
  type = "PRIMARY",
  bgcolor,
  fgcolor,
  icon,
  source,
}) => {
  return (
    <Pressable
      style={[
        styles.container,
        styles[`container_${type}` as keyof typeof styles],
        bgcolor ? { backgroundColor: bgcolor } : {},
      ]}
      onPress={onPress}
    >
      {/* Icon/Image on the Left */}
      {source && <Image source={source} style={styles.imageIcon} />}
      {icon && <View style={styles.reactIcon}>{icon}</View>}

      {/* Centered Text */}
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

const styles = StyleSheet.create<{
  container: ViewStyle;
  container_PRIMARY: ViewStyle;
  container_TERTIARY: ViewStyle;
  text: TextStyle;
  text_TERTIARY: TextStyle;
  imageIcon: ImageStyle;
  reactIcon: ViewStyle;
}>({
  container: {
    backgroundColor: "#00A3E0", // Ensure this is properly handled as a string
    width: "90%",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  container_PRIMARY: {
    backgroundColor: "#00A3E0", // Ensure this is a valid string
  },

  container_SECONDARY: {
    borderColor: "#00A3E0", // Ensure this is a valid string
    backgroundColor: "none", // No background color for tertiary

    borderWidth: 2,
  },
  container_TERTIARY: {
    backgroundColor: "transparent", // No background color for tertiary
  },

  text_SECONDARY:{
color:'#00A3E0'
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    flex: 1, // Allow text to take up remaining space for proper centering
  },
  text_TERTIARY: {
    color: "gray",
  },
  imageIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginRight: 10, // Space between icon and text
  },
  reactIcon: {
    marginRight: 10, // Space between React icon and text
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomButton;
