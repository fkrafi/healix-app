import { v4 as uuidv4 } from 'uuid';
import { Medication, Prescription } from '../types';
import { APPOINTMENT_1, APPOINTMENT_2, APPOINTMENT_3 } from './appointments';

const MEDICATION_AMOXICILLIN: Medication = {
    id: uuidv4(),
    name: 'Amoxicillin',
    dosage: '500mg',
    frequency: '3 times a day',
    startDate: '2025-08-05',
    endDate: '2025-08-10',
};

const MEDICATION_IBUPROFEN: Medication = {
    id: uuidv4(),
    name: 'Ibuprofen',
    dosage: '200mg',
    frequency: '2 times a day',
    startDate: '2025-07-25',
    endDate: '2025-07-30',
};

const MEDICATION_PARACETAMOL: Medication = {
    id: uuidv4(),
    name: 'Paracetamol',
    dosage: '500mg',
    frequency: '2 times a day',
    startDate: '2025-08-01',
    endDate: '2025-08-05',
};

export const PRESCRIPTION_1: Prescription = {
    id: uuidv4(),
    appointment: APPOINTMENT_1,
    medications: [MEDICATION_AMOXICILLIN],
};

export const PRESCRIPTION_2: Prescription = {
    id: uuidv4(),
    appointment: APPOINTMENT_2,
    medications: [MEDICATION_AMOXICILLIN, MEDICATION_IBUPROFEN],
};


export const PRESCRIPTION_3: Prescription = {
    id: uuidv4(),
    appointment: APPOINTMENT_3,
    medications: [MEDICATION_PARACETAMOL],
};

export const prescriptions: Prescription[] = [
    PRESCRIPTION_1,
    PRESCRIPTION_2,
    PRESCRIPTION_3,
];