import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
// import { useFavorites } from "../context/FavoritesContext";
import { useFavorites } from "./FavouriteContext";

const HomePageList = ({ items }) => {
  const navigation = useNavigation();
  
  const { addToFavorites, removeFromFavorites, isFavorited } = useFavorites();


  const toggleFavorite = () => {
    if (isFavorited(items.id)) {
      removeFromFavorites(items.id);
    } else {
      addToFavorites(items);
    }
  };

  return (
    <TouchableOpacity onPress={() => navigation.navigate("DetailsPage", { items })}>
      <View style={styles.card}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Image source={items.image} style={styles.image} />
          <Icon
            name={isFavorited(items.id) ? "heart" : "heart-o"}
            size={20}
            color="#87CEEB"
            style={styles.love}
            onPress={toggleFavorite}
          />
        </View>
        <Text style={styles.cardPrice}>${items.price}</Text>
        <Text style={styles.cardLocation}>{items.location}</Text>
        <Text style={styles.cardDescription}>{items.description}</Text>
      </View>
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
  container: {
    // width: 100,
  },
  cardPrice: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 10,
  },
  cardLocation: {
    fontSize: 16,
    marginTop: 5,
    marginLeft: 10,
    color: "#888",
  },
  cardDescription: {
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    color: "#000",
  },

  image: {
    width: "100%",
    height: 140,
    position: "relative",
  },
  card: {
    width: 250,
    backgroundColor: "#fff",
    overflow: "hidden",
    borderRadius: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    // height: 200,
    marginRight: 20,
    flex: 1,
  },
  love: {
    right: 10,
    marginTop: 10,
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
});

export default HomePageList;
