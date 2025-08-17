import { Notification } from "@/constants/types";
import { MockNotification } from "@/mock_data/notifications";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

const notifications = () => {
  const [Notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setNotifications(MockNotification);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Text>Loading notifications...</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <FlatList
        data={Notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 15,
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
              width: "100%",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text style={{ color: "#888", fontSize: 12 }}>
              {new Date(item.timestamp).toLocaleString()}
            </Text>
          </View>
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
            <Text>No notifications available</Text>
          </View>
        )}
      />
    </View>
  );
};

export default notifications;
