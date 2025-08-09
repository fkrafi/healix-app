import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RecentActivity: React.FC = () => {
  const activities = [
    {
      icon: 'checkmark-circle',
      color: '#27ae60',
      title: 'Lab Results Available',
      subtitle: 'Blood work completed',
      date: 'Today, 2:30 PM'
    },
    {
      icon: 'calendar',
      color: '#3498db',
      title: 'Appointment Confirmed',
      subtitle: 'Dr. Michael Chen',
      date: 'Yesterday, 4:15 PM'
    },
    {
      icon: 'document-text',
      color: '#f39c12',
      title: 'Prescription Updated',
      subtitle: 'Medication dosage changed',
      date: 'Aug 7, 10:20 AM'
    }
  ];

  return (
    <View style={styles.recentActivitySection}>
      <Text style={styles.sectionTitle}>Recent Activity</Text>
      <View style={styles.activityList}>
        {activities.map((activity, index) => (
          <View key={`${activity.title}-${index}`} style={styles.activityItem}>
            <View style={[styles.activityIcon, { backgroundColor: activity.color }]}>
              <Ionicons name={activity.icon as any} size={20} color="#ffffff" />
            </View>
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>{activity.title}</Text>
              <Text style={styles.activitySubtitle}>{activity.subtitle}</Text>
              <Text style={styles.activityDate}>{activity.date}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  recentActivitySection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  activityList: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 2,
  },
  activitySubtitle: {
    fontSize: 13,
    color: '#7f8c8d',
    marginBottom: 2,
  },
  activityDate: {
    fontSize: 12,
    color: '#95a5a6',
  },
});

export default RecentActivity;
