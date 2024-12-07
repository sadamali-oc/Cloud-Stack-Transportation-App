import { Stack } from "expo-router";
import React from "react";
import { Platform, View } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "../../hooks/useColorScheme.web";
import { Colors } from "../../constants/Colors";
import BlurTabBarBackground from "../../components/ui/TabBarBackground.ios";
export default function TabLayout() {
  const colorScheme = useColorScheme();

  // Set background color based on the color scheme
  // const backgroundColor = colorScheme === "dark" ? Colors.darkBackground : Colors.lightBackground;

  return (
    <ThemeProvider value={colorScheme === "light" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShown: false,
          // Set a custom background color for the entire screen
          // cardStyle: { backgroundColor },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
