import { LabReport } from "../types";
import { APPOINTMENT_1 } from "./appointments";
import { CBC, LFT } from "./medicaltest";
import { PRESCRIPTION_1 } from "./prescriptions";
import { v4 as uuidv4} from 'uuid';

export const LABREPORT_CBC: LabReport = {
    id: uuidv4(),
    appointment: APPOINTMENT_1,
    medicalTest: CBC,
    prescription: PRESCRIPTION_1,
    performedAt: new Date("2025-07-10T09:00:00Z"),
    reportGeneratedAt: new Date("2025-07-11T12:00:00Z"),
};

export const LABREPORT_LFT: LabReport = {
    id: uuidv4(),
    appointment: APPOINTMENT_1,
    medicalTest: LFT,
    prescription: PRESCRIPTION_1,
    performedAt: new Date("2025-07-15T09:00:00Z"),
    reportGeneratedAt: new Date("2025-07-16T12:00:00Z"),
};

export const labRecords: LabReport[] = [
    LABREPORT_CBC,
    LABREPORT_LFT,
];