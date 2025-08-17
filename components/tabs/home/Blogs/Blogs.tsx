import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";
const BlogItem = React.lazy(() => import("./BlogItem"));

const MockBlogs = [
  {
    id: "1",
    title: "Understanding Vedic Astrology",
    image: require("@/assets/images/blogs/blog1.jpg"),
    description: "A deep dive into the principles of Vedic astrology.",
    views: 109,
    date: "2023-10-01",
  },
  {
    id: "2",
    title: "The Power of Gemstones in Astrology",
    image: require("@/assets/images/blogs/blog2.webp"),
    description: "How gemstones can influence your astrological chart.",
    views: 85,
    date: "2023-09-15",
  },
  {
    id: "3",
    title: "Kundali Matching: A Guide",
    image: require("@/assets/images/blogs/blog3.jpg"),
    description: "Everything you need to know about Kundali matching.",

    views: 120,
    date: "2023-08-20",
  },
  {
    id: "4",
    title: "Astrology and Daily Life",
    image: require("@/assets/images/blogs/blog4.png"),
    description: "How astrology can guide your daily decisions.",
    views: 95,
    date: "2023-07-10",
  },
];

const Blogs = () => {
  const router = useRouter();

  const handleSeeAll = () => {
    router.push("/blogs");
  };
  return (
    <View style={{ width: "100%", paddingVertical: 15 }}>
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
          Latest from Blogs
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
            <BlogItem
              title={item.title}
              image={item.image}
              description={item.description}
              views={item.views}
              date={item.date}
            />
          </React.Suspense>
        )}
      />
    </View>
  );
};

export default Blogs;
