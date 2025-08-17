import React from "react";
import { Image, Text, View } from "react-native";

const NewsItem = ({
  title,
  image,
  views,
  date,
}: {
  title: string;
  image: any;
  views: number;
  date: string;
}) => {
  return (
    <View
      style={{
        width: 200,
        height: 180,
        marginRight: 10,
        marginVertical: 10,
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <View style={{ flex: 1 }}>
        <Image
          source={image}
          style={{
            width: "100%",
            height: "60%",
            resizeMode: "cover",
          }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 5,
            paddingHorizontal: 10,
          }}
        >
          {title}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderTopWidth: 1,
          borderTopColor: "#eee",
        }}
      >
        <Text style={{ fontSize: 12, color: "#999" }}>India Tv News</Text>
        <Text style={{ fontSize: 12, color: "#999" }}>{date}</Text>
      </View>
    </View>
  );
};

export default NewsItem;
