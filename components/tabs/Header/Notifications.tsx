import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable } from "react-native";

const Notifications = () => {
  const router = useRouter();
  const handleNotificationsPress = () => {
    router.push("/(screens)/notifications");
  };
  return (
    <Pressable onPress={handleNotificationsPress}>
      <MaterialIcons name="notifications" size={24} color="#fff" />
    </Pressable>
  );
};

export default Notifications;
