import { MedicalTest } from "../types";


export const CBC: MedicalTest = {
    id: 1,
    name: "CBC",
    type: "Lab"
}

export const LFT: MedicalTest = {
    id: 2,
    name: "Liver Function Test",
    type: "Lab"
};

export const CHEST_X_RAY: MedicalTest = {
    id: 3,
    name: "Chest X-Ray",
    type: "Radiology"
};

export const KNEE_MRI: MedicalTest = {
    id: 4,
    name: "Knee MRI",
    type: "Radiology"
};

export const ABDOMINAL_ULTRASOUND: MedicalTest = {
    id: 5,
    name: "Abdominal Ultrasound",
    type: "Radiology"
};

export const medicalTests: MedicalTest[] = [
    CBC,
    LFT,
    CHEST_X_RAY,
    KNEE_MRI,
    ABDOMINAL_ULTRASOUND
];