import PaymentModal from "@/components/payment/PaymentModal";
import { Colors } from "@/constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface Transaction {
  id: string;
  type: "credit" | "debit";
  amount: number;
  description: string;
  date: string;
  timestamp: string;
  status: "completed" | "pending" | "failed";
}

interface RechargeOption {
  id: string;
  amount: number;
  bonus: number;
  popular?: boolean;
}

const rechargeOptions: RechargeOption[] = [
  { id: "1", amount: 100, bonus: 0 },
  { id: "2", amount: 200, bonus: 10 },
  { id: "3", amount: 500, bonus: 50, popular: true },
  { id: "4", amount: 1000, bonus: 150 },
  { id: "5", amount: 2000, bonus: 400 },
  { id: "6", amount: 5000, bonus: 1200 },
];

const mockTransactions: Transaction[] = [
  {
    id: "1",
    type: "debit",
    amount: 150,
    description: "Chat with Astrologer Raj Kumar",
    date: "Today",
    timestamp: "2:30 PM",
    status: "completed",
  },
  {
    id: "2",
    type: "credit",
    amount: 500,
    description: "Wallet Recharge",
    date: "Yesterday",
    timestamp: "10:15 AM",
    status: "completed",
  },
  {
    id: "3",
    type: "debit",
    amount: 300,
    description: "Call with Astrologer Priya Sharma",
    date: "2 days ago",
    timestamp: "6:45 PM",
    status: "completed",
  },
  {
    id: "4",
    type: "credit",
    amount: 1000,
    description: "Welcome Bonus",
    date: "1 week ago",
    timestamp: "12:00 PM",
    status: "completed",
  },
];

const wallet = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const statusBarHeight = StatusBar.currentHeight || 0;
  const [currentBalance, setCurrentBalance] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState<string>("");
  const [paymentModalVisible, setPaymentModalVisible] = useState(false);
  const [selectedRecharge, setSelectedRecharge] =
    useState<RechargeOption | null>(null);

  const handleMenuPress = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const handleRecharge = (amount: number, bonus: number) => {
    setSelectedAmount(amount.toString());
    const option = rechargeOptions.find((opt) => opt.amount === amount);
    setSelectedRecharge(option || null);
    setPaymentModalVisible(true);
  };

  const handlePaymentSuccess = async (totalAmount: number) => {
    setCurrentBalance((prev) => prev + totalAmount);
    await AsyncStorage.setItem(
      "amount",
      JSON.stringify(currentBalance + totalAmount)
    );
    setPaymentModalVisible(false);
    setSelectedAmount("");
    setSelectedRecharge(null);
    // You can add a success toast here
  };

  useEffect(() => {
    const fetchAmount = async () => {
      const amt = await AsyncStorage.getItem("amount");
      setCurrentBalance(amt !== null ? Number(amt) : 0);
    };
    fetchAmount();

    const interval = setInterval(fetchAmount, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleAddMoney = () => {
    setPaymentModalVisible(true);
  };

  const getTransactionIcon = (type: string) => {
    return type === "credit" ? "arrow-downward" : "arrow-upward";
  };

  const getTransactionColor = (type: string) => {
    return type === "credit" ? "#4CAF50" : "#FF5722";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "#4CAF50";
      case "pending":
        return "#FF9800";
      case "failed":
        return "#F44336";
      default:
        return "#888";
    }
  };

  const renderTransaction = ({ item }: { item: Transaction }) => (
    <View style={styles.transactionItem}>
      <View
        style={[
          styles.transactionIcon,
          { backgroundColor: getTransactionColor(item.type) + "20" },
        ]}
      >
        <MaterialIcons
          name={getTransactionIcon(item.type)}
          size={20}
          color={getTransactionColor(item.type)}
        />
      </View>
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionDescription}>{item.description}</Text>
        <Text style={styles.transactionDate}>
          {item.date} at {item.timestamp}
        </Text>
      </View>
      <View style={styles.transactionAmount}>
        <Text
          style={[styles.amountText, { color: getTransactionColor(item.type) }]}
        >
          {item.type === "credit" ? "+" : "-"}₹{item.amount}
        </Text>
        <Text
          style={[styles.statusText, { color: getStatusColor(item.status) }]}
        >
          {item.status}
        </Text>
      </View>
    </View>
  );

  const renderRechargeOption = ({ item }: { item: RechargeOption }) => (
    <Pressable
      style={[
        styles.rechargeOption,
        selectedAmount === item.amount.toString() && styles.selectedOption,
        item.popular && styles.popularOption,
      ]}
      onPress={() => handleRecharge(item.amount, item.bonus)}
    >
      {item.popular && (
        <View style={styles.popularBadge}>
          <Text style={styles.popularText}>Popular</Text>
        </View>
      )}
      <Text style={styles.rechargeAmount}>₹{item.amount}</Text>
      {item.bonus > 0 && (
        <Text style={styles.bonusText}>+₹{item.bonus} Bonus</Text>
      )}
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <View style={styles.balanceHeader}>
            <MaterialIcons
              name="account-balance-wallet"
              size={32}
              color={Colors.custom.color1}
            />
            <Text style={styles.balanceLabel}>Current Balance</Text>
          </View>
          <Text style={styles.balanceAmount}>₹{currentBalance}</Text>
          <View style={styles.balanceActions}>
            <Pressable style={styles.addMoneyButton} onPress={handleAddMoney}>
              <MaterialIcons name="add" size={20} color="#fff" />
              <Text style={styles.addMoneyText}>Add Money</Text>
            </Pressable>
            <Pressable style={styles.sendMoneyButton}>
              <MaterialIcons
                name="send"
                size={20}
                color={Colors.custom.color1}
              />
              <Text style={styles.sendMoneyText}>Send Money</Text>
            </Pressable>
          </View>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsSection}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>₹2,450</Text>
            <Text style={styles.statLabel}>Total Spent</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>₹1,200</Text>
            <Text style={styles.statLabel}>Total Earned</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Transactions</Text>
          </View>
        </View>

        {/* Recharge Options */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Recharge</Text>
          <FlatList
            data={rechargeOptions}
            renderItem={renderRechargeOption}
            keyExtractor={(item) => item.id}
            numColumns={3}
            scrollEnabled={false}
            contentContainerStyle={styles.rechargeGrid}
          />
        </View>

        {/* Recent Transactions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
            <Pressable>
              <Text style={styles.viewAllText}>View All</Text>
            </Pressable>
          </View>
          <FlatList
            data={mockTransactions}
            renderItem={renderTransaction}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            contentContainerStyle={styles.transactionsList}
          />
        </View>
      </ScrollView>

      {/* Payment Modal */}
      <PaymentModal
        visible={paymentModalVisible}
        onClose={() => setPaymentModalVisible(false)}
        amount={selectedRecharge?.amount || 100}
        bonus={selectedRecharge?.bonus || 0}
        onPaymentSuccess={handlePaymentSuccess}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    backgroundColor: Colors.custom.color1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: Dimensions.get("window").height * 0.07,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    flex: 1,
    textAlign: "center",
    marginHorizontal: 15,
  },
  menuButton: {
    padding: 5,
  },
  content: {
    flex: 1,
  },
  balanceCard: {
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 15,
    padding: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  balanceHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 15,
  },
  balanceLabel: {
    fontSize: 16,
    color: "#666",
    fontWeight: "500",
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  balanceActions: {
    flexDirection: "row",
    gap: 15,
  },
  addMoneyButton: {
    flex: 1,
    backgroundColor: Colors.custom.color1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 10,
    gap: 8,
  },
  addMoneyText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  sendMoneyButton: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.custom.color1,
    gap: 8,
  },
  sendMoneyText: {
    color: Colors.custom.color1,
    fontSize: 14,
    fontWeight: "600",
  },
  statsSection: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
  },
  section: {
    backgroundColor: "#fff",
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  viewAllText: {
    fontSize: 14,
    color: Colors.custom.color1,
    fontWeight: "500",
  },
  rechargeGrid: {
    gap: 10,
  },
  rechargeOption: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: "#e9ecef",
    position: "relative",
  },
  selectedOption: {
    borderColor: Colors.custom.color1,
    backgroundColor: Colors.custom.color1 + "10",
  },
  popularOption: {
    borderColor: "#4CAF50",
  },
  popularBadge: {
    position: "absolute",
    top: -5,
    backgroundColor: "#4CAF50",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  popularText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "600",
  },
  rechargeAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  bonusText: {
    fontSize: 12,
    color: "#4CAF50",
    fontWeight: "500",
  },
  transactionsList: {
    gap: 15,
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  transactionDetails: {
    flex: 1,
  },
  transactionDescription: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: 12,
    color: "#666",
  },
  transactionAmount: {
    alignItems: "flex-end",
  },
  amountText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
  },
  statusText: {
    fontSize: 12,
    textTransform: "capitalize",
  },
});

export default wallet;
