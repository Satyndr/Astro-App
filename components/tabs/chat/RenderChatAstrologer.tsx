import CustomButton from "@/components/common/CustomButton";
import { Astrologer } from "@/constants/types";
import { lazy, Suspense } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Stars = lazy(() => import("@/components/tabs/Stars"));

const RenderChatAstrologer = ({ item }: { item: Astrologer }) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.category}>{item.category.join(", ")}</Text>
        <Text style={styles.language}>{item.language.join(", ")}</Text>
        <Text style={styles.experience}>
          Experience: {item.experience} years
        </Text>
      </View>
      <View style={styles.actionContainer}>
        <CustomButton
          title="Free"
          onPress={() => {
            // Handle chat button press
          }}
          style={styles.button}
        />
        <Suspense fallback={null}>
          <Stars rating={item.rating} size={13} />
        </Suspense>
        <Text style={styles.orders}>{item.orders} orders</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    flexDirection: "row",
    gap: 10,
  },
  image: {
    width: "25%",
    height: 50,
    aspectRatio: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  infoContainer: {
    width: "43%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  name: {
    fontWeight: "600",
  },
  category: {
    fontSize: 12,
  },
  language: {
    fontSize: 12,
    color: "#888",
  },
  experience: {
    fontSize: 12,
    color: "#888",
    marginTop: 5,
  },
  actionContainer: {
    width: "25%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  button: {
    borderRadius: 7,
    paddingVertical: 7,
    width: 80,
    marginBottom: 5,
  },
  orders: {
    fontSize: 12,
    color: "#888",
    marginTop: 5,
  },
});

export default RenderChatAstrologer;
