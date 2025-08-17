import React from "react";
import { Image, Text, View } from "react-native";

const Strip = () => {
  return (
    <View
      style={{
        height: "7%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Image
        source={require("@/assets/images/strip2.png")}
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          resizeMode: "cover",
        }}
      />
      <Text
        style={{
          color: "#fff",
          fontSize: 15,
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        First Chat Free on Signup
      </Text>
    </View>
  );
};

export default Strip;
