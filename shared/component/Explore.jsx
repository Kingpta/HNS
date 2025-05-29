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
  return <>
    <View style={styles.container}>
     <Icon name="search" size={20} color="#4F8EF7" />
      <TextInput
        style={styles.input}
        placeholder=" Search for properties..."
        placeholderTextColor="#888 "
      />
      {/* <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Search")}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity> */}
    </View>
  </>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderColor: "#ccc",
    borderWidth: 1,
    alignItems: "center",
    borderRadius: 30,
    paddingHorizontal: 10,
    marginBottom: 0,
    height: 40,
    justifyContent: "start",
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 0,
  },
  input: {
    fontSize: 18,
    height: 40,
    // borderColor: "#ccc",
    // borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 10,
    marginBottom: 0,
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