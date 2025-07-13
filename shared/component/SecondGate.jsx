import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { useFavorites } from "./FavouriteContext";

const SecondGate = ({ items }) => {
  const navigation = useNavigation();
  const { addToFavorites, removeFromFavorites, isFavorited } = useFavorites();
  
  const toggleFavorite = () => {
    if (isFavorited(items.id)) {
      removeFromFavorites(items.id);
    } else {
      addToFavorites(items);
    }
  };

  if (!items || typeof items !== "object") return null;

  return (
    <TouchableOpacity 
      style={styles.cardContainer}
      onPress={() => navigation.navigate("DetailsPage", { items })}
    >
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={items.image} style={styles.image} />
          <TouchableOpacity 
            style={styles.favoriteButton}
            onPress={toggleFavorite}
          >
            <Icon
              name={isFavorited(items.id) ? "heart" : "heart-o"}
              size={18}
              color={isFavorited(items.id) ? "#FF5A5F" : "#87CEEB"}
            />
          </TouchableOpacity>
          <View style={styles.priceBadge}>
            <Text style={styles.priceText}>{items.price}</Text>
          </View>
        </View>
        
        <View style={styles.contentContainer}>
          <Text style={styles.locationText} numberOfLines={1}>
            <Icon name="map-marker" size={12} color="#666" /> {items.location}
          </Text>
          
          <View style={styles.divider} />
          
          <View style={styles.featuresContainer}>
            <View style={styles.feature}>
              <Icon name="bed" size={12} color="#666" />
              <Text style={styles.featureText}>{items.bedrooms || 2} Beds</Text>
            </View>
            <View style={styles.feature}>
              <Icon name="bath" size={12} color="#666" />
              <Text style={styles.featureText}>{items.bathrooms || 1} Baths</Text>
            </View>
          </View>
          
          <Text style={styles.descriptionText} numberOfLines={2}>
            {items.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginRight: 16,
    marginBottom: 8,
    width: 240,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 140,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  favoriteButton: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 50,
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  priceBadge: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderTopRightRadius: 8,
  },
  priceText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  contentContainer: {
    padding: 12,
  },
  locationText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
    marginBottom: 6,
  },
  divider: {
    height: 1,
    backgroundColor: "#f0f0f0",
    marginVertical: 8,
  },
  featuresContainer: {
    flexDirection: "row",
    marginBottom: 8,
  },
  feature: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  featureText: {
    fontSize: 12,
    color: "#666",
    marginLeft: 4,
  },
  descriptionText: {
    fontSize: 13,
    color: "#777",
    lineHeight: 18,
  },
});

export default SecondGate;
