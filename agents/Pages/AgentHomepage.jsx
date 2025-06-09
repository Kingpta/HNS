import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Linking,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../components/Header";
import { agents, getPropertiesByAgent } from "../../shared/data/propertyData";
import { useNavigation } from "@react-navigation/native";

const AgentHomepage = () => {
    const navigation = useNavigation();

  // For demo purposes, using the first agent in the list
  const currentAgent = agents[0];
  const agentProperties = getPropertiesByAgent(currentAgent.id);
  
  // Calculate metrics
  const totalListings = agentProperties.length;
  const totalViews = agentProperties.reduce((sum, property) => sum + (property.views || 0), 0);
  const activeListings = agentProperties.filter(p => p.status !== "sold").length;
  const soldListings = agentProperties.filter(p => p.status === "sold").length;
  
  // Sample data for performance chart
  const monthlyPerformance = [
    { month: "Jan", sales: 2 },
    { month: "Feb", sales: 1 },
    { month: "Mar", sales: 3 },
    { month: "Apr", sales: 2 },
    { month: "May", sales: 4 },
    { month: "Jun", sales: 2 },
  ];

  const renderPropertyItem = ({ item }) => (
    <TouchableOpacity style={styles.propertyCard}>
      <Image source={item.image} style={styles.propertyImage} />
      <View style={styles.propertyOverlay}>
        <Text style={styles.propertyStatus}>
          {item.status === "sold" ? "SOLD" : "ACTIVE"}
        </Text>
      </View>
      <View style={styles.propertyDetails}>
        <Text style={styles.propertyPrice}>${item.price}</Text>
        <Text style={styles.propertyLocation} numberOfLines={1}>
          <Icon name="map-marker" size={12} color="#666" /> {item.location}
        </Text>
        <View style={styles.propertyStats}>
          <Text style={styles.propertyStat}>
            <Icon name="eye" size={12} color="#666" /> {item.views || 0} views
          </Text>
          <Text style={styles.propertyStat}>
            <Icon name="calendar" size={12} color="#666" /> {item.daysListed || 0} days
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.gradient, { backgroundColor: "#f8fafc" }]}>
        <Header agent={currentAgent} />
        
        <ScrollView style={styles.scrollView}>
          {/* Dashboard Summary */}
          <View style={styles.dashboardContainer}>
            <View style={styles.metricCard}>
              <Text style={styles.metricValue}>{totalListings}</Text>
              <Text style={styles.metricLabel}>Total Listings</Text>
            </View>
            
            <View style={styles.metricCard}>
              <Text style={styles.metricValue}>{totalViews}</Text>
              <Text style={styles.metricLabel}>Total Views</Text>
            </View>
            
            <View style={styles.metricCard}>
              <Text style={styles.metricValue}>{activeListings}</Text>
              <Text style={styles.metricLabel}>Active</Text>
            </View>
            
            <View style={styles.metricCard}>
              <Text style={styles.metricValue}>{soldListings}</Text>
              <Text style={styles.metricLabel}>Sold</Text>
            </View>
          </View>
          
          {/* Performance Chart */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Performance</Text>
            <View style={styles.chartContainer}>
              {monthlyPerformance.map((data, index) => (
                <View key={index} style={styles.chartColumn}>
                  <View 
                    style={[
                      styles.chartBar, 
                      { height: data.sales * 20 }
                    ]} 
                  />
                  <Text style={styles.chartLabel}>{data.month}</Text>
                </View>
              ))}
            </View>
          </View>
          
          {/* Recent Activity */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Recent Activity</Text>
            <View style={styles.activityContainer}>
              <View style={styles.activityItem}>
                <View style={styles.activityIcon}>
                  <Icon name="eye" size={16} color="#4a90e2" />
                </View>
                <View style={styles.activityContent}>
                  <Text style={styles.activityText}>
                    <Text style={styles.activityHighlight}>15 new views</Text> on your Ikorodu property
                  </Text>
                  <Text style={styles.activityTime}>2 hours ago</Text>
                </View>
              </View>
              
              <View style={styles.activityItem}>
                <View style={styles.activityIcon}>
                  <Icon name="envelope" size={16} color="#4a90e2" />
                </View>
                <View style={styles.activityContent}>
                  <Text style={styles.activityText}>
                    <Text style={styles.activityHighlight}>New inquiry</Text> from potential buyer
                  </Text>
                  <Text style={styles.activityTime}>Yesterday</Text>
                </View>
              </View>
              
              <View style={styles.activityItem}>
                <View style={styles.activityIcon}>
                  <Icon name="calendar" size={16} color="#4a90e2" />
                </View>
                <View style={styles.activityContent}>
                  <Text style={styles.activityText}>
                    <Text style={styles.activityHighlight}>Viewing scheduled</Text> for Second Gate property
                  </Text>
                  <Text style={styles.activityTime}>2 days ago</Text>
                </View>
              </View>
            </View>
          </View>
          
          {/* Your Listings */}
          <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Your Listings</Text>
              <TouchableOpacity>
                <Text style={styles.sectionLink}>See All</Text>
              </TouchableOpacity>
            </View>
            
            <FlatList
              data={agentProperties.slice(0, 3)}
              renderItem={renderPropertyItem}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.listingsContainer}
            />
          </View>
          
          {/* Quick Actions */}
          <View style={styles.actionsContainer}>
            <TouchableOpacity style={styles.actionButton}>
              <Icon name="plus" size={20} color="#fff" />
              <Text style={styles.actionButtonText}>Add Listing</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate("agentListingsPage")}>
              <Icon name="calendar-plus-o" size={20} color="#fff" />
              <Text style={styles.actionButtonText}>Schedule Viewing</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  dashboardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 16,
  },
  metricCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    width: "48%",
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  metricValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  metricLabel: {
    fontSize: 14,
    color: "#666",
  },
  sectionContainer: {
    padding: 16,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  sectionLink: {
    fontSize: 14,
    color: "#4a90e2",
    fontWeight: "500",
  },
  chartContainer: {
    height: 120,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  chartColumn: {
    alignItems: "center",
    width: "14%",
  },
  chartBar: {
    width: 20,
    backgroundColor: "#4a90e2",
    borderRadius: 10,
    marginBottom: 8,
  },
  chartLabel: {
    fontSize: 12,
    color: "#666",
  },
  activityContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  activityItem: {
    flexDirection: "row",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    paddingBottom: 16,
  },
  activityItem: {
    flexDirection: "row",
    marginBottom: 16,
  },
  activityIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#f0f7ff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  activityHighlight: {
    fontWeight: "bold",
    color: "#333",
  },
  activityTime: {
    fontSize: 12,
    color: "#999",
  },
  listingsContainer: {
    paddingRight: 16,
  },
  propertyCard: {
    width: 220,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    marginRight: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  propertyImage: {
    width: "100%",
    height: 120,
  },
  propertyOverlay: {
    position: "absolute",
    top: 8,
    right: 8,
  },
  propertyStatus: {
    backgroundColor: "#4a90e2",
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  propertyDetails: {
    padding: 12,
  },
  propertyPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  propertyLocation: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  propertyStats: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  propertyStat: {
    fontSize: 12,
    color: "#999",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    marginBottom: 24,
  },
  actionButton: {
    backgroundColor: "#4a90e2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  actionButtonText: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 8,
  },
});

export default AgentHomepage
