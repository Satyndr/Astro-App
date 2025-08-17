import { Colors } from "@/constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React from "react";
import { Dimensions, Pressable, StatusBar, Text, View } from "react-native";

interface HeaderProps {
  children: React.ReactNode;
  title?: string;
}

const Header = ({ children, title }: HeaderProps) => {
  const navigation = useNavigation();
  const statusBarHeight = StatusBar.currentHeight;

  return (
    <View
      style={{
        backgroundColor: Colors.custom.color1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: statusBarHeight,
        paddingHorizontal: "5%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          height: Dimensions.get("window").height * 0.07,
        }}
      >
        {/* hamburger icon */}
        <Pressable
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}
        >
          <MaterialIcons name="menu" size={24} color="#fff" />
        </Pressable>

        {/* title */}
        {title && (
          <Text
            style={{
              fontSize: title === "Astro App" ? 20 : 14,
              fontWeight: "bold",
              color: "#fff",
              textAlign: "left",
            }}
          >
            {title}
          </Text>
        )}
      </View>
      <View>{children}</View>
    </View>
  );
};
export default Header;
