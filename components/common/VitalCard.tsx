import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View, DimensionValue } from 'react-native';
import { Vital } from '../../common/types';

interface VitalData extends Vital {}

interface VitalCardProps {
  visit: VitalData;
  borderColor?: string;
  width?: DimensionValue;
}

const VitalCard: React.FC<VitalCardProps> = ({ visit, borderColor, width }) => {
  return (
    <View style={[styles.vitalCard, borderColor ? { borderColor } : {}, width ? { width } : {}]}>
      <View style={styles.vitalHeader}>
        <Text style={styles.visitDate}>{visit.date}</Text>
      </View>

      <View style={styles.vitalMetrics}>
        <View style={styles.metricItem}>
          <Ionicons name="heart" size={14} color="#e74c3c" />
          <Text style={styles.metricValue}>{visit.bloodPressure}</Text>
          <Text style={styles.metricLabel}>BP</Text>
        </View>
        <View style={styles.metricItem}>
          <Ionicons name="pulse" size={14} color="#3498db" />
          <Text style={styles.metricValue}>{visit.heartRate}</Text>
          <Text style={styles.metricLabel}>HR</Text>
        </View>
        <View style={styles.metricItem}>
          <Ionicons name="thermometer" size={14} color="#f39c12" />
          <Text style={styles.metricValue}>{visit.temperature}</Text>
          <Text style={styles.metricLabel}>Temp</Text>
        </View>
        <View style={styles.metricItem}>
          <Ionicons name="fitness" size={14} color="#9b59b6" />
          <Text style={styles.metricValue}>{visit.weight}</Text>
          <Text style={styles.metricLabel}>Weight</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vitalCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    elevation: 2,
    borderWidth: 2,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  vitalHeader: {
    marginBottom: 10,
  },
  visitDate: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  vitalMetrics: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  metricItem: {
    alignItems: 'center',
    flex: 1,
  },
  metricLabel: {
    fontSize: 9,
    color: '#7f8c8d',
    marginTop: 2,
    textAlign: 'center',
    fontWeight: '600',
  },
  metricValue: {
    fontSize: 11,
    color: '#2c3e50',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 2,
    minWidth: 45,
  },
});

export default VitalCard;
