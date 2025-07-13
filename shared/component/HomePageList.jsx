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
        <View style={{ position: "relative" }}>
          <Image source={items.image} style={styles.image} />
          <Icon
            name={isFavorited(items.id) ? "heart" : "heart-o"}
            size={20}
            color={isFavorited(items.id) ? "#FF5A5F" : "#87CEEB"}
            style={styles.love}
            onPress={toggleFavorite}
          />
        </View>
        <Text style={styles.cardPrice}>{items.price}</Text>
        <Text style={styles.cardLocation}>
          <Icon name="map-marker" size={12} color="#666" /> {items.location}
        </Text>
        
        <View style={styles.divider} />
        
        <View style={styles.propertyInfo}>
          <View style={styles.propertyFeature}>
            <Icon name="bed" size={12} color="#666" />
            <Text style={styles.featureText}>3 Beds</Text>
          </View>
          <View style={styles.propertyFeature}>
            <Icon name="bath" size={12} color="#666" />
            <Text style={styles.featureText}>2 Baths</Text>
          </View>
          <View style={styles.propertyFeature}>
            <Icon name="arrows" size={12} color="#666" />
            <Text style={styles.featureText}>1200 sqft</Text>
          </View>
        </View>
        
        <Text style={styles.cardDescription} numberOfLines={2}>
          {items.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginRight: 20,
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: "#f0f0f0",
  },
  image: {
    width: "100%",
    height: 160,
    position: "relative",
  },
  cardPrice: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 12,
    marginLeft: 12,
    color: "#333",
  },
  cardLocation: {
    fontSize: 14,
    marginTop: 4,
    marginLeft: 12,
    color: "#666",
    fontWeight: "500",
  },
  cardDescription: {
    fontSize: 13,
    marginTop: 6,
    marginBottom: 12,
    marginLeft: 12,
    marginRight: 12,
    color: "#777",
    lineHeight: 18,
  },
  love: {
    right: 10,
    marginTop: 10,
    marginRight: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    position: "absolute",
    zIndex: 10,
  },
  propertyInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12,
    marginTop: 8,
    marginBottom: 8,
  },
  propertyFeature: {
    flexDirection: "row",
    alignItems: "center",
  },
  featureText: {
    fontSize: 12,
    color: "#666",
    marginLeft: 4,
  },
  divider: {
    height: 1,
    backgroundColor: "#f0f0f0",
    marginHorizontal: 12,
    marginVertical: 8,
  },
});

export default HomePageList;
