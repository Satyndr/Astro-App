import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const OngoingBox = ({ item }: any) => {
  const handleShare = () => {
    // Implement share functionality here
    console.log(`Sharing details for ${item.name}`);
  };

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text>{item.time}</Text>
        <Text style={styles.time}>Live</Text>
      </View>
      <Pressable onPress={handleShare}>
        {/* share Icon */}
        <MaterialIcons name="share" size={24} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    width: "96%",
    alignSelf: "center",
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  image: {
    height: "100%",
    width: "25%",
    aspectRatio: 1,
    borderRadius: 10,
  },
  infoContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
    width: "55%",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  time: {
    color: "red",
    fontWeight: "500",
  },
});

export default OngoingBox;
