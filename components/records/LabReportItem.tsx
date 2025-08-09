import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LabReport } from '../../common/types';
import { LAB_CATEGORY } from '../../common/constants';

interface LabItemComponentProps {
  report: LabReport;
  onDownload?: (report: LabReport) => void;
}

const LabReportItem: React.FC<LabItemComponentProps> = ({ report, onDownload }) => (
  <View style={[styles.card, { borderColor: LAB_CATEGORY.color }]}> 
    <View style={styles.row}>
      <View style={[styles.iconContainer, { borderColor: LAB_CATEGORY.color }]}> 
        <Ionicons name={LAB_CATEGORY.icon as any} size={24} color={LAB_CATEGORY.color} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{report.medicalTest.name}</Text>
        <Text style={styles.subtitle}>{report.performedAt.toLocaleDateString()}</Text>
      </View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: LAB_CATEGORY.color + '22' }]}
        onPress={() => onDownload && onDownload(report)}
      >
        <Ionicons name="document" size={20} color={LAB_CATEGORY.color} />
        <Text style={[styles.buttonLabel, { color: LAB_CATEGORY.color }]}>PDF</Text>
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

export default LabReportItem;
