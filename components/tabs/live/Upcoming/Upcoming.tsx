import { UpcomingAstrologers } from "@/mock_data/astrologers";
import React, { Suspense, useEffect } from "react";
import { FlatList, Text, View } from "react-native";

const UpcomingBox = React.lazy(() => import("./UpcomingBox"));

const Upcoming = () => {
  const [astrologerList, setAstrologerList] =
    React.useState(UpcomingAstrologers);

  useEffect(() => {
    setAstrologerList(UpcomingAstrologers);
  }, []);

  return (
    <FlatList
      data={astrologerList}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Suspense fallback={<View style={{ height: 100 }}></View>}>
          <UpcomingBox item={item} />
        </Suspense>
      )}
      contentContainerStyle={{ paddingBottom: 5 }}
      ListEmptyComponent={() => (
        <View
          style={{
            padding: 20,
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Text style={{ fontSize: 16, color: "#888", marginTop: "80%" }}>
            No upcoming astrologers available at the moment.
          </Text>
        </View>
      )}
      showsVerticalScrollIndicator={false}
      scrollEnabled={true}
      overScrollMode="never"
    />
  );
};

export default Upcoming;
