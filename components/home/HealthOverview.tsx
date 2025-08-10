import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Vital } from '../../common/types';
import { getVitals } from '../../services/recordsService';
import VitalCard from '../common/VitalCard';

const HealthOverview: React.FC = () => {
  const [vitals, setVitals] = useState<Vital[]>([]);

  useEffect(() => {getVitals().then((vitals: Vital[]) => setVitals(vitals))}, []);

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
        {vitals.slice(0, 5).map((visit: Vital) => (
          <VitalCard key={visit.id} visit={visit} borderColor='transparent' />
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
    gap: 10,
  },
});

export default HealthOverview;
