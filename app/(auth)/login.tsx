import CustomInput from "@/components/auth/CustomInput";
import Strip from "@/components/auth/Strip";
import AnimatedPressable from "@/components/common/AnimatedPressable";
import CustomButton from "@/components/common/CustomButton";
import { useToast } from "@/context/ToastContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const login = () => {
  const router = useRouter();
  const { addToast } = useToast();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSkip = async () => {
    // console.log("Login Skipped");
    await AsyncStorage.setItem("amount", JSON.stringify(500));
    router.push("/(drawer)/(tabs)");
  };

  const handleSendOtp = () => {
    if (!phoneNumber) {
      addToast("Please enter phone number", "error");
      return;
    }
    if (phoneNumber.length < 10) {
      addToast("Please enter valid phone number", "error");
      return;
    }
    console.log("Phone Number :", phoneNumber);
    addToast("OTP sent", "info");
    router.push("/otp");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 20,
      }}
    >
      {/* skip button */}
      <TouchableOpacity
        onPress={handleSkip}
        style={{ position: "absolute", top: "7%", right: "10%" }}
      >
        <Text
          style={{
            color: "#000",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Skip
        </Text>
      </TouchableOpacity>

      {/* main content */}
      <View
        style={{
          width: "100%",
          transform: [{ translateY: "-5%" }],
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Image
            source={require("@/assets/images/icon.png")}
            style={{
              width: 100,
              height: 100,
              marginBottom: 20,
              borderRadius: 20,
            }}
          />
          <CustomInput
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            type="number"
            placeholder="Phone Number"
          />
          {/* button */}
          <View
            style={{
              width: "100%",
              alignSelf: "center",
            }}
          >
            <CustomButton title="Send OTP" onPress={handleSendOtp} />
          </View>

          <Text
            style={{
              color: "#000",
              textAlign: "center",
              marginVertical: "3%",
            }}
          >
            OR
          </Text>

          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {[
              {
                title: "Continue with Google",
                onPress: () => {
                  // Handle Google login
                },
                icon: require("@/assets/images/google.png"),
              },
              {
                title: "Continue with WhatsApp",
                onPress: () => {
                  // Handle WhatsApp login
                },
                icon: require("@/assets/images/whatsapp.webp"),
              },
            ].map((item, index) => (
              <AnimatedPressable
                key={index}
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  borderColor: "#000",
                  borderWidth: 0.5,
                  borderRadius: 10,
                  padding: 10,
                  marginBottom: "5%",
                  gap: "3%",
                }}
              >
                <Image
                  source={item.icon}
                  style={{
                    width: 27,
                    height: 27,
                  }}
                />
                <Text
                  style={{
                    color: "#000",
                    textAlign: "center",
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  {item.title}
                </Text>
              </AnimatedPressable>
            ))}
          </View>
        </View>

        {/* terms and conditions */}
        <View
          style={{
            alignItems: "center",
            marginTop: "5%",
            width: "80%",
            alignSelf: "center",
          }}
        >
          <Text style={{ color: "#888", textAlign: "center" }}>
            By verifying, you agree to our{" "}
            <Text
              style={{
                color: "#000",
                fontWeight: "bold",
                textDecorationLine: "underline",
              }}
            >
              Terms of Service
            </Text>{" "}
            and{" "}
            <Text
              style={{
                color: "#000",
                fontWeight: "bold",
                textDecorationLine: "underline",
              }}
            >
              Privacy Policy
            </Text>
          </Text>
        </View>
      </View>

      <Strip />

      {/* footer */}
      <View
        style={{
          position: "absolute",
          bottom: "5%",
          width: "100%",
          alignSelf: "center",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {[
          {
            title: "Private & Confidential",
            image: require("@/assets/images/private.webp"),
          },
          {
            title: "Verified Astrologer",
            image: require("@/assets/images/verified_account.png"),
          },
          {
            title: "Secure Payments",
            image: require("@/assets/images/secure_payments.png"),
          },
        ].map((item, index) => (
          <View
            key={index}
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "30%",
              padding: 5,
            }}
          >
            <Image
              source={item.image}
              style={{
                width: 30,
                height: 30,
                marginBottom: 5,
              }}
            />
            <Text
              style={{
                color: "#000",
                textAlign: "center",
                fontSize: 12,
                fontWeight: 500,
              }}
            >
              {item.title}
            </Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default login;
