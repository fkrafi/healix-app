import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const EmergencyCard: React.FC = () => {
  const handleEmergencyPress = () => {
    Alert.alert('Emergency', 'Emergency services contacted!');
  };

  return (
    <TouchableOpacity style={styles.emergencyCard} onPress={handleEmergencyPress}>
      <View style={styles.emergencyContent}>
        <View style={styles.emergencyIcon}>
          <Text style={styles.emergencyIconText}>🚨</Text>
        </View>
        <View style={styles.emergencyText}>
          <Text style={styles.emergencyTitle}>Emergency</Text>
          <Text style={styles.emergencySubtitle}>Tap for immediate assistance</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  emergencyCard: {
    backgroundColor: '#ff4757',
    borderRadius: 16,
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  emergencyContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emergencyIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  emergencyIconText: {
    fontSize: 24,
  },
  emergencyText: {
    flex: 1,
  },
  emergencyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 2,
  },
  emergencySubtitle: {
    fontSize: 14,
    color: '#ffffff',
    opacity: 0.9,
  },
});

export default EmergencyCard;
