import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import VitalCard from './VitalCard';

const HealthOverview: React.FC = () => {
  const vitalsData = [
    {
      id: 1,
      date: 'Aug 8, 2025',
      bloodPressure: '120/80',
      heartRate: '72 bpm',
      temperature: '98.6°F',
      weight: '165 lbs',
      status: 'Normal'
    },
    {
      id: 2,
      date: 'Jul 15, 2025',
      bloodPressure: '118/78',
      heartRate: '68 bpm',
      temperature: '98.4°F',
      weight: '167 lbs',
      status: 'Normal'
    },
    {
      id: 3,
      date: 'Jun 22, 2025',
      bloodPressure: '122/82',
      heartRate: '75 bpm',
      temperature: '98.8°F',
      weight: '166 lbs',
      status: 'Normal'
    },
    {
      id: 4,
      date: 'May 18, 2025',
      bloodPressure: '125/85',
      heartRate: '78 bpm',
      temperature: '99.1°F',
      weight: '168 lbs',
      status: 'Elevated'
    },
    {
      id: 5,
      date: 'Apr 20, 2025',
      bloodPressure: '119/79',
      heartRate: '70 bpm',
      temperature: '98.5°F',
      weight: '169 lbs',
      status: 'Normal'
    }
  ];

  return (
    <View style={styles.healthOverviewSection}>
      <Text style={styles.sectionTitle}>Health Overview</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        pagingEnabled={false}
        decelerationRate="fast"
        snapToInterval={250}
        snapToAlignment="start"
        contentContainerStyle={styles.carouselContainer}
        style={styles.vitalsScrollView}
      >
        {vitalsData.map((visit) => (
          <VitalCard key={visit.id} visit={visit} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  healthOverviewSection: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 12,
  },
  vitalsScrollView: {
    height: 120,
  },
  carouselContainer: {
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
});

export default HealthOverview;
