import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { RADIOLOGY_CATEGORY } from '../../common/constants';
import { RadiologyReport } from '../../common/types';

interface RadiologyItemProps {
  report: RadiologyReport;
  onDownload: (report: RadiologyReport) => void;
}

const RadiologyItem: React.FC<RadiologyItemProps> = ({ report, onDownload }) => (
  <View
    style={{
      backgroundColor: '#fff',
      borderRadius: 16,
      padding: 16,
      marginBottom: 12,
      elevation: 2,
      borderWidth: 2,
      borderColor: RADIOLOGY_CATEGORY.color,
    }}
  >
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={{ width: 50, height: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center', marginRight: 15 }}>
        <FontAwesome6 name={RADIOLOGY_CATEGORY.icon as any} size={24} color={RADIOLOGY_CATEGORY.color} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#2c3e50', marginBottom: 4 }}>{report.medicalTest.name}</Text>
        <Text style={{ fontSize: 14, color: '#7f8c8d', marginBottom: 2 }}>{report.performedAt.toLocaleDateString()}</Text>
      </View>
      <TouchableOpacity
        style={{ marginLeft: 10, padding: 8, borderRadius: 8, backgroundColor: '#e3f2fd', flexDirection: 'row', alignItems: 'center' }}
        onPress={() => onDownload(report)}
      >
        <Ionicons name="document" size={20} color={RADIOLOGY_CATEGORY.color} />
        <Text style={{ marginLeft: 6, color: RADIOLOGY_CATEGORY.color, fontWeight: '600' }}>PDF</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default RadiologyItem;
