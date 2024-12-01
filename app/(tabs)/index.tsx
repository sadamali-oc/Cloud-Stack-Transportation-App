import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // Make sure you have this import

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            width: "100%",
            paddingHorizontal: 16,
            alignItems: "center",
            marginTop: 32,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 24,
            }}
          >
            <MaterialCommunityIcons name="airplane" size={48} color="#12B3A8" />{" "}
            {/* Ensure icon is properly used */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
