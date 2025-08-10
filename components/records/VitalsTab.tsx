import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { VITALS_CATEGORY } from '../../common/constants';
import { Vital } from '../../common/types';
import { getVitals } from '../../services/recordsService';
import { VitalCard } from '../common';

export default function VitalsTab() {
    const [vitals, setVitals] = React.useState<Vital[]>([]);

    useEffect(() => {
        getVitals().then((vitals: Vital[]) => setVitals(vitals));
    }, []);

    return (
        <ScrollView style={{ paddingHorizontal: 16, paddingVertical: 8 }} showsVerticalScrollIndicator={false}>
            {vitals.map((record) => (
                <VitalCard
                    key={record.id}
                    visit={{
                        id: record.id,
                        date: record.date,
                        bloodPressure: record.bloodPressure,
                        heartRate: record.heartRate,
                        temperature: record.temperature,
                        weight: record.weight,
                    }}
                    borderColor={VITALS_CATEGORY.color}
                    width={'100%'}
                />
            ))}
        </ScrollView>
    );
}
