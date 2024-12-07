import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { useForm } from "react-hook-form";
import { router } from "expo-router";
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SignUp() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const pwd = watch("password");

  const handleSignup = async (data) => {
    const { email, password } = data;
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(`User created: ${user.email}`);
      router.push("/login");
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('This email is already in use.');
      } else {
        alert('An error occurred. Please try again.');
      }
    }
  };

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Create an account</Text>

        <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: "Username is required",
            minLength: { value: 3, message: "At least 3 characters" },
            maxLength: { value: 24, message: "Max 24 characters" },
          }}
        />

        <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          rules={{
            required: "Email is required",
            pattern: { value: emailRegex, message: "Invalid email format" },
          }}
        />

        <CustomInput
          name="password"
          control={control}
          placeholder="Password"
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: { value: 8, message: "At least 8 characters" },
          }}
        />

        <CustomInput
          name="password-repat"
          control={control}
          placeholder="Repeat Password"
          secureTextEntry
          rules={{
            validate: (value) =>
              value === pwd || "Passwords do not match",
          }}
        />

        <CustomButton
          text="Register"
          onPress={handleSubmit((data) => handleSignup(data))}
        />

        <Text style={styles.text}>
          By registering, you confirm that you accept our
          <Text style={styles.link}> Terms of Use</Text> and
          <Text style={styles.link}> Privacy Policy</Text>.
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: { flex: 1, backgroundColor: "white" },
  scrollContent: { flexGrow: 1, justifyContent: "center", alignItems: "center" },
  container: { flex: 1, alignItems: "center", width: "100%" },
  title: { fontSize: 34, fontWeight: "bold", color: "#051C60", margin: 10 },
  text: { color: "gray", marginVertical: 10 },
  link: { color: "#FDB075" },
});
