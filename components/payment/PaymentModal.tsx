import { Colors } from "@/constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useStripe } from "@stripe/stripe-react-native";
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  type: "card" | "upi" | "netbanking" | "wallet";
}

interface PaymentModalProps {
  visible: boolean;
  onClose: () => void;
  amount: number;
  bonus?: number;
  onPaymentSuccess: (amount: number) => void;
}

const paymentMethods: PaymentMethod[] = [
  { id: "1", name: "UPI", icon: "payment", type: "upi" },
  { id: "2", name: "Credit/Debit Card", icon: "credit-card", type: "card" },
  { id: "3", name: "Net Banking", icon: "account-balance", type: "netbanking" },
  { id: "4", name: "PayTM", icon: "account-balance-wallet", type: "wallet" },
  { id: "5", name: "PhonePe", icon: "smartphone", type: "wallet" },
  { id: "6", name: "Google Pay", icon: "smartphone", type: "wallet" },
];

const PaymentModal = ({
  visible,
  onClose,
  amount,
  bonus = 0,
  onPaymentSuccess,
}: PaymentModalProps) => {
  const [selectedMethod, setSelectedMethod] = useState<string>("");
  const [step, setStep] = useState<"methods" | "details" | "processing">(
    "methods"
  );
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [upiId, setUpiId] = useState("");

  const stripe = useStripe();

  const handleMethodSelect = (methodId: string) => {
    setSelectedMethod(methodId);
    const method = paymentMethods.find((m) => m.id === methodId);
    if (method?.type === "upi" || method?.type === "card") {
      setStep("details");
    } else {
      // For wallets and netbanking, directly process
      processPayment();
    }
  };

  // const handleMethodSelect = (methodId: string) => {
  //   setSelectedMethod(methodId);
  //   processPayment();
  // };

  const processPayment = () => {
    setStep("processing");
    // Simulate payment processing
    setTimeout(() => {
      onPaymentSuccess(amount + bonus);
      onClose();
      setStep("methods");
      setSelectedMethod("");
    }, 2000);
  };

  // const processPayment = async () => {
  //   try {
  //     const response = await fetch("http://192.168.105.9:3000/pay", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name: "User001",
  //         amount: amount + bonus,
  //       }),
  //     });

  //     const data = await response.json();

  //     if (!response.ok) {
  //       return alert(data.message || "Payment failed");
  //     }

  //     const clientSecret = data.clientSecret;

  //     const initPaymentSheet = await stripe.initPaymentSheet({
  //       paymentIntentClientSecret: clientSecret,
  //       merchantDisplayName: "Your Merchant Name",
  //     });

  //     if (initPaymentSheet.error) {
  //       return alert(
  //         initPaymentSheet.error.message || "Failed to initialize payment sheet"
  //       );
  //     }

  //     const presentSheet = await stripe.presentPaymentSheet();

  //     if (presentSheet.error) {
  //       return alert(
  //         presentSheet.error.message || "Payment sheet was not presented"
  //       );
  //     }

  //     Alert.alert(
  //       "Payment Successful",
  //       `You have successfully paid ₹${amount + bonus}`,
  //       [{ text: "OK", onPress: () => onClose() }]
  //     );

  //     onPaymentSuccess(amount + bonus);
  //     onClose();
  //     setStep("methods");
  //     setSelectedMethod("");
  //   } catch (error) {
  //     console.error("Payment processing error:", error);
  //     // More detailed error information
  //     if (error instanceof TypeError && error.message.includes("fetch")) {
  //       alert(
  //         "Network error: Unable to connect to payment server. Please check your internet connection and try again."
  //       );
  //     } else {
  //       const errorMessage =
  //         error instanceof Error ? error.message : "Unknown error";
  //       alert(`Payment failed: ${errorMessage}. Please try again.`);
  //     }
  //   }
  // };

  const handlePaymentSubmit = () => {
    const method = paymentMethods.find((m) => m.id === selectedMethod);
    if (method?.type === "upi" && !upiId) {
      alert("Please enter UPI ID");
      return;
    }
    if (method?.type === "card" && (!cardNumber || !expiryDate || !cvv)) {
      alert("Please fill all card details");
      return;
    }
    processPayment();
  };

  const renderPaymentMethods = () => (
    <View style={styles.modalContent}>
      <View style={styles.modalHeader}>
        <Text style={styles.modalTitle}>Select Payment Method</Text>
        <Pressable onPress={onClose}>
          <MaterialIcons name="close" size={24} color="#666" />
        </Pressable>
      </View>

      <View style={styles.amountSection}>
        <Text style={styles.amountLabel}>Amount to Pay</Text>
        <Text style={styles.amountValue}>₹{amount}</Text>
        {bonus > 0 && <Text style={styles.bonusText}>+ ₹{bonus} Bonus</Text>}
      </View>

      <View style={styles.methodsList}>
        {paymentMethods.map((method) => (
          <Pressable
            key={method.id}
            style={styles.methodItem}
            onPress={() => handleMethodSelect(method.id)}
          >
            <MaterialIcons
              name={method.icon as any}
              size={24}
              color={Colors.custom.color1}
            />
            <Text style={styles.methodName}>{method.name}</Text>
            <MaterialIcons name="chevron-right" size={20} color="#666" />
          </Pressable>
        ))}
      </View>
    </View>
  );

  const renderPaymentDetails = () => {
    const method = paymentMethods.find((m) => m.id === selectedMethod);

    return (
      <View style={styles.modalContent}>
        <View style={styles.modalHeader}>
          <Pressable onPress={() => setStep("methods")}>
            <MaterialIcons name="arrow-back" size={24} color="#666" />
          </Pressable>
          <Text style={styles.modalTitle}>{method?.name}</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" size={24} color="#666" />
          </Pressable>
        </View>

        <View style={styles.amountSection}>
          <Text style={styles.amountLabel}>Amount to Pay</Text>
          <Text style={styles.amountValue}>₹{amount}</Text>
          {bonus > 0 && <Text style={styles.bonusText}>+ ₹{bonus} Bonus</Text>}
        </View>

        <View style={styles.formSection}>
          {method?.type === "upi" && (
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>UPI ID</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your UPI ID"
                value={upiId}
                onChangeText={setUpiId}
                keyboardType="email-address"
              />
            </View>
          )}

          {method?.type === "card" && (
            <>
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Card Number</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChangeText={setCardNumber}
                  keyboardType="numeric"
                  maxLength={19}
                />
              </View>
              <View style={styles.inputRow}>
                <View style={[styles.inputGroup, { flex: 1, marginRight: 10 }]}>
                  <Text style={styles.inputLabel}>Expiry Date</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChangeText={setExpiryDate}
                    keyboardType="numeric"
                    maxLength={5}
                  />
                </View>
                <View style={[styles.inputGroup, { flex: 1 }]}>
                  <Text style={styles.inputLabel}>CVV</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="123"
                    value={cvv}
                    onChangeText={setCvv}
                    keyboardType="numeric"
                    maxLength={3}
                    secureTextEntry
                  />
                </View>
              </View>
            </>
          )}
        </View>

        <Pressable style={styles.payButton} onPress={handlePaymentSubmit}>
          <Text style={styles.payButtonText}>Pay ₹{amount}</Text>
        </Pressable>
      </View>
    );
  };

  const renderProcessing = () => (
    <View style={styles.modalContent}>
      <View style={styles.processingContainer}>
        <MaterialIcons
          name="sync"
          size={48}
          color={Colors.custom.color1}
          style={styles.processingIcon}
        />
        <Text style={styles.processingText}>Processing Payment...</Text>
        <Text style={styles.processingSubtext}>
          Please wait while we process your payment
        </Text>
      </View>
    </View>
  );

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {step === "methods" && renderPaymentMethods()}
          {step === "details" && renderPaymentDetails()}
          {step === "processing" && renderProcessing()}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: "80%",
  },
  modalContent: {
    padding: 20,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  amountSection: {
    backgroundColor: "#f8f9fa",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
  },
  amountLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  amountValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  bonusText: {
    fontSize: 14,
    color: "#4CAF50",
    fontWeight: "500",
    marginTop: 5,
  },
  methodsList: {
    gap: 15,
  },
  methodItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
    gap: 15,
  },
  methodName: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  formSection: {
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 15,
  },
  inputRow: {
    flexDirection: "row",
  },
  inputLabel: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
    fontWeight: "500",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  payButton: {
    backgroundColor: Colors.custom.color1,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  payButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  processingContainer: {
    alignItems: "center",
    paddingVertical: 40,
  },
  processingIcon: {
    marginBottom: 20,
  },
  processingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  processingSubtext: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
});

export default PaymentModal;
