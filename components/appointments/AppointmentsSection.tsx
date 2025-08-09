import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import AppointmentCard from './AppointmentCard';

const AppointmentsSection: React.FC = () => {
  const appointments = [
    {
      doctorName: 'Dr. Michael Chen',
      specialty: 'Cardiology',
      initials: 'MC',
      time: '2:30 PM - 3:00 PM',
      location: 'Room 302, Floor 3',
      status: 'Today',
      statusColor: '#27ae60',
      isOnline: false
    },
    {
      doctorName: 'Dr. Sarah Adams',
      specialty: 'General Medicine',
      initials: 'SA',
      time: '10:00 AM - 10:30 AM',
      location: 'Online Consultation',
      status: 'Tomorrow',
      statusColor: '#f39c12',
      isOnline: true
    },
    {
      doctorName: 'Dr. Robert Johnson',
      specialty: 'Orthopedics',
      initials: 'RJ',
      time: '3:15 PM - 4:00 PM',
      location: 'Room 201, Floor 2',
      status: 'Mon 12',
      statusColor: '#9b59b6',
      isOnline: false
    }
  ];

  return (
    <View style={styles.appointmentsSection}>
      <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        pagingEnabled={false}
        decelerationRate="fast"
        snapToInterval={280}
        snapToAlignment="start"
        contentContainerStyle={styles.carouselContainer}
        style={styles.appointmentsScrollView}
      >
        {appointments.map((appointment) => (
          <AppointmentCard
            key={`${appointment.doctorName}-${appointment.time}`}
            doctorName={appointment.doctorName}
            specialty={appointment.specialty}
            initials={appointment.initials}
            time={appointment.time}
            location={appointment.location}
            status={appointment.status}
            statusColor={appointment.statusColor}
            isOnline={appointment.isOnline}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  appointmentsSection: {
    marginBottom: 20,
    // height: 220,
  },
  appointmentsScrollView: {
    // height: 180,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  carouselContainer: {
    paddingHorizontal: 20,
  },
});

export default AppointmentsSection;
