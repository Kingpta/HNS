import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Modal,
  Alert,
} from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { useAppointments } from "../component/AppointmentContext";
import DateTimePicker from "@react-native-community/datetimepicker";

const DetailsPage = ({ route }) => {
  const navigation = useNavigation();
  const { items } = route.params || {};
  const { addAppointment } = useAppointments();

  const [modalVisible, setModalVisible] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [note, setNote] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  if (!items) {
    return (
      <View style={styles.centered}>
        <Text>No items data found.</Text>
      </View>
    );
  }

  const handleBookAppointment = () => {
    setModalVisible(true);
  };

  const confirmAppointment = () => {
    const appointment = {
      propertyId: items.id,
      propertyTitle: items.title || "Primary Apartment",
      propertyImage: items.image,
      agentId: items.agent?.id,
      agentName: items.agent?.name || "Agent",
      date: appointmentDate.toISOString(),
      note: note,
    };

    addAppointment(appointment);
    setModalVisible(false);
    Alert.alert(
      "Appointment Booked",
      "Your appointment has been scheduled. You can view it in the Appointments tab.",
      [{ text: "OK" }]
    );
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || appointmentDate;
    setShowDatePicker(Platform.OS === "ios");
    setAppointmentDate(currentDate);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
      >
        <View style={styles.contentWrapper}>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.header}>
              <Image source={items.image} style={styles.image} />
              <TouchableOpacity
                style={styles.undoBtn}
                onPress={() => navigation.goBack()}
              >
                <Icon name="arrow-left" size={20} color="#333" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.loveBtn}>
                <Icon
                  name="heart"
                  size={20}
                  color="#FF5A5F"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.section}>
              <Text style={styles.Title}>
                {items.title || "Primary Apartment"}
              </Text>
              <Text style={styles.addressText}>
                <Icon name="map-marker" size={14} color="#666" /> {items.address || "201 Odoguyan, Lasustech, Lagos"}
              </Text>

              <View style={styles.detailsRow}>
                <View style={styles.detailItem}>
                  <MaterialCommunityIcons name="bed-empty" size={22} color="#4a90e2" />
                  <Text style={styles.detailText}>3 Bedrooms</Text>
                </View>
                <View style={styles.detailItem}>
                  <MaterialCommunityIcons name="toilet" size={22} color="#4a90e2" />
                  <Text style={styles.detailText}>2 Bathrooms</Text>
                </View>
                <View style={styles.detailItem}>
                  <MaterialCommunityIcons name="silverware-fork-knife" size={22} color="#4a90e2" />
                  <Text style={styles.detailText}>1 Kitchen</Text>
                </View>
                <View style={styles.detailItem}>
                  <MaterialCommunityIcons name="sofa" size={22} color="#4a90e2" />
                  <Text style={styles.detailText}>1 Living Room</Text>
                </View>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.subTitle}>Listing Agent</Text>
              <View style={styles.agentDetails}>
                <Image source={items.image} style={styles.agentImage} />
                <View style={styles.agentInfo}>
                  <Text style={styles.agentName}>
                    {items.agent?.name || "Agent Name"}
                  </Text>
                  <Text style={styles.agentPhone}>{items.phone || "08184594823"}</Text>
                </View>

                <View style={styles.actions}>
                  <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => Linking.openURL(`tel:${items.phone}`)}
                  >
                    <Icon name="phone" size={20} color="#4a90e2" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => Linking.openURL(`sms:${items.phone}`)}
                  >
                    <Icon name="envelope" size={20} color="#4a90e2" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.subTitle}>Overview</Text>
              <Text style={styles.description}>
                {items.descriptionss ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
              </Text>
            </View>
            <View style={styles.section}>
              <View style={styles.imageGrid}>
                {[1, 2, 3, 4, 5, 6].map((_, index) => (
                  <TouchableOpacity key={index} style={styles.imageWrapper}>
                    <Image
                      source={items.image}
                      style={styles.subImage}
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ScrollView>

          {/* Appointment Modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Schedule Appointment</Text>

                <Text style={styles.modalLabel}>Select Date & Time:</Text>
                <TouchableOpacity
                  style={styles.datePickerButton}
                  onPress={() => setShowDatePicker(true)}
                >
                  <Text>{appointmentDate.toLocaleString()}</Text>
                </TouchableOpacity>

                {showDatePicker && (
                  <DateTimePicker
                    value={appointmentDate}
                    mode="datetime"
                    display="default"
                    onChange={onDateChange}
                    minimumDate={new Date()}
                  />
                )}

                <Text style={styles.modalLabel}>Note (Optional):</Text>
                <TextInput
                  style={styles.noteInput}
                  multiline
                  numberOfLines={3}
                  value={note}
                  onChangeText={setNote}
                  placeholder="Add any specific requirements or questions..."
                />

                <View style={styles.modalButtons}>
                  <TouchableOpacity
                    style={[styles.modalButton, styles.cancelButton]}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={styles.buttonText}>Cancel</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.modalButton, styles.confirmButton]}
                    onPress={confirmAppointment}
                  >
                    <Text style={styles.buttonText}>Confirm</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>

          {/* Footer */}
          <View style={styles.footer}>
            <View style={styles.priceContainer}>
              <Text style={styles.priceLabel}>Price</Text>
              <Text style={styles.priceValue}>${items.price || "166"}/year</Text>
            </View>
            <TouchableOpacity
              style={styles.appointmentButton}
              onPress={handleBookAppointment}
            >
              <Text style={styles.buttonText}>Book Appointment</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  contentWrapper: {
    flex: 1,
    position: "relative",
  },
  scrollContent: {
    paddingBottom: 120, // extra space for footer
  },
  header: {
    alignItems: "center",
    margin: 0,
    marginBottom: 0,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 0, // Remove border radius for a cleaner look
    position: "relative",
  },
  headerText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    width: "100%",
    paddingHorizontal: 16,
    alignItems: "center",
  },
  Title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    letterSpacing: 0.5,
  },
  section: {
    marginVertical: 8,
    padding: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
  },
  addressText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
    letterSpacing: 0.2,
  },
  detailsRow: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    width: "48%",
  },
  detailText: {
    marginLeft: 8,
    fontSize: 15,
    color: "#444",
  },
  agentName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  agentDetails: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  agentImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  agentInfo: {
    flex: 1,
  },
  agentPhone: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  actions: {
    flexDirection: "row",
    gap: 16,
  },
  actionButton: {
    backgroundColor: "#f0f0f0",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    fontSize: 16,
    color: "#444",
    lineHeight: 24,
    letterSpacing: 0.3,
  },
  button: {
    backgroundColor: "#4a90e2",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 2,
  },
  undoBtn: {
    left: 16,
    top: 16,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 24,
    padding: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    position: "absolute",
    zIndex: 10,
  },
  loveBtn: {
    right: 16,
    top: 16,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 24,
    padding: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    position: "absolute",
    zIndex: 10,
  },
  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 12,
  },
  imageWrapper: {
    width: "32%", // 3 images in a row
    aspectRatio: 1,
    marginBottom: 8,
    borderRadius: 8,
    overflow: "hidden",
  },
  subImage: {
    width: "100%",
    height: "100%",
  },
  footer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceContainer: {
    flex: 1,
  },
  priceLabel: {
    fontSize: 14,
    color: "#666",
  },
  priceValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  footerButtons: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 12,
  },
  appointmentButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  modalLabel: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
  },
  datePickerButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
  noteInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    textAlignVertical: "top",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
    width: "45%",
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#f44336",
  },
  confirmButton: {
    backgroundColor: "#4CAF50",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default DetailsPage;
