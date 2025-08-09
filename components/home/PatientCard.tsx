import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PatientCard: React.FC = () => {
  const handleEmergencyCall = () => {
    Alert.alert('Emergency Call', 'Calling emergency contact...');
  };

  return (
    <View style={styles.patientCard}>
      {/* Header */}
      <View style={styles.patientHeader}>
        <View style={styles.patientAvatarContainer}>
          <View style={styles.patientAvatar}>
            <Text style={styles.avatarText}>JD</Text>
          </View>
          <View style={styles.patientBasicInfo}>
            <Text style={styles.patientName}>John Doe</Text>
            <Text style={styles.patientId}>ID: #PAT2025001</Text>
          </View>
        </View>
        <View style={styles.statusContainer}>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>Active</Text>
          </View>
        </View>
      </View>

      {/* Body */}
      <View style={styles.patientBody}>
        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Age</Text>
            <Text style={styles.infoValue}>32</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Gender</Text>
            <Text style={styles.infoValue}>Male</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Blood</Text>
            <Text style={styles.infoValue}>O+</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Insurance</Text>
            <Text style={styles.infoValue}>BlueCross</Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.patientFooter}>
        <TouchableOpacity style={styles.emergencyContact} onPress={handleEmergencyCall}>
          <Ionicons name="call" size={14} color="#2c5aa0" />
          <Text style={styles.emergencyLabel}>Emergency:</Text>
          <Text style={styles.emergencyName}>Jane Doe</Text>
          <Text style={styles.emergencyNumber}>+1 (555) 123-4567</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  patientCard: {
    backgroundColor: '#ffffff',
    marginHorizontal: 10,
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  patientHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  patientAvatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  patientAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2c5aa0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  patientBasicInfo: {
    flex: 1,
  },
  patientName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 2,
  },
  patientId: {
    fontSize: 12,
    color: '#7f8c8d',
  },
  statusContainer: {
    alignItems: 'flex-end',
  },
  statusBadge: {
    backgroundColor: '#27ae60',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  patientBody: {
    padding: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoItem: {
    alignItems: 'center',
    flex: 1,
  },
  infoLabel: {
    fontSize: 11,
    color: '#7f8c8d',
    marginBottom: 4,
    fontWeight: '600',
  },
  infoValue: {
    fontSize: 14,
    color: '#2c3e50',
    fontWeight: 'bold',
  },
  patientFooter: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  emergencyContact: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emergencyLabel: {
    fontSize: 11,
    color: '#2c5aa0',
    marginLeft: 4,
    marginRight: 4,
    fontWeight: '600',
  },
  emergencyName: {
    fontSize: 11,
    color: '#2c3e50',
    fontWeight: 'bold',
    marginRight: 4,
  },
  emergencyNumber: {
    fontSize: 11,
    color: '#2c5aa0',
    fontWeight: '600',
  },
});

export default PatientCard;
