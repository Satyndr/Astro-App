import LiveHeader from "@/components/tabs/live/LiveHeader";
import Ongoing from "@/components/tabs/live/Ongoing/Ongoing";
import Upcoming from "@/components/tabs/live/Upcoming/Upcoming";
import { Colors } from "@/constants/Colors";
import React, { useEffect, useState } from "react";
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

const live = () => {
  const [activeTab, setActiveTab] = useState("Ongoing");
  const { width } = useWindowDimensions();
  const animatedValue = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: activeTab === "Ongoing" ? 0 : 1,
      duration: 200,
      delay: 0,
      useNativeDriver: true,
      easing: Easing.out(Easing.cubic),
    }).start();
  }, [activeTab]);

  // Calculate translateX for the indicator (tab width is 50% of screen)
  const tabTranslateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [width * 0.1, width * 0.6],
  });

  return (
    <View
      style={{
        flex: 1,
        height: "100%",
        width: "100%",
        backgroundColor: "#FFF",
      }}
    >
      <LiveHeader />
      <View style={styles.tabContainer}>
        <Animated.View
          style={[
            styles.tabIndicator,
            {
              transform: [{ translateX: tabTranslateX }],
            },
          ]}
        />
        {/*Ongoing and Upcoming Tab*/}
        <View style={styles.tabRow}>
          {["Ongoing", "Upcoming"].map((item, index) => (
            <Pressable
              key={index}
              onPress={() => setActiveTab(item)}
              style={styles.tabButton}
            >
              <Text style={styles.tabText}>{item}</Text>
            </Pressable>
          ))}
        </View>
        {/* content */}
        <View style={{ flex: 1 }}>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: "row",
              width: "200%",
              transform: [
                {
                  translateX: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -width],
                  }),
                },
              ],
            }}
          >
            <View
              style={{
                width: "50%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ongoing />
            </View>
            <View
              style={{
                width: "50%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Upcoming />
            </View>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    position: "relative",
  },
  tabIndicator: {
    width: "30%",
    height: 40,
    borderBottomColor: Colors.custom.color1,
    borderBottomWidth: 4,
    position: "absolute",
    top: 0,
    // left is animated
  },
  tabRow: {
    flexDirection: "row",
    width: "100%",
  },
  tabButton: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default live;
