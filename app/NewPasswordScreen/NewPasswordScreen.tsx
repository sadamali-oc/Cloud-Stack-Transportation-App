import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { router } from "expo-router";

const { width } = Dimensions.get("window");

export default function NewPasswordScreen() {
  const [code, setCode] = useState("");
  const [newPassword, setnewPassword] = useState("");

  const onConfirmPressed = () => {
    console.log("User Confirmation Successfully");
  };

  const onSendPressed = () => {
    console.log("onResendPress");
  };

  const onSubmitPressed = () => {
    console.log("onSubmitPress");
  };


  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Rest your password</Text>

        <CustomInput placeholder="Code" value={code} setValue={setCode} />

        <CustomInput
          placeholder="Enter your new Password"
          value={newPassword}
          setValue={setnewPassword}
        />

        <CustomButton text="Submit" onPress={onSubmitPressed} />

        <CustomButton
          text="Back to Sign in"
          onPress={() => {
            router.push("/login");
          }}
          type="TERTIARY"
        />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
    // marginVertical: 10,
    // marginHorizontal: 20,
  },

  text: {
    color: "gray",
    marginVertical: 10,
    marginHorizontal: 20, // Horizontal margin (left and right)
  },

  link: {
    color: "#FDB075",
  },
});
