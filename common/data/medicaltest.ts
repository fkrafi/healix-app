import { MedicalTest } from "../types";
import { v4 as uuidv4} from 'uuid';


export const CBC: MedicalTest = {
    id: uuidv4(),
    name: "CBC",
    type: "Lab"
}

export const LFT: MedicalTest = {
    id: uuidv4(),
    name: "Liver Function Test",
    type: "Lab"
};

export const CHEST_X_RAY: MedicalTest = {
    id: uuidv4(),
    name: "Chest X-Ray",
    type: "Radiology"
};

export const KNEE_MRI: MedicalTest = {
    id: uuidv4(),
    name: "Knee MRI",
    type: "Radiology"
};

export const ABDOMINAL_ULTRASOUND: MedicalTest = {
    id: uuidv4(),
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