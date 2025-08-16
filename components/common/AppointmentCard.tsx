import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { Appointment } from '../../common/types';
import { router } from 'expo-router';

interface AppointmentCardProps {
  appointment: Appointment;
  type?: 'scheduled' | 'history';
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment, type }) => {
  const isHistory = appointment.scheduledAt < new Date();

  return (
    <View style={styles.card}>
      {/* Top Row: Doctor/Department | Date/Time */}
      <View style={styles.rowCompact}>
        <View style={styles.colLeftCompact}>
          <Text style={styles.doctorName}>{appointment.doctor.name}</Text>
          <Text style={styles.department}>{appointment.doctor.department}</Text>
        </View>
        <View style={styles.colRightCompact}>
          <Text style={styles.date}>{appointment.scheduledAt.toLocaleDateString()}</Text>
          <Text style={styles.time}>{appointment.scheduledAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
        </View>
      </View>
      {/* Second Row: Location | Actions */}
      <View style={styles.rowCompact}>
        <View style={styles.colLeftCompact}>
          {appointment.visitType === 'tele' ? (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="videocam" size={16} color="#27ae60" style={{ marginRight: 4 }} />
              <Text style={styles.location}>Online Consultation</Text>
            </View>
          ) : (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="location" size={16} color="#2c5aa0" style={{ marginRight: 4 }} />
              <Text style={styles.location}>Main Hospital</Text>
            </View>
          )}
        </View>
        <View style={styles.colRightActionsCompact}>
              {appointment.status && appointment.status !== 'Scheduled' && (
                <Text style={[styles.status, getStatusColor(appointment.status)]}>{appointment.status}</Text>
              )}
              {isHistory ? (
                <TouchableOpacity style={[styles.iconButtonCompact, { backgroundColor: '#f4f4f4' }]} onPress={() => router.push({ pathname: '/book-appointment', params: { id: appointment.doctor.id } })}>
                  <Ionicons name="repeat" size={18} color="#7f8c8d" />
                </TouchableOpacity>
              ) : (
                <>
                  <TouchableOpacity style={[styles.iconButtonCompact, { backgroundColor: '#e3f2fd' }]}>
                    <Ionicons name="calendar" size={18} color="#2c5aa0" />
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.iconButtonCompact, { backgroundColor: '#ffeaea' }]}>
                    <Ionicons name="close" size={18} color="#e74c3c" />
                  </TouchableOpacity>
                  {appointment.visitType === 'tele' && (
                    <TouchableOpacity style={[styles.iconButtonCompact, { backgroundColor: '#eafaf1' }]}>
                      <Ionicons name="call" size={18} color="#27ae60" />
                    </TouchableOpacity>
                  )}
                </>
              )}
        </View>
      </View>
    </View>
  );
};
  
function getStatusColor(status?: string) {
  switch (status) {
    case 'Completed':
      return { color: '#27ae60' };
    case 'Cancelled':
      return { color: '#e74c3c' };
    case 'No Show':
      return { color: '#f39c12' };
    default:
      return { color: '#7f8c8d' };
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    width: '100%',
    alignSelf: 'stretch',
  },
  rowCompact: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  colLeftCompact: {
    flex: 1,
  },
  colRightCompact: {
    flex: 1,
    alignItems: 'flex-end',
  },
  colRightActionsCompact: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 4,
  },
  iconButtonCompact: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4,
    elevation: 1,
  },
  doctorName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
  },
  department: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  date: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2c3e50',
  },
  time: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  location: {
    fontSize: 14,
    color: '#2c5aa0',
  },
  actionButton: {
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginLeft: 6,
  },
  actionText: {
    color: '#2c5aa0',
    fontWeight: '600',
    fontSize: 13,
  },
  status: {
    marginLeft: 8,
    fontSize: 13,
    color: '#7f8c8d',
    fontWeight: '600',
  },
});

export default AppointmentCard;
