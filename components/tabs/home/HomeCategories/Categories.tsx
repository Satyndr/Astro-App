import { Colors } from "@/constants/Colors";
import { AstroCategories } from "@/mock_data/astroCategories";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";
const CategoryItem = React.lazy(() => import("./CategoryItem"));

const HomeCategories = ({ fromHomePage }: { fromHomePage?: boolean }) => {
  const router = useRouter();
  const handleSeeAll = () => {
    router.push("/CategoriesPage");
  };
  return (
    <View style={{ width: "100%", paddingVertical: 15 }}>
      {fromHomePage && (
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
            Categories
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
      )}

      <FlatList
        data={AstroCategories}
        renderItem={({ item, index }) => (
          <React.Suspense
            fallback={
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 999,
                  backgroundColor: "#f0f0f0",
                }}
              />
            }
          >
            <CategoryItem
              item={item}
              index={index}
              fromHomePage={fromHomePage}
            />
          </React.Suspense>
        )}
        numColumns={fromHomePage ? undefined : 3}
        keyExtractor={(item) => item.id}
        horizontal={fromHomePage ? true : false}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        overScrollMode="never"
        contentContainerStyle={{
          display: "flex",
          marginVertical: 10,
          gap: 10,
        }}
      />
    </View>
  );
};

export default HomeCategories;
