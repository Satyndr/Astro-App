import CustomButton from "@/components/common/CustomButton";
import { HistorySession } from "@/constants/types";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { lazy, Suspense } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Stars = lazy(() => import("@/components/tabs/Stars"));

const RenderHistorySession = ({ item }: { item: HistorySession }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "#4CAF50";
      case "Missed":
        return "#FF9800";
      case "Cancelled":
        return "#F44336";
      default:
        return "#888";
    }
  };

  const getSessionIcon = (type: string) => {
    return type === "Chat" ? "chat" : "call";
  };

  return (
    <View style={styles.container}>
      <Image source={item.astrologer.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.astrologer.name}</Text>
        <Text style={styles.speciality}>{item.astrologer.speciality}</Text>
        <View style={styles.sessionInfo}>
          <MaterialIcons
            name={getSessionIcon(item.sessionType)}
            size={16}
            color="#666"
          />
          <Text style={styles.sessionType}>{item.sessionType}</Text>
          <Text style={styles.duration}>• {item.duration}</Text>
        </View>
        <Text style={styles.date}>
          {item.date} at {item.timestamp}
        </Text>
      </View>
      <View style={styles.actionContainer}>
        <View style={styles.statusContainer}>
          <Text style={[styles.status, { color: getStatusColor(item.status) }]}>
            {item.status}
          </Text>
          {item.amount > 0 && <Text style={styles.amount}>₹{item.amount}</Text>}
        </View>
        <Suspense fallback={null}>
          <Stars rating={item.astrologer.rating} size={13} />
        </Suspense>
        <CustomButton
          title={item.sessionType === "Chat" ? "Chat Again" : "Call Again"}
          onPress={() => {
            // Handle re-connect action
          }}
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    flexDirection: "row",
    gap: 12,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 2,
  },
  speciality: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  sessionInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  sessionType: {
    fontSize: 12,
    color: "#666",
    marginLeft: 4,
  },
  duration: {
    fontSize: 12,
    color: "#888",
    marginLeft: 4,
  },
  date: {
    fontSize: 12,
    color: "#888",
  },
  actionContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
    minWidth: 90,
    gap: 3,
  },
  statusContainer: {
    alignItems: "flex-end",
  },
  status: {
    fontSize: 12,
    fontWeight: "500",
    marginBottom: 2,
  },
  amount: {
    fontSize: 12,
    color: "#4CAF50",
    fontWeight: "500",
  },
  button: {
    borderRadius: 7,
    paddingVertical: 6,
    paddingHorizontal: 12,
    minWidth: 80,
  },
});

export default RenderHistorySession;
