// ...existing code...
import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
// ...existing code...
import { RadiologyReport } from '../../common/types';
import { getRadiologyReports } from '../../services/recordsService';
import RadiologyItem from './RadiologyItem';

export default function RadiologyReportsTab() {
    const [radiologyReports, setRadiologyReports] = useState<RadiologyReport[]>([]);

    useEffect(() => {
        getRadiologyReports().then(data => setRadiologyReports(data));
    }, []);

    const handleDownload = (report: RadiologyReport) => {
        Alert.alert('Download', `Downloading PDF for ${report.medicalTest.name}`);
    };

    return (
        <View style={{ padding: 16 }}>
            {radiologyReports.map((report: RadiologyReport) => (
                <RadiologyItem key={report.id} report={report} onDownload={handleDownload} />
            ))}
        </View>
    );
}
