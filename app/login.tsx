import {
  View,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLoginPressed = () => {
    if (!username || !password) {
      console.warn("Please enter both username and password!");
      return;
    }
    console.log("Login pressed with:", { username, password });
  };

  const onLoginFaceboook = () => console.warn("onLoginFaceboook");
  const onLoginGoogle = () => console.warn("onLoginGoogle");
  const onLoginApple = () => console.warn("onLoginApple");
  const onForgotPasswordPressed = () => console.warn("Password is forgot");
  const onSignUpPress = () => console.warn("onSignUpPress");

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
    >
      <SafeAreaView style={styles.container}>
        {/* Top view */}
        <View style={styles.topView} />

        {/* Profile Image */}
        <Image
          source={require("../assets/images/profilelogo.jpeg")}
          style={styles.image}
        />

        {/* Username Input */}
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        {/* Password Input */}
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        {/* Login Button */}
        <CustomButton text="Sign in" onPress={onLoginPressed} />
        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        <CustomButton
          text="Sign in with Facebook"
          bgcolor="#E7EAF4"
          fgcolor="#4765A9"
          onPress={onLoginFaceboook}
        />
        <CustomButton
          text="Sign in with Google"
          bgcolor="#FAE9EA"
          fgcolor="#DD4D44"
          onPress={onLoginGoogle}
        />
        <CustomButton
          text="Sign in with Apple"
          onPress={onLoginApple}
          bgcolor="#e3e3e3"
          fgcolor="#363636"
        />
        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#192031", // Full page background color
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center", // Center content if it doesn't fill the page
    alignItems: "center",
    paddingVertical: 30,

  },
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  // topView: {
  //   height: "15%",
  //   width: "100%",
  //   backgroundColor: "#00A3E0",
  //   borderBottomLeftRadius: 30,
  //   borderBottomRightRadius: 30,
  // },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    marginTop: 10,
  },
});
