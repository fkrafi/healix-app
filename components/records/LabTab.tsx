import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { LabReport } from '../../common/types';
import { getLabReports } from '../../services/recordsService';

export default function LabTab() {
    const [labReports, setLabReports] = useState<LabReport[]>([]);

    useEffect(() => {
        getLabReports().then(data => setLabReports(data));
    }, []);

    return (
        <View style={{ padding: 16 }}>
            {labReports.map((record: LabReport, idx) => (
                <View key={record.id + '-' + idx} style={{ backgroundColor: '#fff', borderRadius: 16, padding: 16, marginBottom: 12, elevation: 2 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ width: 50, height: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center', marginRight: 15 }}>
                                <Ionicons name="flask" size={24} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#2c3e50', marginBottom: 4 }}>{record.medicalTest.name}</Text>
                            <Text style={{ fontSize: 14, color: '#7f8c8d', marginBottom: 2 }}>{record.performedAt.toLocaleDateString()}</Text>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
}
