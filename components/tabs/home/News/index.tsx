import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";
const NewsItem = React.lazy(() => import("./NewsItem"));

const MockBlogs = [
  {
    id: "1",
    title: "Astro App in ND TV",
    image: require("@/assets/images/blogs/blog1.jpg"),
    description: "A deep dive into the principles of Vedic astrology.",
    views: 109,
    date: "2023-10-01",
  },
  {
    id: "2",
    title: "Astrology app in India TV News",
    image: require("@/assets/images/blogs/blog2.webp"),
    description: "How gemstones can influence your astrological chart.",
    views: 85,
    date: "2023-09-15",
  },
];

const News = () => {
  const router = useRouter();

  const handleSeeAll = () => {
    router.push("/news");
  };
  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#333",
            marginBottom: 10,
          }}
        >
          Astro App in News
        </Text>

        <Pressable onPress={handleSeeAll}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
              color: Colors.custom.color2,
              marginBottom: 10,
            }}
          >
            See All
          </Text>
        </Pressable>
      </View>

      <FlatList
        data={MockBlogs}
        horizontal
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        overScrollMode="never"
        bounces={false}
        renderItem={({ item }) => (
          <React.Suspense
            fallback={<View style={{ width: 150, height: 200 }} />}
          >
            <NewsItem
              title={item.title}
              image={item.image}
              views={item.views}
              date={item.date}
            />
          </React.Suspense>
        )}
      />
    </View>
  );
};

export default News;
