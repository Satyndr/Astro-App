import AllServices from "@/components/tabs/home/AllServices/AllServices";
import BehindTheScenes from "@/components/tabs/home/BehindTheScenes";
import Blogs from "@/components/tabs/home/Blogs/Blogs";
import HomeCategories from "@/components/tabs/home/HomeCategories/Categories";
import HomeHeader from "@/components/tabs/home/HomeHeader";
import News from "@/components/tabs/home/News";
import Promotions from "@/components/tabs/home/Promotions/Promotions";
import ShopNow from "@/components/tabs/home/ShopNow.tsx/ShopNow";
import React, { lazy, Suspense } from "react";
import { Image, ScrollView, View } from "react-native";

const SearchBox = lazy(() => import("@/components/tabs/home/SearchBox"));

const Index = () => {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#fff",
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* seach box */}
        <Suspense
          fallback={
            <View style={{ height: 40, width: "95%", alignSelf: "center" }} />
          }
        >
          <SearchBox />
        </Suspense>

        {/* All Services */}
        <AllServices />

        {/* banner adverstisement */}
        <Image
          source={require("@/assets/images/promotions/prom2.jpg")}
          style={{
            width: "100%",
            height: 150,
            resizeMode: "cover",
            marginVertical: 10,
          }}
        />

        {/* Promotions */}
        <Promotions />

        {/* categories */}
        <HomeCategories fromHomePage={true} />

        {/* asrologers */}

        {/* shop now */}
        <ShopNow />

        {/* latest from blog */}
        <Blogs />

        {/* behind the scenes */}
        <BehindTheScenes />

        {/* astro app in news */}
        <News />

        {/* check today panchang banner */}
        <Image
          source={require("@/assets/images/promotions/prom1.jpg")}
          style={{
            width: "95%",
            height: 100,
            resizeMode: "cover",
            alignSelf: "center",
            borderRadius: 10,
            marginVertical: 10,
          }}
        />

        {/* astrology videos */}
      </ScrollView>
    </View>
  );
};

export default Index;
