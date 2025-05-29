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

const NavBar = () => {
  return (
    <>
      <View style={styles.navbar}>
        <TouchableOpacity>
          <Image
            source={require("../../images/logo.png")}
            style={{ width: 80, height: 40 ,}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Login/Signup</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({

    buttonContainer: {
      backgroundColor: "#87CEEB",
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
    buttonText: {
      color: "#ffffff",
      fontSize: 16,
      fontWeight: "bold",
    },
  navbar: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingLeft: 0,
    paddingBottom: 0,
    backgroundColor: '#fff',

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