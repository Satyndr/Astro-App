import ChatHeader from "@/components/tabs/chat/ChatHeader";
import { Astrologers } from "@/mock_data/astrologers";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

const RenderChatAstrologer = lazy(
  () => import("@/components/tabs/chat/RenderChatAstrologer")
);

const Categories = lazy(() => import("@/components/tabs/chat/Categories"));

const chat = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [loading, setLoading] = useState(false);
  const [filteredAstrologers, setFilteredAstrologers] = useState<any>([]);

  const getFilteredAstrologers = () => {
    setLoading(true);
    const filtered = Astrologers.filter((astro) => {
      if (activeTab === "All") {
        return true;
      } else {
        return astro.category.includes(activeTab);
      }
    });
    setFilteredAstrologers(filtered);
    setLoading(false);
  };

  useEffect(() => {
    getFilteredAstrologers();
  }, [activeTab]);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ChatHeader />
      <View style={{ flex: 1 }}>
        {/* category tabs */}
        <Suspense fallback={<View style={{ height: 50 }}></View>}>
          <Categories activeTab={activeTab} setActiveTab={setActiveTab} />
        </Suspense>

        {/* chat list */}
        <View style={{ flex: 1 }}>
          {loading ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Loading...</Text>
            </View>
          ) : (
            <FlatList
              data={filteredAstrologers}
              renderItem={({ item }) => (
                <Suspense
                  fallback={
                    <View
                      style={{
                        width: "100%",
                        height: 100,
                        backgroundColor: "#f0f0f0",
                        marginBottom: 10,
                        borderRadius: 5,
                      }}
                    ></View>
                  }
                >
                  <RenderChatAstrologer item={item} />
                </Suspense>
              )}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: 10,
                paddingTop: 10,
                paddingHorizontal: 10,
              }}
              initialNumToRender={10}
              updateCellsBatchingPeriod={500}
              overScrollMode="never"
              bounces={false}
              ListEmptyComponent={
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>No Astrologers Available</Text>
                </View>
              }
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default chat;
