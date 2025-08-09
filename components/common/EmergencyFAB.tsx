import React from 'react';
import { TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const EmergencyFAB: React.FC = () => {
  const handleEmergencyPress = () => {
    Alert.alert('Emergency', 'Emergency services contacted!');
  };

  return (
    <TouchableOpacity 
      style={styles.fab} 
      onPress={handleEmergencyPress}
      accessible={true}
      accessibilityLabel="Emergency Call"
      accessibilityHint="Call emergency services immediately"
      accessibilityRole="button"
    >
      <Ionicons name="call" size={28} color="#ffffff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#e74c3c',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 12,
    shadowColor: '#e74c3c',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    zIndex: 1000,
    borderWidth: 3,
    borderColor: '#ffffff',
  },
});

export default EmergencyFAB;
