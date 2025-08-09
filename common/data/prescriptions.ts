import { Prescription, Medication } from '../types';

const MEDICATION_AMOXICILLIN: Medication = {
  id: 1,
  name: 'Amoxicillin',
  dosage: '500mg',
  frequency: '3 times a day',
  startDate: '2025-08-05',
  endDate: '2025-08-10',
};

const MEDICATION_IBUPROFEN: Medication = {
  id: 2,
  name: 'Ibuprofen',
  dosage: '200mg',
  frequency: '2 times a day',
  startDate: '2025-07-25',
  endDate: '2025-07-30',
};

const MEDICATION_PARACETAMOL: Medication = {
  id: 3,
  name: 'Paracetamol',
  dosage: '500mg',
  frequency: '2 times a day',
  startDate: '2025-08-01',
  endDate: '2025-08-05',
};

export const PRESCRIPTION_1: Prescription = {
  id: 1,
  doctor: 'Dr. Emma Patel',
  title: 'Amoxicillin Course',
  date: '2025-08-05',
  medications: [MEDICATION_AMOXICILLIN],
};

export const PRESCRIPTION_2: Prescription = {
  id: 2,
  doctor: 'Dr. Bob Johnson',
  title: 'Ibuprofen Course',
  date: '2025-07-25',
  medications: [MEDICATION_IBUPROFEN],
};

export const PRESCRIPTION_3: Prescription = {
  id: 3,
  doctor: 'Dr. Alice Smith',
  title: 'Paracetamol Course',
  date: '2025-08-01',
  medications: [MEDICATION_PARACETAMOL],
};

export const prescriptions: Prescription[] = [
  PRESCRIPTION_1,
  PRESCRIPTION_2,
  PRESCRIPTION_3,
];