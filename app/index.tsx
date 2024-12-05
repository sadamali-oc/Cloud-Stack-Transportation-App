import { View, Text, StatusBar, Pressable, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // Make sure you have this import
import Animated, { FadeInDown } from "react-native-reanimated";
import { router } from "expo-router";

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#192031" }}>
      <StatusBar barStyle="light-content" />

      <View style={{ flex: 1 }}>
        <View
          style={{
            width: "100%",
            paddingHorizontal: 16,
            alignItems: "center",
            marginTop: 32,
          }}
        >
          <Animated.View
            entering={FadeInDown.duration(200).springify()}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 24,
            }}
          >
            <MaterialCommunityIcons name="airplane" size={48} color="#00A3E0" />
            <Text
              style={{
                color: "#fff",
                fontSize: 24,
                lineHeight: 60,
                paddingVertical: 8,
              }}
            >
              CLOUD
            </Text>

            <Text
              style={{
                color: "#00A3E0",
                fontSize: 24,
                lineHeight: 60,
                paddingVertical: 8,
                fontStyle: "italic",
                marginLeft: 5,
              }}
            >
              STACKS
            </Text>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(200).delay(200).springify()}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 40,
                fontWeight: "500", // Corrected to 500 for medium weight
                lineHeight: 60,
                textAlign: "left",
              }}
            >
              Explore the World, One Flight at a Time
            </Text>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(200).delay(400).springify()}
            style={{ marginTop: 16 }}
          >
            <Text
              style={{
                color: "#B0B0B0",
                fontSize: 15,
                fontWeight: "100",
                lineHeight: 38,
                textAlign: "left",
              }}
            >
              Find an easy way to buy airplane tickets with just a few clicks in
              the application.
            </Text>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(200).delay(600).springify()}
            style={{
              height: "25%",
              width: "100%",
              justifyContent: "flex-start",
              paddingTop: 8,
            }}
          >
            <Pressable

            onPress={() =>{ 
              
              router.push("/login") ; 
            
              // Alert.alert("Hi");
            

            }
            }
            
              style={{
                backgroundColor: "#00A3E0",
                borderRadius: 12,
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 10,
                paddingHorizontal: 20,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Discover
              </Text>
            </Pressable>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  color: "#B0B0B0",
                  fontWeight: "500", // Changed to numeric value 500
                }}
              >
                Don't have an account?
              </Text>

              <Text
                style={{
                  color: "#B0B0B0",
                  fontWeight: "500", // Changed to numeric value 500
                  marginLeft: 5,
                }}
              >
                Register
              </Text>
            </View>
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
