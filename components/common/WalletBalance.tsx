import { Colors } from "@/constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface WalletBalanceProps {
  balance?: number;
  onPress?: () => void;
  variant?: "header" | "card";
}

const WalletBalance = ({
  balance = 500,
  onPress,
  variant = "header",
}: WalletBalanceProps) => {
  return (
    <Pressable
      style={[
        styles.container,
        variant === "card" ? styles.cardVariant : styles.headerVariant,
      ]}
      onPress={onPress}
    >
      <MaterialIcons
        name="account-balance-wallet"
        size={variant === "card" ? 24 : 20}
        color={variant === "card" ? Colors.custom.color1 : "#fff"}
      />
      <Text
        style={[
          styles.balanceText,
          variant === "card" ? styles.cardText : styles.headerText,
        ]}
      >
        ₹{balance}
      </Text>
      {variant === "card" && (
        <MaterialIcons name="add" size={20} color={Colors.custom.color1} />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  headerVariant: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  cardVariant: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e9ecef",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  balanceText: {
    fontWeight: "500",
  },
  headerText: {
    color: "#fff",
    fontSize: 14,
  },
  cardText: {
    color: "#333",
    fontSize: 16,
    flex: 1,
  },
});

export default WalletBalance;
