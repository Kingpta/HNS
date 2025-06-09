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
import { useNavigation } from "@react-navigation/native";

import React from 'react'

const AgentListingPage = () => {
  const navigation = useNavigation();
  return <>
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ padding: 20, backgroundColor: '#6200ee', borderRadius: 8, margin: 20 }}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Back</Text>
      </TouchableOpacity>
      
      <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 20 }}>Agent Listings</Text>
      <FlatList
        data={[{ id: '1', name: 'Agent One' }, { id: '2', name: 'Agent Two' }]} // Sample data
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 20, backgroundColor: '#fff', marginVertical: 10, borderRadius: 8 }}>
            <Text style={{ fontSize: 18 }}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  </>
}

export default AgentListingPage