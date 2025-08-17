import React, { Suspense } from "react";
import { Text, View } from "react-native";
const Scene = React.lazy(() => import("./Scene"));

const BehindTheScenes = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingVertical: 15,
      }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#333",
            marginBottom: 10,
          }}
        >
          Behind the Scenes
        </Text>
      </View>

      <Suspense
        fallback={
          <View
            style={{
              height: 200,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f0f0f0",
              borderRadius: 10,
            }}
          ></View>
        }
      >
        <Scene source={require("@/assets/images/astro.mp4")} />
      </Suspense>
    </View>
  );
};

export default BehindTheScenes;
