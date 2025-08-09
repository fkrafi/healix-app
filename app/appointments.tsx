import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AppointmentsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Appointments</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="#2c5aa0" />
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Today's Appointments</Text>
          
          <View style={styles.appointmentCard}>
            <View style={styles.appointmentHeader}>
              <View style={styles.doctorInfo}>
                <View style={styles.doctorAvatar}>
                  <Text style={styles.doctorInitials}>MC</Text>
                </View>
                <View style={styles.doctorDetails}>
                  <Text style={styles.doctorName}>Dr. Michael Chen</Text>
                  <Text style={styles.specialty}>Cardiology</Text>
                </View>
              </View>
              <View style={styles.timeContainer}>
                <Text style={styles.timeText}>2:30 PM</Text>
                <Text style={styles.statusText}>Today</Text>
              </View>
            </View>
            <View style={styles.appointmentBody}>
              <View style={styles.infoRow}>
                <Ionicons name="location" size={16} color="#7f8c8d" />
                <Text style={styles.infoText}>Room 302, Floor 3</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="medical" size={16} color="#7f8c8d" />
                <Text style={styles.infoText}>Routine Checkup</Text>
              </View>
            </View>
            <View style={styles.appointmentActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionButtonText}>Reschedule</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.actionButton, styles.primaryButton]}>
                <Text style={[styles.actionButtonText, styles.primaryButtonText]}>Check In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming</Text>
          
          <View style={styles.appointmentCard}>
            <View style={styles.appointmentHeader}>
              <View style={styles.doctorInfo}>
                <View style={styles.doctorAvatar}>
                  <Text style={styles.doctorInitials}>SA</Text>
                </View>
                <View style={styles.doctorDetails}>
                  <Text style={styles.doctorName}>Dr. Sarah Adams</Text>
                  <Text style={styles.specialty}>General Medicine</Text>
                </View>
              </View>
              <View style={styles.timeContainer}>
                <Text style={styles.timeText}>10:00 AM</Text>
                <Text style={styles.statusText}>Tomorrow</Text>
              </View>
            </View>
            <View style={styles.appointmentBody}>
              <View style={styles.infoRow}>
                <Ionicons name="location" size={16} color="#7f8c8d" />
                <Text style={styles.infoText}>Room 105, Floor 1</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="medical" size={16} color="#7f8c8d" />
                <Text style={styles.infoText}>Follow-up Visit</Text>
              </View>
            </View>
          </View>

          <View style={styles.appointmentCard}>
            <View style={styles.appointmentHeader}>
              <View style={styles.doctorInfo}>
                <View style={styles.doctorAvatar}>
                  <Text style={styles.doctorInitials}>RJ</Text>
                </View>
                <View style={styles.doctorDetails}>
                  <Text style={styles.doctorName}>Dr. Robert Johnson</Text>
                  <Text style={styles.specialty}>Orthopedics</Text>
                </View>
              </View>
              <View style={styles.timeContainer}>
                <Text style={styles.timeText}>3:15 PM</Text>
                <Text style={styles.statusText}>Mon 12</Text>
              </View>
            </View>
            <View style={styles.appointmentBody}>
              <View style={styles.infoRow}>
                <Ionicons name="location" size={16} color="#7f8c8d" />
                <Text style={styles.infoText}>Room 201, Floor 2</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="medical" size={16} color="#7f8c8d" />
                <Text style={styles.infoText}>Consultation</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#ffffff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e3f2fd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginTop: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  appointmentCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  appointmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  doctorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  doctorAvatar: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: '#e3f2fd',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  doctorInitials: {
    color: '#2c5aa0',
    fontSize: 16,
    fontWeight: 'bold',
  },
  doctorDetails: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 2,
  },
  specialty: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  timeContainer: {
    alignItems: 'flex-end',
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  statusText: {
    fontSize: 12,
    color: '#27ae60',
    fontWeight: '600',
    marginTop: 2,
  },
  appointmentBody: {
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#7f8c8d',
    marginLeft: 8,
  },
  appointmentActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#2c5aa0',
  },
  primaryButton: {
    backgroundColor: '#2c5aa0',
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2c5aa0',
  },
  primaryButtonText: {
    color: '#ffffff',
  },
});
