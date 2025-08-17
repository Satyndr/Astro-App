import { Colors } from "@/constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import React from "react";
import { Dimensions, Text, View } from "react-native";

function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: true,
        headerStyle: {
          backgroundColor: Colors.custom.color1,
          height: Dimensions.get("window").height * 0.12,
        },
        tabBarStyle: {
          backgroundColor: Colors.custom.color1,
          elevation: 0,
          borderTopWidth: 0,
          flexDirection: "row",
          justifyContent: "center",
        },
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,

        tabBarIcon({ focused, color, size }) {
          let iconName: React.ComponentProps<typeof MaterialIcons>["name"];
          let label = "";

          switch (route.name) {
            case "home":
              iconName = "home";
              label = "Home";
              break;
            case "chat":
              iconName = "chat";
              label = "Chat";
              break;
            case "live":
              iconName = "live-tv";
              label = "Live";
              break;
            case "call":
              iconName = "call";
              label = "Call";
              break;
            case "history":
              iconName = "history";
              label = "History";
              break;
            default:
              iconName = "home";
              label = "Home";
              break;
          }

          return (
            <View
              style={{
                backgroundColor: focused ? "#FFF" : "transparent",
                borderRadius: 999,
                // padding: 8,
                alignItems: "center",
                justifyContent: "center",
                // aspectRatio: 1,
                flexDirection: "column",
                height: 35,
                width: 60,
                transform: [
                  {
                    translateY: 5,
                  },
                ],
              }}
            >
              <MaterialIcons
                name={iconName}
                size={20}
                color={focused ? Colors.custom.color1 : "#fff"}
                // style={{
                //   backgroundColor: "red",
                // }}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "600",
                  color: focused ? Colors.custom.color1 : "#fff",
                }}
              >
                {label}
              </Text>
            </View>
          );
        },
      })}
      initialRouteName="chat"
    >
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="chat" options={{ headerShown: false }} />
      <Tabs.Screen name="live" options={{ headerShown: false }} />
      <Tabs.Screen name="call" options={{ headerShown: false }} />
      <Tabs.Screen name="history" options={{ headerShown: false }} />
    </Tabs>
  );
}

export default TabLayout;
