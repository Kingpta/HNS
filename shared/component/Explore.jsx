import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";

const Explore = () => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} style={styles.searchIcon} />
      <TextInput
        style={styles.input}
        placeholder="Search for properties..."
        placeholderTextColor="#999"
      />
      <TouchableOpacity style={styles.filterButton}>
        <Icon name="sliders" size={20} color="#666" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderColor: "#e0e0e0",
    borderWidth: 1,
    alignItems: "center",
    borderRadius: 30,
    paddingHorizontal: 16,
    marginHorizontal: 20,
    marginVertical: 16,
    height: 50,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  searchIcon: {
    marginRight: 10,
    color: "#666",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    height: 50,
  },
  filterButton: {
    padding: 8,
    marginLeft: 8,
  },
  button: {
    backgroundColor: "#87CEEB",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Explore
