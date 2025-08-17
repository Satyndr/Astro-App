import { OngoingAstrologers } from "@/mock_data/astrologers";
import React, { Suspense, useEffect } from "react";
import { FlatList, Text, View } from "react-native";

const OngoingBox = React.lazy(() => import("./OngoingBox"));

const Ongoing = () => {
  const [astrologerList, setAstrologerList] =
    React.useState(OngoingAstrologers);

  useEffect(() => {
    setAstrologerList([]);
  }, []);

  return (
    <FlatList
      data={astrologerList}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Suspense fallback={<View style={{ height: 100 }}></View>}>
          <OngoingBox item={item} />
        </Suspense>
      )}
      contentContainerStyle={{ paddingBottom: 10 }}
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
            No live astrologers available at the moment.
          </Text>
        </View>
      )}
      showsVerticalScrollIndicator={false}
      overScrollMode="never"
    />
  );
};

export default Ongoing;
