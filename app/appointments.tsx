import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Appointment } from '../common/types';
import { AppointmentsSection } from '../components/appointments';
import { getAppointments } from '../services/appointmentService';

export default function AppointmentsScreen() {
  const [activeTab, setActiveTab] = useState<'scheduled' | 'history'>('scheduled');
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [scheduledAppointments, setScheduledAppointments] = useState<Appointment[]>([]);
  const [historyAppointments, setHistoryAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    getAppointments()
      .then((appointments: Appointment[]) => setAppointments(appointments));
  }, []);

  useEffect(() => {
    const nowPlus15Min = new Date().getTime() + 900000;
    setScheduledAppointments(appointments.filter(a => a.scheduledAt.getTime() >= nowPlus15Min && a.status === 'Scheduled'));
    setHistoryAppointments(appointments.filter(a => a.scheduledAt.getTime() < nowPlus15Min));
  }, [appointments]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Appointments</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="#2c5aa0" />
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'scheduled' && styles.activeTab]}
          onPress={() => setActiveTab('scheduled')}
        >
          <Text style={[styles.tabText, activeTab === 'scheduled' && styles.activeTabText]}>Scheduled</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'history' && styles.activeTab]}
          onPress={() => setActiveTab('history')}
        >
          <Text style={[styles.tabText, activeTab === 'history' && styles.activeTabText]}>History</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {activeTab === 'scheduled' ? (
          <AppointmentsSection
            sectionTitle='Scheduled Appointments'
            appointments={scheduledAppointments} />
        ) : (
          <AppointmentsSection
            sectionTitle='Appointment History'
            appointments={historyAppointments} />
        )}
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
    justifyContent: 'flex-end',
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
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#e3f2fd',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#2c5aa0',
  },
  tabText: {
    fontSize: 16,
    color: '#7f8c8d',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#2c5aa0',
    fontWeight: 'bold',
  },
});
