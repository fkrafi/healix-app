import { RadiologyReport } from '../types';
import { APPOINTMENT_1 } from './appointments';
import { CHEST_X_RAY, KNEE_MRI, ABDOMINAL_ULTRASOUND } from './medicaltest';
import { PRESCRIPTION_1 } from './prescriptions';
import { v4 as uuidv4} from 'uuid';

export const RADIOLOGYREPORT_CHEST_XRAY: RadiologyReport = {
    id: uuidv4(),
    appointment: APPOINTMENT_1,
    medicalTest: CHEST_X_RAY,
    prescription: PRESCRIPTION_1,
    performedAt: new Date('2025-07-20T10:00:00Z'),
    reportGeneratedAt: new Date('2025-07-20T12:00:00Z'),
};

export const RADIOLOGYREPORT_KNEE_MRI: RadiologyReport = {
    id: uuidv4(),
    appointment: APPOINTMENT_1,
    medicalTest: KNEE_MRI,
    prescription: PRESCRIPTION_1,
    performedAt: new Date('2025-07-22T14:00:00Z'),
    reportGeneratedAt: new Date('2025-07-22T16:00:00Z'),
};

export const RADIOLOGYREPORT_ABDOMINAL_ULTRASOUND: RadiologyReport = {
    id: uuidv4(),
    appointment: APPOINTMENT_1,
    medicalTest: ABDOMINAL_ULTRASOUND,
    prescription: PRESCRIPTION_1,
    performedAt: new Date('2025-07-25T09:00:00Z'),
    reportGeneratedAt: new Date('2025-07-25T11:00:00Z'),
};

export const radiologyRecords: RadiologyReport[] = [
    RADIOLOGYREPORT_CHEST_XRAY,
    RADIOLOGYREPORT_KNEE_MRI,
    RADIOLOGYREPORT_ABDOMINAL_ULTRASOUND,
];

