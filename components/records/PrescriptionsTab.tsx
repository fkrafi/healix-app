import React, { useEffect, useState } from 'react';
import { View, Alert } from 'react-native';
import { Prescription } from '../../common/types';
import { getPrescriptions } from '../../services/recordsService';
import PrescriptionItem from './PrescriptionItem';

export default function PrescriptionsTab() {
    const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);

    useEffect(() => {
        getPrescriptions().then(data => setPrescriptions(data));
    }, []);

    const handleDownload = (prescription: Prescription) => {
        Alert.alert('Download', `Downloading PDF for ${prescription.appointment.doctor.name} on ${prescription.appointment.scheduledAt.toLocaleDateString()}`);
    };

    return (
        <View style={{ padding: 16 }}>
            {prescriptions.map((prescription) => (
                <PrescriptionItem key={prescription.id} prescription={prescription} onDownload={handleDownload} />
            ))}
        </View>
    );
}
