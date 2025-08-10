import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

interface AppointmentCardProps {
  doctorName: string;
  specialty: string;
  initials: string;
  time: string;
  location: string;
  status: string;
  statusColor: string;
  isOnline?: boolean;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  doctorName,
  specialty,
  initials,
  time,
  location,
  status,
  statusColor,
  isOnline = false
}) => {
  const handleReschedule = (e: any) => {
    e.stopPropagation(); // Prevent triggering the card press
    Alert.alert('Reschedule Appointment', `Reschedule appointment with ${doctorName}?`);
  };

  const handleVideoCall = (e: any) => {
    e.stopPropagation(); // Prevent triggering the card press
    Alert.alert('Join Video Call', `Starting video consultation with ${doctorName}`);
  };

  // Check if current time is within appointment window (simplified logic)
  const isAppointmentTime = () => {
    // For demo purposes, we'll make it available for "Today" appointments
    return status === 'Today';
  };

  return (
    <View 
      style={styles.appointmentCard}
    >
      <View style={styles.appointmentHeader}>
        <View style={styles.doctorInfo}>
          <View style={styles.doctorAvatar}>
            <Text style={styles.doctorInitials}>{initials}</Text>
          </View>
          <View style={styles.doctorDetails}>
            <Text style={styles.doctorName}>{doctorName}</Text>
            <Text style={styles.specialty}>{specialty}</Text>
          </View>
        </View>
        <View style={styles.appointmentStatus}>
          <Text style={[styles.statusDot, { color: statusColor }]}>●</Text>
          <Text style={styles.statusLabel}>{status}</Text>
        </View>
      </View>
      <View style={styles.appointmentBody}>
        <View style={styles.leftColumn}>
          <View style={styles.timeInfo}>
            <FontAwesome6 name="time" size={16} color="#2c5aa0" />
            <Text style={styles.timeText}>{time}</Text>
          </View>
          <View style={styles.locationInfo}>
            <FontAwesome6 name="location" size={16} color="#7f8c8d" />
            <Text style={styles.locationText}>{location}</Text>
          </View>
        </View>
        <View style={styles.rightColumn}>
          {isOnline ? (
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={[
                  styles.videoCallButton, 
                  !isAppointmentTime() && styles.disabledButton
                ]} 
                onPress={isAppointmentTime() ? handleVideoCall : undefined}
                disabled={!isAppointmentTime()}
              >
                <FontAwesome6 
                  name="videocam" 
                  size={14} 
                  color={isAppointmentTime() ? "#ffffff" : "#bdc3c7"} 
                />
                <Text style={[
                  styles.videoCallText,
                  !isAppointmentTime() && styles.disabledText
                ]}>
                  {isAppointmentTime() ? 'Join Call' : 'Scheduled'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.rescheduleButtonSmall} onPress={handleReschedule}>
                <FontAwesome6 name="calendar-outline" size={12} color="#2c5aa0" />
                <Text style={styles.rescheduleTextSmall}>Reschedule</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity style={styles.rescheduleButton} onPress={handleReschedule}>
              <FontAwesome6 name="calendar-outline" size={14} color="#2c5aa0" />
              <Text style={styles.rescheduleText}>Reschedule</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appointmentCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginRight: 15,
    width: 280,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  appointmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
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
    fontSize: 13,
    color: '#7f8c8d',
  },
  appointmentStatus: {
    alignItems: 'center',
  },
  statusDot: {
    fontSize: 12,
    color: '#27ae60',
    marginBottom: 2,
  },
  statusLabel: {
    fontSize: 11,
    color: '#7f8c8d',
    fontWeight: '600',
  },
  appointmentBody: {
    marginBottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingLeft: 8,
  },
  buttonContainer: {
    alignItems: 'flex-end',
    gap: 6,
  },
  timeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  timeText: {
    fontSize: 14,
    color: '#2c3e50',
    fontWeight: '600',
    marginLeft: 8,
  },
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 13,
    color: '#7f8c8d',
    marginLeft: 8,
  },
  rescheduleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    alignSelf: 'flex-end',
  },
  rescheduleText: {
    fontSize: 12,
    color: '#2c5aa0',
    fontWeight: '600',
    marginLeft: 4,
  },
  videoCallButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#27ae60',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    alignSelf: 'flex-end',
  },
  videoCallText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '600',
    marginLeft: 4,
  },
  disabledButton: {
    backgroundColor: '#ecf0f1',
    opacity: 0.6,
  },
  disabledText: {
    color: '#bdc3c7',
  },
  rescheduleButtonSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'flex-end',
  },
  rescheduleTextSmall: {
    fontSize: 10,
    color: '#2c5aa0',
    fontWeight: '600',
    marginLeft: 2,
  },
});

export default AppointmentCard;
