import React from "react";
import { Image, Text, View } from "react-native";

const ShopItem = ({ title, image }: any) => {
  return (
    <View
      style={{
        marginRight: 10,
      }}
    >
      <Image
        source={image}
        style={{ width: 100, height: 100, borderRadius: 10 }}
      />
      <Text
        style={{
          fontSize: 14,
          fontWeight: "bold",
          marginTop: 5,
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default ShopItem;
