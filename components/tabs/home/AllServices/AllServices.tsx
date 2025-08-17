import React, { lazy, Suspense } from "react";
import { FlatList, StyleSheet, View } from "react-native";
const Service = lazy(() => import("./Service"));

const MockServices = [
  {
    id: "1",
    title: "Daily Horoscope",
    logo: require("@/assets/images/icon.png"),
    backgroundColor: "#FFC0CB", // pink
  },
  {
    id: "2",
    title: "Free Kundali",
    logo: require("@/assets/images/icon.png"),
    backgroundColor: "#ADD8E6", // lightblue
  },
  {
    id: "3",
    title: "Kundali Matching",
    logo: require("@/assets/images/icon.png"),
    backgroundColor: "#90EE90", // lightgreen
  },
  {
    id: "4",
    title: "Shopping",
    logo: require("@/assets/images/icon.png"),
    backgroundColor: "#F08080", // lightcoral
  },
  {
    id: "5",
    title: "Categories",
    logo: require("@/assets/images/icon.png"),
    backgroundColor: "#E6E6FA", // lavender
  },
  {
    id: "6",
    title: "Blog",
    logo: require("@/assets/images/icon.png"),
    backgroundColor: "#FAFAD2", // lightgoldenrodyellow
  },
];

const AllServices = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={MockServices}
        horizontal
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        overScrollMode="never"
        bounces={false}
        renderItem={({ item }) => (
          <Suspense fallback={<View style={styles.fallback} />}>
            <Service
              title={item.title}
              backgroundColor={item.backgroundColor}
              logo={item.logo}
            />
          </Suspense>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 10,
    justifyContent: "center",
  },
  listContent: {
    paddingHorizontal: 10,
  },
  fallback: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default AllServices;
