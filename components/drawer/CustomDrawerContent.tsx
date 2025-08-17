import { Colors } from "@/constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface DrawerMenuItem {
  id: string;
  title: string;
  icon: string;
  route?: string;
  onPress?: () => void;
}

const drawerMenuItems: DrawerMenuItem[] = [
  {
    id: "1",
    title: "Home",
    icon: "home",
    route: "/(drawer)/(tabs)",
  },
  {
    id: "2",
    title: "Chat with Astrologers",
    icon: "chat",
    route: "/(drawer)/(tabs)/chat",
  },
  {
    id: "3",
    title: "Call Astrologers",
    icon: "call",
    route: "/(drawer)/(tabs)/call",
  },
  {
    id: "4",
    title: "Live Sessions",
    icon: "live-tv",
    route: "/(drawer)/(tabs)/live",
  },
  {
    id: "5",
    title: "History",
    icon: "history",
    route: "/(drawer)/(tabs)/history",
  },
  {
    id: "6",
    title: "My Wallet",
    icon: "account-balance-wallet",
    route: "/(drawer)/(screens)/wallet",
  },
  {
    id: "7",
    title: "Profile",
    icon: "person",
    route: "/(drawer)/(screens)/profile",
  },
  {
    id: "8",
    title: "Notifications",
    icon: "notifications",
    route: "/(drawer)/(screens)/notifications",
  },
  {
    id: "9",
    title: "Panchang",
    icon: "calendar-today",
    route: "/(drawer)/(screens)/panchang",
  },
  {
    id: "10",
    title: "Blogs",
    icon: "article",
    route: "/(drawer)/(screens)/blogs",
  },
  {
    id: "11",
    title: "News",
    icon: "newspaper",
    route: "/(drawer)/(screens)/news",
  },
  {
    id: "12",
    title: "Shopping",
    icon: "shopping-bag",
    route: "/(drawer)/(screens)/shopping",
  },
  {
    id: "13",
    title: "Search",
    icon: "search",
    route: "/(drawer)/(screens)/search",
  },
];

const bottomMenuItems: DrawerMenuItem[] = [
  {
    id: "settings",
    title: "Settings",
    icon: "settings",
    onPress: () => {
      // Handle settings
    },
  },
  {
    id: "help",
    title: "Help & Support",
    icon: "help",
    onPress: () => {
      // Handle help
    },
  },
  {
    id: "logout",
    title: "Logout",
    icon: "logout",
    onPress: () => {
      // Handle logout
    },
  },
];

const CustomDrawerContent = (props: any) => {
  const router = useRouter();
  const statusBarHeight = StatusBar.currentHeight || 0;

  const handleMenuPress = (item: DrawerMenuItem) => {
    if (item.route) {
      router.push(item.route as any);
    } else if (item.onPress) {
      item.onPress();
    }
    // Close drawer after navigation
    props.navigation.closeDrawer();
  };

  const renderMenuItem = (item: DrawerMenuItem, isBottomMenu = false) => (
    <Pressable
      key={item.id}
      style={[styles.menuItem, isBottomMenu && styles.bottomMenuItem]}
      onPress={() => handleMenuPress(item)}
      android_ripple={{ color: Colors.custom.color4 }}
    >
      <MaterialIcons
        name={item.icon as any}
        size={24}
        color={isBottomMenu ? "#666" : Colors.custom.color1}
      />
      <Text style={[styles.menuText, isBottomMenu && styles.bottomMenuText]}>
        {item.title}
      </Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={[styles.header, { paddingTop: statusBarHeight + 20 }]}>
        <View style={styles.profileSection}>
          <Image
            source={require("@/assets/images/icon.png")}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.userName}>Welcome User</Text>
          </View>
        </View>
      </View>

      {/* Menu Items */}
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.menuSection}>
          {drawerMenuItems.map((item) => renderMenuItem(item))}
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Bottom Menu Items */}
        <View style={styles.bottomMenuSection}>
          {bottomMenuItems.map((item) => renderMenuItem(item, true))}
        </View>
      </DrawerContentScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Astro App v1.0.0</Text>
        <Text style={styles.footerSubText}>
          Your spiritual guidance partner
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: Colors.custom.color1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "#fff",
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  userBalance: {
    fontSize: 14,
    color: "#fff",
    opacity: 0.9,
  },
  scrollContent: {
    paddingTop: 0,
  },
  menuSection: {
    paddingTop: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 15,
  },
  menuText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 10,
    marginHorizontal: 20,
  },
  bottomMenuSection: {
    paddingBottom: 20,
  },
  bottomMenuItem: {
    paddingVertical: 12,
  },
  bottomMenuText: {
    color: "#666",
    fontSize: 15,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    color: "#888",
    fontWeight: "500",
  },
  footerSubText: {
    fontSize: 11,
    color: "#aaa",
    marginTop: 2,
  },
});

export default CustomDrawerContent;
