import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { VitalCard } from '../common';
import { getVitals } from '../../services/recordsService';
import { Vital } from '../../common/types';

export default function VitalsTab() {
    const [vitals, setVitals] = React.useState<Vital[]>([]);

    useEffect(() => {
        getVitals().then((vitals: Vital[]) => setVitals(vitals));
    }, []);

    useEffect(() => {
        console.log(vitals);
    }, [vitals]);

    return (
        <ScrollView style={{ paddingHorizontal: 16, paddingVertical: 8 }} showsVerticalScrollIndicator={false}>
            {vitals.map((record, idx) => (
                <VitalCard
                    key={record.id}
                    visit={{
                        id: idx,
                        date: record.date,
                        bloodPressure: record.bloodPressure,
                        heartRate: record.heartRate,
                        temperature: record.temperature,
                        weight: record.weight,
                    }}
                    style={{ width: '100%', marginBottom: 16 }}
                />
            ))}
        </ScrollView>
    );
}
