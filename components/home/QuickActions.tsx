import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const QuickActions: React.FC = () => {
  const handleQuickAction = (action: string) => {
    Alert.alert('Quick Action', `${action} selected`);
  };

  const quickActions = [
    { icon: 'calendar', label: 'Book Appointment', color: '#3498db' },
    { icon: 'medical', label: 'Medical Records', color: '#e74c3c' },
    { icon: 'chatbubbles', label: 'Chat with Doctor', color: '#2ecc71' },
    { icon: 'card', label: 'Pay Bills', color: '#f39c12' },
  ];

  return (
    <View style={styles.quickActionsSection}>
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.quickActionsGrid}>
        {quickActions.map((action, index) => (
          <TouchableOpacity
            key={action.label}
            style={styles.quickActionCard}
            onPress={() => handleQuickAction(action.label)}
          >
            <View style={[styles.quickActionIcon, { backgroundColor: action.color }]}>
              <Ionicons name={action.icon as any} size={24} color="#ffffff" />
            </View>
            <Text style={styles.quickActionLabel}>{action.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quickActionsSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickActionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    width: '48%',
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  quickActionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  quickActionLabel: {
    fontSize: 12,
    color: '#2c3e50',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default QuickActions;
