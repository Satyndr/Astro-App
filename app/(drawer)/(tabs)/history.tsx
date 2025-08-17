import HistoryHeader from "@/components/tabs/history/HistoryHeader";
import { HistoryData } from "@/mock_data/history";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

const RenderHistorySession = lazy(
  () => import("@/components/tabs/history/RenderHistorySession")
);

const HistoryFilters = lazy(
  () => import("@/components/tabs/history/HistoryFilters")
);

const history = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(false);
  const [filteredHistory, setFilteredHistory] = useState<any>([]);

  const getFilteredHistory = () => {
    setLoading(true);
    const filtered = HistoryData.filter((session) => {
      if (activeFilter === "All") {
        return true;
      } else if (activeFilter === "Chat" || activeFilter === "Call") {
        return session.sessionType === activeFilter;
      } else {
        return session.status === activeFilter;
      }
    });
    setFilteredHistory(filtered);
    setLoading(false);
  };

  useEffect(() => {
    getFilteredHistory();
  }, [activeFilter]);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <HistoryHeader />
      <View style={{ flex: 1 }}>
        {/* Filter tabs */}
        <Suspense fallback={<View style={{ height: 50 }}></View>}>
          <HistoryFilters
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        </Suspense>

        {/* History list */}
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
              data={filteredHistory}
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
                  <RenderHistorySession item={item} />
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
                    paddingTop: 50,
                  }}
                >
                  <Text style={{ fontSize: 16, color: "#888" }}>
                    No history found
                  </Text>
                  <Text style={{ fontSize: 14, color: "#aaa", marginTop: 5 }}>
                    Your consultation history will appear here
                  </Text>
                </View>
              }
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default history;
