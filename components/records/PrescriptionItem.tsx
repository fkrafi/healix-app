import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import { Prescription } from '../../common/types';
import { PRESCRIPTIONS_CATEGORY } from '../../common/constants';

interface PrescriptionItemProps {
  prescription: Prescription;
  onDownload?: (prescription: Prescription) => void;
}

const PrescriptionItem: React.FC<PrescriptionItemProps> = ({ prescription, onDownload }) => (
  <View style={[styles.card, { borderColor: PRESCRIPTIONS_CATEGORY.color }]}> 
    <View style={styles.row}>
      <View style={[styles.iconContainer, { borderColor: PRESCRIPTIONS_CATEGORY.color }]}> 
        <FontAwesome6 name={PRESCRIPTIONS_CATEGORY.icon as any} size={24} color={PRESCRIPTIONS_CATEGORY.color} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{prescription.appointment.doctor.name}</Text>
        <Text style={styles.subtitle}>{prescription.appointment.scheduledAt.toLocaleDateString()}</Text>
      </View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: PRESCRIPTIONS_CATEGORY.color + '22' }]}
        onPress={() => onDownload && onDownload(prescription)}
      >
        <Ionicons name="document" size={20} color={PRESCRIPTIONS_CATEGORY.color} />
        <Text style={[styles.buttonLabel, { color: PRESCRIPTIONS_CATEGORY.color }]}>PDF</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    borderWidth: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    borderWidth: 2,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 2,
  },
  button: {
    marginLeft: 10,
    padding: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonLabel: {
    marginLeft: 6,
    fontWeight: '600',
  },
});

export default PrescriptionItem;
