import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { LabReport } from '../../common/types';
import { getLabReports } from '../../services/recordsService';
import LabReportItem from './LabReportItem';

export default function LabReportsTab() {
    const [labReports, setLabReports] = useState<LabReport[]>([]);

    useEffect(() => {
        getLabReports().then(data => setLabReports(data));
    }, []);

    const handleDownload = (report: LabReport) => {
        Alert.alert('Download', `Downloading PDF for ${report.medicalTest.name}`);
    };

    return (
        <View style={{ padding: 16 }}>
            {labReports.map((report) => (
                <LabReportItem key={report.id} report={report} onDownload={handleDownload} />
            ))}
        </View>
    );
}
