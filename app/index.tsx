import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/common/Header';
import PatientCard from '../components/home/PatientCard';
import HealthOverview from '../components/home/HealthOverview';
import AppointmentsSection from '../components/appointments/AppointmentsSection';
import QuickActions from '../components/home/QuickActions';
import RecentActivity from '../components/home/RecentActivity';
import EmergencyFAB from '../components/common/EmergencyFAB';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Header */}
      <Header />

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="never"
      >
        {/* Patient Info Card */}
        <PatientCard />

        {/* Upcoming Appointments Carousel */}
        <AppointmentsSection />

        {/* Health Overview */}
        <HealthOverview />

        {/* Quick Actions */}
        {/* <QuickActions /> */}

        {/* Recent Activity */}
        {/* <RecentActivity /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
    marginTop: 0,
  },
  scrollContent: {
    paddingHorizontal: 10,
    paddingTop: 0,
    paddingBottom: 20,
  },
});
