import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

interface DrawerToggleProps {
  color?: string;
  size?: number;
}

const DrawerToggle = ({ color = "#fff", size = 24 }: DrawerToggleProps) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <MaterialIcons name="menu" size={size} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});

export default DrawerToggle;
