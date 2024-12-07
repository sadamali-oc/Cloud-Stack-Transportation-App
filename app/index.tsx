import { View, Text, StatusBar, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Animated, { FadeInDown } from "react-native-reanimated";
import { router } from "expo-router";

import { Controller, useForm } from "react-hook-form";

const WelcomeScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#192031" }}>
      <StatusBar barStyle="light-content" />
      <View
        style={{ flex: 1, justifyContent: "center", paddingHorizontal: 16 }}
      >
        {/* Logo Section */}
        <Animated.View
          entering={FadeInDown.duration(200).springify()}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <MaterialCommunityIcons name="airplane" size={48} color="#00A3E0" />
          <Text style={{ color: "#fff", fontSize: 24, lineHeight: 60 }}>
            CLOUD
          </Text>
          <Text
            style={{
              color: "#00A3E0",
              fontSize: 24,
              lineHeight: 60,
              fontStyle: "italic",
              marginLeft: 5,
            }}
          >
            STACKS
          </Text>
        </Animated.View>

        {/* Main Heading */}
        <Animated.View
          entering={FadeInDown.duration(200).delay(200).springify()}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 32,
              fontWeight: "500",
              lineHeight: 42,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            Explore the World, One Flight at a Time
          </Text>
        </Animated.View>

        {/* Subtext */}
        <Animated.View
          entering={FadeInDown.duration(200).delay(400).springify()}
        >
          <Text
            style={{
              color: "#B0B0B0",
              fontSize: 16,
              lineHeight: 24,
              textAlign: "center",
              marginBottom: 32,
            }}
          >
            Find an easy way to buy airplane tickets with just a few clicks in
            the application.
          </Text>
        </Animated.View>

        {/* Button Section */}
        <Animated.View
          entering={FadeInDown.duration(200).delay(600).springify()}
          style={{ alignItems: "center", marginBottom: 20 }}
        >
          <Pressable
            onPress={() => router.push("/login")}
            style={{
              backgroundColor: "#00A3E0",
              borderRadius: 12,
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 12,
              paddingHorizontal: 24,
              width: "70%",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Discover
            </Text>
          </Pressable>
        </Animated.View>

        {/* Footer Section */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#B0B0B0",
              fontWeight: "500",
              fontSize: 14,
            }}
            onPress={handleSubmit(() => {
              router.push("/SignUp/signup");
            })}
          >
            Don't have an account?
          </Text>
          <Text
            style={{
              color: "#00A3E0",
              fontWeight: "500",
              fontSize: 14,
              marginLeft: 5,
            }}
            onPress={() => {
              router.push("/SignUp/signup");
            }}
          >
            Register
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
