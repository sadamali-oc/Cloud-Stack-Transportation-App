import Header from "../../components/Header";
import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FullWindowOverlay } from "react-native-screens";

const HomeScreen = () => {
  const [isPending, setPending] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />

      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "#F5F7FA",
          position: "relative",
        }}
      >
        {isPending && (
          <View
            style={{
              position: "absolute", // Correct 'absolute' positioning
              opacity: 0.7, // Adding some transparency
              width: "100%", // Full width
              height: "100%", // Full height
              justifyContent: "center", // Center the ActivityIndicator
              alignItems: "center", // Center the ActivityIndicator
              zIndex: 1, // Make sure it's on top of other views
            }}
          >
            <View
              style={{
                backgroundColor: "#000000", // Background color
                opacity: 0.5, // Corrected opacity (50 was incorrect; must be between 0 and 1)
                height: "100%", // Percentage value should be a string
                width: "100%", // Similarly, percentage value for width
                justifyContent: "center", // Proper alignment property
                alignItems: "center", // Proper alignment property
              }}
            >
              <View
                style={{
                  position: "absolute",
                }}
              >
                <ActivityIndicator
                  size="large"
                  color="#fff"
                  style={{
                    paddingTop: 20,
                  }}
                />
              </View>
            </View>
            {/* Loading indicator */}
          </View>
        )}

        <View
          style={{
            height: "25%",
            width: "100%",
            justifyContent: "flex-start",
            paddingTop: 8,
            backgroundColor: "#192031",
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
        >
          <Header />
        </View>

        {/* Pressable to toggle pending state */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
