import { StripeProvider } from "@stripe/stripe-react-native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "react-native-reanimated";

import Toasts from "@/components/Toasts";
import { ToastProvider } from "@/context/ToastContext";

const STRIPE_PUBLIC_KEY =
  "pk_test_51Rp6L1B5hoZIRhzLRhTEtvUXNFvbfYzqr0VtmVfCR5kSKGh0dhaAnp7HzuKBFzRAVLEfhtURzpqWVkmuQTxJyA0N00Nd3RtXoI";

const MainLayout = () => {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen name="(screens)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" options={{ headerShown: false }} />
    </Stack>
  );
};

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ToastProvider>
      <StripeProvider publishableKey={STRIPE_PUBLIC_KEY}>
        <Toasts />
        <MainLayout />
      </StripeProvider>
    </ToastProvider>
  );
}
