import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { router } from "expo-router";
import { useForm, Controller } from "react-hook-form";

const { width } = Dimensions.get("window");

export default function SignUp() {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordRepeat, setPasswordRepeat] = useState("");

  const onRegisterPressed = () => {
    console.log("User Registration Successfully");
  };

  const onLoginFacebook = () => console.warn("Login with Facebook");
  const onLoginGoogle = () => console.warn("Login with Google");
  const onLoginApple = () => console.warn("Login with Apple");
  const onForgotPasswordPressed = () => console.warn("Forgot password pressed");
  const onSignUpPress = () => console.warn("Sign-up pressed");
  const onTermsUsePress = () => console.warn(" on Terms Use Pressed");

  const onPrivacyPress = () => console.warn("on Privacy Pressed");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Create an account</Text>

        {/* Username Input */}
        <CustomInput name="username" control={control} placeholder="Username" />

        <CustomInput name="email" control={control} placeholder="Email" />

        {/* Password Input */}
        <CustomInput
          name="password"
          control={control}
          placeholder="Password"
          secureTextEntry
        />

        <CustomInput
          name="password-repat"
          control={control}
          placeholder="Repeat Password"
          secureTextEntry
        />

        <CustomButton
          text="Register"
          onPress={handleSubmit(() => {
            // {onRegisterPressed},
            router.push("/ConfirmEmailScreen/ConfirmEmailScreen");
          })}
        />

        <Text style={styles.text}>
          By registering, you confirm that you accept our
          <Text style={styles.link} onPress={onTermsUsePress}>
            {" "}
            {""}Terms of Use
          </Text>{" "}
          {""}and
          <Text style={styles.link} onPress={onPrivacyPress}>
            {" "}
            {""}Privacy Policy
          </Text>{" "}
        </Text>
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
    fontSize: 34,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
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
