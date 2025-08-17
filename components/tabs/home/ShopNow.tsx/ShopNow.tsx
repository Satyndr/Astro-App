import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import React, { Suspense } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

const ShopItem = React.lazy(() => import("./ShopItem"));

const ShoppingCategories = [
  {
    id: "1",
    name: "Gemstone",
    image: require("@/assets/images/shoppingCategories/gemstone.png"),
  },
  {
    id: "2",
    name: "Rudraksha",
    image: require("@/assets/images/shoppingCategories/rudraksha.jpg"),
  },
  {
    id: "3",
    name: "Yantra",
    image: require("@/assets/images/shoppingCategories/rudramala.webp"),
  },
  {
    id: "4",
    name: "Puja Items",
    image: require("@/assets/images/shoppingCategories/gemstone.png"),
  },
  {
    id: "5",
    name: "Books",
    image: require("@/assets/images/shoppingCategories/gemstone.png"),
  },
];

const ShopNow = () => {
  const router = useRouter();

  const handleSeeAll = () => {
    router.push("/shopping");
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
          Shop Now
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
        data={ShoppingCategories}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        overScrollMode="never"
        bounces={false}
        renderItem={({ item, index }) => (
          <Suspense
            fallback={
              <View
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: "#f0f0f0",
                  borderRadius: 10,
                  marginRight: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></View>
            }
          >
            <ShopItem
              title={item.name}
              image={item.image}
              style={{
                marginRight: index === ShoppingCategories.length - 1 ? 0 : 10,
              }}
            />
          </Suspense>
        )}
      />
    </View>
  );
};

export default ShopNow;
