import React from "react";
import { Dimensions, Image, View } from "react-native";

const Promotion = ({ image }: { image: any }) => {
  return (
    <View
      style={{
        width: Dimensions.get("window").width * 0.95,
        marginRight: 10,
        borderRadius: 10,
      }}
    >
      <Image
        source={image}
        style={{
          width: "100%",
          height: 150,
          borderRadius: 10,
          marginTop: 5,
          objectFit: "cover",
        }}
      />
    </View>
  );
};

export default Promotion;
