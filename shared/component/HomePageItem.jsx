import React from "react";
import HomePageList from "../component/HomePageList";
import Firstgate from "./Firstgate";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Linking,
} from "react-native";
import SecondGate from "./SecondGate";
import DetailsPage from "../pages/DetailsPage";

const HomePageItem = ({mattch, navigation}) => {
  const house = [
    {
      id: 1,
      image: require("../../images/pic1.jpeg"),
      price: 179,
      location: "First Gate, Ikorodu , opposite fastech",
      description: "2bedroom , pop, runway",
      agent: {
        id: "a1",
        name: "Adeniji Odunola",
        phone: "123-456-7890",
        profileImage: "url-to-image",
      },
    },
    {
      id: 2,
      mt: "a2",
      image: require("../../images/pic2.jpeg"),
      price: 200,
      location: "Second Gate, Ikorodu , opposite fastech",
      description: "3bedroom , pop, runway",
      agent: {
        id: "a1",
        name: "Akerele Abiola",
        phone: "123-456-7890",
        profileImage: "url-to-image",
      },
    },
    {
      id: 3,
      image: require("../../images/pic3.jpeg"),
      price: 150,
      location: "Third Gate, Ikorodu , opposite fastech",
      description: "1bedroom , pop, runway",
      agent: {
        id: "a1",
        name: "Baby Scott",
        phone: "123-456-7890",
        profileImage: "url-to-image",
      },
    },
    {
      id: 4,
      image: require("../../images/pic4.jpeg"),
      price: 300,
      location: "Fourth Gate, Ikorodu , opposite fastech",
      description: "4bedroom , pop, runway",

    },
    {
      id: 5,
      image: require("../../images/pic5.jpeg"),
      price: 250,
      location: "Fifth Gate, Ikorodu , opposite fastech",
      description: "5bedroom , pop, runway",
    },
  ];

  const Matching = () =>{
    house.map((apt) => {
      if (mattch.mt === apt.mt) {
        house.push(mattch)
      }
    })
  }

  // Matching()
 
  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Recommended</Text>
        <TouchableOpacity onPress={() => Linking.openURL("#")}>
          <Text style={styles.link}>See More</Text>
        </TouchableOpacity>
      </View>

      {/* HomePageList cards */}
      <FlatList
        data={house}
        renderItem={({ item }) => <HomePageList items={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      />

      {/* Firstgate cards */}
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Firstgate</Text>
          <TouchableOpacity onPress={() => Linking.openURL("#")}>
            <Text style={styles.link}>See More</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={house}
          renderItem={({ item }) => <Firstgate items={item} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20, marginTop: 20 }}
        />
      </View>

      {/* Secondgate cards */}
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>Secondgate</Text>
          <TouchableOpacity onPress={() => Linking.openURL("#")}>
            <Text style={styles.link}>See More</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={house}
          renderItem={({ item }) => <SecondGate items={item} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20, marginTop: 20 }}
        />

        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingBottom: 0,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    color: "#87CEEB",
    textDecorationLine: "underline",
  },
});

export default HomePageItem;
