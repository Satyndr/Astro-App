import { Colors } from "@/constants/Colors";
import { AstroCategory } from "@/constants/types";
import { AstroCategories } from "@/mock_data/astroCategories";
import React, { useEffect, useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";

const Categories = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [categories, setCategories] = useState<AstroCategory[]>([]);

  const RenderItem = ({ item, index }: { item: AstroCategory; index: any }) => {
    return (
      <Pressable
        onPress={() => {
          setActiveTab(item.name);
        }}
        style={[
          {
            flexDirection: "row",
            alignItems: "center",

            height: 35,
            paddingHorizontal: 10,
            marginLeft: index === 0 ? 10 : 0,
            marginRight: index === 6 ? 10 : 0,
          },
          {
            borderWidth: 1.5,
            borderColor:
              activeTab === item.name ? Colors.custom.color1 : "transparent",
            borderRadius: 999,
          },
        ]}
      >
        <Image
          source={item.icon}
          style={{
            width: 20,
            height: 20,
            borderRadius: 10,
            marginRight: 5,
          }}
        />
        <Text
          style={{
            fontSize: 12,
            fontWeight: "500",
            color: "#000",
            textAlign: "center",
          }}
        >
          {item.name}
        </Text>
      </Pressable>
    );
  };

  useEffect(() => {
    // Fetch categories from the server or use mock data
    setCategories(AstroCategories);
  }, []);

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={RenderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        overScrollMode="never"
        contentContainerStyle={{
          display: "flex",
          marginVertical: 10,
          gap: 10,
        }}
      />
    </View>
  );
};

export default Categories;
