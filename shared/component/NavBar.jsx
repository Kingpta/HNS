import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Image,
    ScrollView,
    screenHeight,
    CustomButton,
    Dimensions,
    Button,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Explore from './Explore';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.navbar}>
        <Text style={styles.logo}>
          HNS<Text style={styles.logoHighlight}>Homes</Text>
        </Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => {
          // Add navigation logic here if needed
          navigation.navigate("agentPage");
        }}>
          <Text style={styles.buttonText}>Login/Signup</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 16,
    backgroundColor: '#fff',
    marginTop: 30,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  logoHighlight: {
    color: "#4a90e2",
  },
  buttonContainer: {
    backgroundColor: "#4a90e2",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 24,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
  scrollView: {
    flexGrow: 1,
  },
  button: {
    backgroundColor: "#87CEEB", // light blue button
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    alignItems: "center",
    marginVertical: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
 
});

export default NavBar
