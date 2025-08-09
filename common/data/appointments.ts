import { Appointment, Patient } from '../types';
import { DOCTOR_ALICE_SMITH, DOCTOR_BOB_JOHNSON } from './doctors';

const PATIENT_JOHN_DOE: Patient = { id: 1, name: 'John Doe', age: 30, gender: 'male' };
const PATIENT_JANE_SMITH: Patient = { id: 2, name: 'Jane Smith', age: 25, gender: 'female' };
const PATIENT_SAM_LEE: Patient = { id: 3, name: 'Sam Lee', age: 40, gender: 'male' };

export const APPOINTMENT_1: Appointment = {
  id: 1,
  patient: PATIENT_JOHN_DOE,
  doctor: DOCTOR_ALICE_SMITH,
  scheduledAt: new Date('2024-06-10T09:00:00Z'),
  status: 'Scheduled',
};

export const APPOINTMENT_2: Appointment = {
  id: 2,
  patient: PATIENT_JANE_SMITH,
  doctor: DOCTOR_BOB_JOHNSON,
  scheduledAt: new Date('2024-06-11T11:30:00Z'),
  status: 'Completed',
};

export const APPOINTMENT_3: Appointment = {
  id: 3,
  patient: PATIENT_SAM_LEE,
  doctor: DOCTOR_ALICE_SMITH,
  scheduledAt: new Date('2024-06-12T14:00:00Z'),
  status: 'Cancelled',
};

export const appointments: Appointment[] = [
  APPOINTMENT_1,
  APPOINTMENT_2,
  APPOINTMENT_3,
];