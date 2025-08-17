import { Colors } from "@/constants/Colors";
import { Astrologer } from "@/constants/types";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { lazy, Suspense } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const Stars = lazy(() => import("@/components/tabs/Stars"));

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
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
  info: {
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
  actions: {
    width: "25%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  button: {
    borderRadius: 99,
    padding: 8,
    backgroundColor: Colors.custom.color1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    gap: 5,
    marginBottom: 5,
  },
  orders: {
    fontSize: 12,
    color: "#888",
    marginTop: 5,
  },
});

const RenderCallAstrologer = ({ item }: { item: Astrologer }) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.category}>{item.category.join(", ")}</Text>
        <Text style={styles.language}>{item.language.join(", ")}</Text>
        <Text style={styles.experience}>
          Experience: {item.experience} years
        </Text>
        {/* <Text>₹ {item.price} / min</Text> */}
      </View>
      <View style={styles.actions}>
        <View style={styles.buttons}>
          {/* call icon */}
          <Pressable style={styles.button}>
            <MaterialIcons name="call" size={20} color="#000" />
          </Pressable>
          {/*video call icon */}
          <Pressable style={styles.button}>
            <MaterialIcons name="video-call" size={20} color="#000" />
          </Pressable>
        </View>
        <Suspense fallback={null}>
          <Stars rating={item.rating} size={12} style={{ marginBottom: 5 }} />
        </Suspense>
        <Text style={styles.orders}>{item.orders} orders</Text>
      </View>
    </View>
  );
};

export default RenderCallAstrologer;
