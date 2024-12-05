import { View, Text, Image } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 8,
        alignItems: "center",
      }}
    >
      {/* Left Section: Profile Image */}
      <View
        style={{
          width: 50,
          height: 50,
          marginRight: 8, // Adds space between image and text
        }}
      >
        <Image
          source={require("../assets/images/profilelogo.jpeg")}
          style={{
            width: 40,
            height: 40,
            borderColor: "#fff",
            borderRadius: 50,
            borderWidth: 2,
          }}
        />
      </View>

      <View>
        <Text
          style={{
            color: "#fff",
            fontSize: 15,
            fontWeight: "200",
            textAlign: "left",
          }}
        >
          Welcome Back
        </Text>

        <Text
          style={{
            color: "#fff",
            fontSize: 15,
            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          Stacks 👋
        </Text>
      </View>

      {/* Right Section: Profile Circle with Flight Point */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "flex-end",
          marginLeft: "auto", // Pushes the content to the far right
        }}
      >
        <View
          style={{
            backgroundColor: "#4B5563", // Dark gray background color
            borderRadius: 50,
            paddingHorizontal: 16,
            justifyContent: "center",
            alignItems: "center",
            height: 50, // Increased height to fit text
            width: 140, // Increased width to fit text
            flexDirection: "row", // Aligns items horizontally
            marginBottom: 8, // Adds space between circle and text below
          }}
        >
          <View
            style={{
              backgroundColor: "#6b7280", // Equivalent to bg-gray-500
              borderRadius: 50,
              width: 28,
              height: 28,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#fff", // Equivalent to text-white
                fontWeight: "600", // Equivalent to font-semi-bold
              }}
            >
              P
            </Text>
          </View>

          {/* Flight Information inside the same dark gray circle */}
          <View style={{ marginLeft: 8 }}> {/* Adds space between 'P' and text */}
            <Text
              style={{
                color: "#fff", // Equivalent to text-white
                fontWeight: "400", // Equivalent to font-semi-bold
                fontSize: 12, // Slightly smaller text for alignment
              }}
            >
              Flight Point
            </Text>

            <Text
              style={{
                color: "#fff", // Equivalent to text-white
                fontWeight: "400", // Equivalent to font-semi-bold
                fontSize: 12, // Slightly smaller text for alignment
              }}
            >
              ✈️ 5,231
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
