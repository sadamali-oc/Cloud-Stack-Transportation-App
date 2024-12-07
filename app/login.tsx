import React, { useState } from "react";
import { View, Image, StyleSheet, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { useForm } from "react-hook-form";
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

const { width } = Dimensions.get("window");

export default function LoginPage() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onLoginPressed = async (data) => {
    const { email, password } = data;
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(`User logged in: ${user.email}`);
      router.push("/Home/Home"); // Navigate to the authenticated home page
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        alert('No user found with this email.');
      } else if (error.code === 'auth/wrong-password') {
        alert('Incorrect password.');
      } else {
        alert('An error occurred. Please try again.');
      }
    }
  };

  const onLoginFacebook = () => console.warn("Login with Facebook");
  const onLoginGoogle = () => console.warn("Login with Google");
  const onLoginApple = () => console.warn("Login with Apple");

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
      <SafeAreaView style={styles.container}>
        <Image source={require("../assets/images/login2.png")} style={styles.image} />

        {/* Email Input */}
        <CustomInput
          name="email"
          placeholder="Email"
          control={control}
          rules={{ required: "Email is required", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }}
        />

        {/* Password Input */}
        <CustomInput
          name="password"
          control={control}
          placeholder="Password"
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: { value: 6, message: "Password should be at least 6 characters" },
          }}
        />

        {/* Login Button */}
        <CustomButton text="Sign in" onPress={handleSubmit(onLoginPressed)} />

        {/* Social Login Buttons */}
        <CustomButton
          text="Sign in with Facebook"
          bgcolor="#E7EAF4"
          fgcolor="#4765A9"
          onPress={onLoginFacebook}
          icon={<EvilIcons name="sc-facebook" size={24} color="#4765A9" />}
        />
        <CustomButton
          text="Sign in with Google"
          bgcolor="#FAE9EA"
          fgcolor="#DD4D44"
          onPress={onLoginGoogle}
          source={require("../assets/images/google.png")}
        />
        <CustomButton
          text="Sign in with Apple"
          bgcolor="#e3e3e3"
          fgcolor="#363636"
          onPress={onLoginApple}
          icon={<EvilIcons name="sc-facebook" size={24} color="#363636" />}
        />

        {/* Sign Up */}
        <CustomButton
          text="Don't have an account? Create one"
          onPress={() => router.push("/SignUp/signup")}
          type="TERTIARY"
        />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: { flex: 1, backgroundColor: "white" },
  scrollContent: { flexGrow: 1, justifyContent: "center", alignItems: "center", paddingVertical: 20 },
  container: { flex: 1, alignItems: "center", width: "100%" },
  image: { width: width * 0.6, height: width * 0.6, resizeMode: "contain", marginBottom: 10, marginTop: 10, alignSelf: "center" },
});
