import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

interface HistoryFiltersProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const filters = ["All", "Chat", "Call", "Completed", "Missed", "Cancelled"];

const HistoryFilters = ({
  activeFilter,
  setActiveFilter,
}: HistoryFiltersProps) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {filters.map((filter) => (
          <Pressable
            key={filter}
            style={[
              styles.filterButton,
              activeFilter === filter && styles.activeFilterButton,
            ]}
            onPress={() => setActiveFilter(filter)}
          >
            <Text
              style={[
                styles.filterText,
                activeFilter === filter && styles.activeFilterText,
              ]}
            >
              {filter}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  scrollContent: {
    paddingHorizontal: 15,
    gap: 10,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  activeFilterButton: {
    backgroundColor: "#FF6B35",
    borderColor: "#FF6B35",
  },
  filterText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  activeFilterText: {
    color: "#fff",
  },
});

export default HistoryFilters;
