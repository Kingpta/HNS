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
import { 
  getRecommendedProperties, 
  getFirstGateProperties, 
  getSecondGateProperties,
  getPropertyWithAgentDetails
} from "../data/propertyData";

const HomePageItem = ({ navigation }) => {
  // Get data from our centralized data source
  const recommendedProperties = getRecommendedProperties();
  const firstGateProperties = getFirstGateProperties();
  const secondGateProperties = getSecondGateProperties();
  
  // Add agent details to each property for display
  const recommendedWithAgents = recommendedProperties.map(property => 
    getPropertyWithAgentDetails(property.id)
  );
  
  return (
    <View>
      {/* Recommended Section */}
      <View style={styles.sectionContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Recommended</Text>
          <TouchableOpacity onPress={() => Linking.openURL("#")}>
            <Text style={styles.link}>See All</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={recommendedWithAgents}
          renderItem={({ item }) => <HomePageList items={item} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </View>

      <View style={styles.sectionDivider} />

      {/* Firstgate Section */}
      <View style={styles.sectionContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Firstgate</Text>
          <TouchableOpacity onPress={() => Linking.openURL("#")}>
            <Text style={styles.link}>See All</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={firstGateProperties}
          renderItem={({ item }) => <Firstgate items={getPropertyWithAgentDetails(item.id)} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </View>

      <View style={styles.sectionDivider} />

      {/* Secondgate Section */}
      <View style={styles.sectionContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Secondgate</Text>
          <TouchableOpacity onPress={() => Linking.openURL("#")}>
            <Text style={styles.link}>See All</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={secondGateProperties}
          renderItem={({ item }) => <SecondGate items={getPropertyWithAgentDetails(item.id)} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 12,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    letterSpacing: 0.3,
  },
  link: {
    color: "#4a90e2",
    fontSize: 14,
    fontWeight: "600",
  },
  listContainer: {
    paddingLeft: 20,
  },
  sectionDivider: {
    height: 8,
    backgroundColor: "#f5f5f5",
    marginVertical: 16,
  },
});

export default HomePageItem;
