import { AstroCategory } from "@/constants/types";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text } from "react-native";

const CategoryItem = ({
  item,
  index,
  fromHomePage,
}: {
  item: AstroCategory;
  index: any;
  fromHomePage?: boolean;
}) => {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => {
        router.push("/(drawer)/(tabs)/call");
      }}
      style={[
        {
          flexDirection: "column",
          alignItems: "center",

          //   height: 35,
          paddingHorizontal: 10,
          marginLeft: index === 0 ? 10 : 0,
          marginRight: index === 6 ? 10 : 0,
        },
        !fromHomePage && {
          width: "33%",
        },
      ]}
    >
      <Image
        source={item.icon}
        style={{
          width: 50,
          height: 50,
          borderRadius: 10,
          marginRight: 5,
        }}
      />
      <Text
        style={{
          fontSize: 12,
          fontWeight: "500",
          color: "#000",
          textAlign: "center",
        }}
      >
        {item.name}
      </Text>
    </Pressable>
  );
};

export default CategoryItem;
