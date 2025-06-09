import React, { useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  Image, 
  TouchableOpacity,
  Alert
} from 'react-native';
import { useAppointments } from '../component/AppointmentContext';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from '../component/Footer';

const AppointmentsPage = () => {
  const { appointments, cancelAppointment } = useAppointments();
  const navigation = useNavigation();
  const [filter, setFilter] = useState('all'); // all, pending, confirmed, cancelled

  const filteredAppointments = filter === 'all' 
    ? appointments 
    : appointments.filter(app => app.status === filter);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return '#FFC107';
      case 'confirmed': return '#4CAF50';
      case 'cancelled': return '#F44336';
      default: return '#757575';
    }
  };

  const handleCancel = (id) => {
    Alert.alert(
      "Cancel Appointment",
      "Are you sure you want to cancel this appointment?",
      [
        { text: "No", style: "cancel" },
        { 
          text: "Yes", 
          onPress: () => {
            cancelAppointment(id);
            Alert.alert("Cancelled", "Your appointment has been cancelled");
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Appointments</Text>
      
      <View style={styles.filterContainer}>
        <TouchableOpacity 
          style={[styles.filterButton, filter === 'all' && styles.activeFilter]}
          onPress={() => setFilter('all')}
        >
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.filterButton, filter === 'pending' && styles.activeFilter]}
          onPress={() => setFilter('pending')}
        >
          <Text style={styles.filterText}>Pending</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.filterButton, filter === 'confirmed' && styles.activeFilter]}
          onPress={() => setFilter('confirmed')}
        >
          <Text style={styles.filterText}>Confirmed</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.filterButton, filter === 'cancelled' && styles.activeFilter]}
          onPress={() => setFilter('cancelled')}
        >
          <Text style={styles.filterText}>Cancelled</Text>
        </TouchableOpacity>
      </View>
      
      {filteredAppointments.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Icon name="calendar-times-o" size={50} color="#ccc" />
          <Text style={styles.emptyText}>No appointments found</Text>
        </View>
      ) : (
        <FlatList
          data={filteredAppointments}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 80 }}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.appointmentCard}
              onPress={() => navigation.navigate('DetailsPage', { items: { id: item.propertyId } })}
            >
              <View style={styles.cardHeader}>
                <Image source={item.propertyImage} style={styles.propertyImage} />
                <View style={styles.propertyInfo}>
                  <Text style={styles.propertyTitle}>{item.propertyTitle}</Text>
                  <Text style={styles.agentName}>Agent: {item.agentName}</Text>
                  <View style={styles.statusContainer}>
                    <View style={[styles.statusIndicator, { backgroundColor: getStatusColor(item.status) }]} />
                    <Text style={styles.statusText}>{item.status.charAt(0).toUpperCase() + item.status.slice(1)}</Text>
                  </View>
                </View>
              </View>
              
              <View style={styles.appointmentDetails}>
                <Text style={styles.dateLabel}>
                  <Icon name="calendar" size={14} color="#555" /> Appointment Date:
                </Text>
                <Text style={styles.dateValue}>{formatDate(item.date)}</Text>
                
                {item.note && (
                  <>
                    <Text style={styles.noteLabel}>
                      <Icon name="sticky-note" size={14} color="#555" /> Note:
                    </Text>
                    <Text style={styles.noteValue}>{item.note}</Text>
                  </>
                )}
              </View>
              
              {item.status !== 'cancelled' && (
                <TouchableOpacity 
                  style={styles.cancelButton}
                  onPress={() => handleCancel(item.id)}
                >
                  <Text style={styles.cancelButtonText}>Cancel Appointment</Text>
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          )}
        />
      )}
      
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#eee',
  },
  activeFilter: {
    backgroundColor: '#87CEEB',
  },
  filterText: {
    fontSize: 12,
    fontWeight: '500',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  emptyText: {
    marginTop: 10,
    fontSize: 16,
    color: '#888',
  },
  appointmentCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  propertyImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  propertyInfo: {
    marginLeft: 15,
    flex: 1,
  },
  propertyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  agentName: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  statusIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
  },
  appointmentDetails: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  dateLabel: {
    fontSize: 14,
    color: '#555',
  },
  dateValue: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  noteLabel: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  noteValue: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#666',
  },
  cancelButton: {
    backgroundColor: '#F44336',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 15,
  },
  cancelButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AppointmentsPage;