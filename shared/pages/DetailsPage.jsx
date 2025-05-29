import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
 import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
 import { useNavigation } from "@react-navigation/native";

const DetailsPage = ({ route }) => {
  const navigation = useNavigation();
  const { items } = route.params || {};

  if (!items) {
    return (
      <View style={styles.centered}>
        <Text>No items data found.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
      >
        <View style={styles.contentWrapper}>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.header}>
              <Image source={items.image} style={styles.image} />
              <TouchableOpacity
                style={styles.undoBtn}
                onPress={() => navigation.goBack()}
              >
                <Icon name="undo" size={24} color="#87CEEB" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.loveBtn}>
                <Icon
                  name="heart"
                  size={20}
                  color="#87CEEB"
                  style={styles.love}
                />
              </TouchableOpacity>
              <View style={styles.headerText}>
                <Text style={styles.Title}>Apartment</Text>
                {/* <Icon name="star" size={24} color="#87CEEB" /> */}
                <Icon name="star" size={24} color="gold" />
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.Title}>
                {items.title || "Primary Apartment"}
              </Text>
              <Text style={styles.addressText}>
                {items.address || "201 Odoguyan, Lasustech, Lagos"}
              </Text>

              <View style={styles.detailsRow}>
                <Text>
                  <MaterialCommunityIcons
                    name="bed-empty"
                    size={24}
                    color="#eee"
                  />{" "}
                  3 Rooms
                </Text>
                <Text>
                  <MaterialCommunityIcons
                    name="toilet"
                    size={24}
                    color="#eee"
                  />{" "}
                  2 Bathrooms
                </Text>
                <Text>
                  <MaterialCommunityIcons
                    name="silverware-fork-knife"
                    size={24}
                    color="#eee"
                  />{" "}
                  1 Kitchen
                </Text>
                <Text>
                  <MaterialCommunityIcons name="sofa" size={24} color="#eee" />{" "}
                  1 Living Room
                </Text>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.subTitle}>Listing Agent</Text>
              <View style={styles.agentDetails}>
                <Image source={items.image} style={styles.agentImage} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.agentName}>
                    {items.agent.name || "Agent Name"}
                  </Text>
                  <Text>{items.phone || "08184594823"}</Text>
                </View>

                <View style={styles.actions}>
                  <TouchableOpacity
                    onPress={() => Linking.openURL(`tel:${items.phone}`)}
                  >
                    <Icon name="phone" size={24} color="#87CEEB" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => Linking.openURL(`sms:${items.phone}`)}
                  >
                    <Icon name="envelope" size={24} color="#87CEEB" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.subTitle}>Overview</Text>
              <Text style={styles.description}>
                {items.descriptionss ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
              </Text>
            </View>
            <View style={styles.section}>
              <View style={styles.imageGrid}>
                {[1, 2, 3, 4, 5, 6].map((_, index) => (
                  <TouchableOpacity key={index} style={styles.imageWrapper}>
                    <Image
                      source={items.image}
                      style={styles.subImage}
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ScrollView>

          {/* Fixed Footer */}
          <View style={styles.footer}>
            <View style={{ flex: 1 }}>
              <Text style={styles.subTitle}>Price</Text>
              <Text>{items.price || "$166"}/year</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Button title="Buy" buttonStyle={styles.button} />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  contentWrapper: {
    flex: 1,
    position: "relative",
  },
  scrollContent: {
    // paddingHorizontal: 16,
    paddingBottom: 120, // extra space for footer
  },
  header: {
    alignItems: "center",
    margin: 0,
    marginBottom: 0,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 12,
    position: "relative",
  },
  headerText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    width: "100%",
    paddingHorizontal: 16,
    alignItems: "center",
  },
  Title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  section: {
    marginVertical: 0,
    padding: 16,
    paddingBottom: 10,
    fontSize: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  addressText: {
    fontSize: 11,
    color: "#555",
  },
  detailsRow: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  agentName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  agentDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  agentImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  actions: {
    flexDirection: "row",
    gap: 12,
  },
  description: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
  },
  button: {
    backgroundColor: "#87CEEB",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  undoBtn: {
    left: 10,
    marginTop: 30,
    marginRight: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 5,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    position: "absolute",
  },
  loveBtn: {
    right: 10,
    marginTop: 30,
    marginRight: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 5,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    position: "absolute",
  },
  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  imageWrapper: {
    width: "32%", // 3 images in a row
    aspectRatio: 1, 
    marginBottom: 10,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#eee", // just in case image doesn't load
  },

  subImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },

  footer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: "#fff",
    // borderTopWidth: 1,
    borderTopColor: "#ddd",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "space-between",
    alignItems: "center",
    // flex: 1,
  },
});

export default DetailsPage;
