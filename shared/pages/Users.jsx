import React from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import NavBar from "../component/NavBar";
import Explore from "../component/Explore";
import HomePageItem from "../component/HomePageItem";
import Footer from "../component/Footer";
import Firstgate from "../component/Firstgate";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
// import AppLoading from "expo-app-loading";

const Users = () => {
  //  const [fontsLoaded] = useFonts({
  //    Poppins_400Regular,
  //    Poppins_700Bold,
  //  });

  //  if (!fontsLoaded) {
  //    return <AppLoading />; // Or null while loading
  //  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        {/* Main Content */}
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <NavBar />
          <Explore />
          <HomePageItem />
        </ScrollView>
        <Firstgate />
        {/* Fixed Footer */}
        <View style={styles.footerContainer}>
          <Footer />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    fontFamily: "Poppins_400Regular",
  },
  content: {
    paddingBottom: 70, // Leave space for footer
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 60,
    backgroundColor: "white", // Match your footer background
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
  },
});

export default Users;
