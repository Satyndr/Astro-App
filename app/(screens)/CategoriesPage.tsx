import HomeCategories from "@/components/tabs/home/HomeCategories/Categories";
import React from "react";
import { View } from "react-native";

const CategoriesPage = () => {
  return (
    <View>
      <HomeCategories fromHomePage={false} />
    </View>
  );
};

export default CategoriesPage;
