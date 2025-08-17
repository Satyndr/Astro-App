import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Pressable, Text } from "react-native";

const Amount = () => {
  const router = useRouter();
  const [amount, setAmount] = useState<number>(0);

  useEffect(() => {
    const fetchAmount = async () => {
      const amt = await AsyncStorage.getItem("amount");
      setAmount(amt !== null ? Number(amt) : 0);
    };

    fetchAmount();

    const interval = setInterval(fetchAmount, 1000);

    return () => clearInterval(interval);
  }, []);

  const handlePress = () => {
    router.push("/(screens)/wallet");
  };

  return (
    <Pressable
      style={{
        backgroundColor: "green",
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: "#fff",
        }}
      >
        ₹ {amount}
      </Text>
    </Pressable>
  );
};

export default Amount;
