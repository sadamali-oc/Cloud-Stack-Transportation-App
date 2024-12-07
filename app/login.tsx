import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { router } from "expo-router";
import ForgotPassword from "./FrogetPassword/ForgotPassword";

import { useForm, Controller } from "react-hook-form";

const { width } = Dimensions.get("window");

export default function LoginPage() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const onLoginPressed = (data) => {
    router.push("/Home/Home");
    console.log(data);
  };

  const onLoginFacebook = () => console.warn("Login with Facebook");
  const onLoginGoogle = () => console.warn("Login with Google");
  const onLoginApple = () => console.warn("Login with Apple");
  const onForgotPasswordPressed = () => {
    console.warn("Forgot password pressed");
  };
  const onSignUpPress = () => {};
  console.warn("Sign-up pressed");

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
    >
      <SafeAreaView style={styles.container}>
        {/* Profile Image */}
        <Image
          source={require("../assets/images/login2.png")}
          style={styles.image}
        />

        {/* Username Input */}
        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{ required: "Username is required" }}
        />

        {/* Password Input */}
        <CustomInput
          name="password"
          control={control}
          placeholder="Password"
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: {
              value: 3,
              message: "Password should be minimum 3 characters long",
            },
          }}
        />

        {/* <Controller
          control={control}
          name="password"
          render={({
            field: {
              value,

              onChange,
              onBlur,
            },
          }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={"password"}
            />
          )}
        /> */}

        {/* <TextInput placeholder="password" /> */}

        {/* Login Button */}
        <CustomButton text="Sign in" onPress={handleSubmit(onLoginPressed)} />

        {/* Forgot Password */}
        <CustomButton
          text="Forgot password?"
          onPress={ () => {
            router.push("/FrogetPassword/ForgotPassword");
          }}
          type="TERTIARY"
        />

        {/* Social Login Buttons */}
        <CustomButton
          text="Sign in with Facebook"
          bgcolor="#E7EAF4"
          fgcolor="#4765A9"
          onPress={onLoginFacebook}
          icon={<EvilIcons name="sc-facebook" size={24} color="#4765A9" />} // Correctly pass the icon prop
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
          onPress={() => {
            router.push("/SignUp/signup");
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
  image: {
    width: width * 0.6,
    height: width * 0.6,
    resizeMode: "contain",
    marginBottom: 10,
    marginTop: 10,
    alignSelf: "center",
  },
});
