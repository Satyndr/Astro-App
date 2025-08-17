import React from "react";
import { Image, Text, View } from "react-native";

const BlogItem = ({
  title,
  image,
  description,
  views,
  date,
}: {
  title: string;
  image: any;
  description: string;
  views: number;
  date: string;
}) => {
  return (
    <View
      style={{
        width: 250,
        height: 200,
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
      <Image
        source={image}
        style={{
          width: "100%",
          height: "65%",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          objectFit: "cover",
        }}
      />
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "bold",
            marginBottom: 5,
            paddingHorizontal: 10,
          }}
        >
          {title}
        </Text>
        {/* <Text
          style={{
            fontSize: 12,
            color: "#666",
            paddingHorizontal: 10,
            flexShrink: 1,
          }}
          numberOfLines={3}
        >
          {description}
        </Text> */}
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
        <Text style={{ fontSize: 12, color: "#999" }}>{date}</Text>
        <Text style={{ fontSize: 12, color: "#999" }}>{views} views</Text>
      </View>
    </View>
  );
};

export default BlogItem;
