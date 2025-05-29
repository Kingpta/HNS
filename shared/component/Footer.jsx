import React from "react";
import { View, TouchableOpacity, StyleSheet,Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";


import { Platform } from "react-native";
const Footer = () => {
  const navigation = useNavigation();


  return (
    <View style={styles.footer} >
      <TouchableOpacity style={styles.iconContainer} onPress={() => {
        // Add navigation logic here if needed  
        navigation.navigate("Users");
      }}>
        <Icon style={styles.icon} name="home" size={24} />
        <Text style={styles.iconText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer} onPress={() => {
        // Add navigation logic here if needed}>
        navigation.navigate("FavoritePage");
      }}>
        <Icon style={styles.icon} name="bookmark" size={24} />
        <Text style={styles.iconText}>Saved</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer}>
        <Icon style={styles.icon} name="envelope-o" size={24} />
        <Text style={styles.iconText}>Messages</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer}>
        <Icon style={styles.icon} name="user" size={24} />
        <Text style={styles.iconText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingHorizontal: 10,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  icon: {
    fontSize: 24,
    color: "#87CEEB",
  },
  iconText: {
    fontSize: 12,
    color: "#87CEEB",
  },
});


export default Footer;
