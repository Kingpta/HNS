import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { useFavorites } from "./FavouriteContext";
import Footer from "./Footer";

const FavoritePage = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Your Favorites</Text>
        <Text style={styles.empty}>No favorites yet.</Text>
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Your Favorites</Text>
        <FlatList
          contentContainerStyle={{ paddingBottom: 20 }}
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={styles.card}
              onpress={() => navigation.navigate("DetailsPage", { item })}
            >
              <Image source={item.image} style={styles.image} />
              <Text style={styles.cardPrice}>${item.price}</Text>
              <Text style={styles.cardLocation}>{item.location}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </View>
          )}
        />
      </View>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  empty: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 40,
  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  cardPrice: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
  },
  cardLocation: {
    color: "#888",
    marginTop: 4,
  },
  cardDescription: {
    color: "#333",
    marginTop: 4,
  },
});

export default FavoritePage;
