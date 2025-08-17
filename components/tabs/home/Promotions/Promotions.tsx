import React, { Suspense } from "react";
import { Dimensions, FlatList, View } from "react-native";
const Promotion = React.lazy(() => import("./Promotion"));

const MockPromotions = [
  {
    id: "1",
    title: "50% off on first consultation",
    image: require("@/assets/images/promotions/prom1.jpg"),
  },
  {
    id: "2",
    title: "Free Kundali with every purchase",
    image: require("@/assets/images/promotions/prom2.jpg"),
  },
  {
    id: "3",
    title: "Buy one get one free on all services",
    image: require("@/assets/images/promotions/prom3.jpg"),
  },
];

const Promotions = () => {
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <FlatList
        data={MockPromotions}
        horizontal
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingLeft: 10,
          paddingVertical: 5,
        }}
        overScrollMode="never"
        bounces={false}
        showsHorizontalScrollIndicator={false}
        // decelerationRate="fast"
        // snapToAlignment="start"
        snapToInterval={Dimensions.get("window").width * 0.95 + 10}
        pagingEnabled
        renderItem={({ item }) => (
          <Suspense
            fallback={
              <View
                style={{
                  width: Dimensions.get("window").width * 0.9,
                  height: 150,
                  marginRight: 10,
                  borderRadius: 10,
                  backgroundColor: "#f0f0f0",
                }}
              />
            }
          >
            <Promotion image={item.image} />
          </Suspense>
        )}
      />
    </View>
  );
};

export default Promotions;
