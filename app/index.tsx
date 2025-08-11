import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '../components/common/Header';
import HealthOverview from '../components/home/HealthOverview';
import PatientCard from '../components/home/PatientCard';

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
        {/* <AppointmentsSection /> */}

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
