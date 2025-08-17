import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const Service = ({
  title,
  backgroundColor,
  logo,
}: {
  title: string;
  backgroundColor: string;
  logo: any;
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: `${backgroundColor}77`,
          borderColor: backgroundColor,
        },
      ]}
    >
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  logo: {
    width: "40%",
    height: "40%",
    marginBottom: 5,
    borderRadius: 5,
  },
  title: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "500",
  },
});

export default Service;
