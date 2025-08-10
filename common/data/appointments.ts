import { v4 as uuidv4 } from 'uuid';
import { Appointment } from '../types';
import { DOCTOR_ALICE_SMITH, DOCTOR_BOB_JOHNSON } from './doctors';
import { patient } from './patient';

export const APPOINTMENT_1: Appointment = {
  id: uuidv4(),
  patient: patient,
  doctor: DOCTOR_ALICE_SMITH,
  scheduledAt: new Date('2024-06-10T09:00:00Z'),
  status: 'Scheduled',
  visitType: 'in-person',
};

export const APPOINTMENT_2: Appointment = {
  id: uuidv4(),
  patient: patient,
  doctor: DOCTOR_BOB_JOHNSON,
  scheduledAt: new Date('2024-06-11T11:30:00Z'),
  status: 'Completed',
  visitType: 'tele',
};

export const APPOINTMENT_3: Appointment = {
  id: uuidv4(),
  patient: patient,
  doctor: DOCTOR_ALICE_SMITH,
  scheduledAt: new Date('2024-06-12T14:00:00Z'),
  status: 'Cancelled',
  visitType: 'in-person',
};

export const APPOINTMENT_4: Appointment = {
  id: uuidv4(),
  patient: patient,
  doctor: DOCTOR_BOB_JOHNSON,
  scheduledAt: new Date('2024-06-13T10:00:00Z'),
  status: 'Scheduled',
  visitType: 'tele',
};

export const APPOINTMENT_5: Appointment = {
  id: uuidv4(),
  patient: patient,
  doctor: DOCTOR_ALICE_SMITH,
  scheduledAt: new Date('2024-06-14T15:30:00Z'),
  status: 'Completed',
  visitType: 'in-person',
};

export const APPOINTMENT_6: Appointment = {
  id: uuidv4(),
  patient: patient,
  doctor: DOCTOR_BOB_JOHNSON,
  scheduledAt: new Date('2024-06-15T09:45:00Z'),
  status: 'Scheduled',
  visitType: 'tele',
};

export const APPOINTMENT_7: Appointment = {
  id: uuidv4(),
  patient: patient,
  doctor: DOCTOR_ALICE_SMITH,
  scheduledAt: new Date('2024-06-16T13:00:00Z'),
  status: 'No Show',
  visitType: 'in-person',
};

export const APPOINTMENT_8: Appointment = {
  id: uuidv4(),
  patient: patient,
  doctor: DOCTOR_BOB_JOHNSON,
  scheduledAt: new Date('2024-06-17T11:15:00Z'),
  status: 'Completed',
  visitType: 'tele',
};

export const APPOINTMENT_9: Appointment = {
  id: uuidv4(),
  patient: patient,
  doctor: DOCTOR_ALICE_SMITH,
  scheduledAt: new Date('2024-06-18T16:30:00Z'),
  status: 'Scheduled',
  visitType: 'in-person',
};

export const APPOINTMENT_10: Appointment = {
  id: uuidv4(),
  patient: patient,
  doctor: DOCTOR_BOB_JOHNSON,
  scheduledAt: new Date('2024-06-19T08:00:00Z'),
  status: 'Cancelled',
  visitType: 'tele',
};

export const APPOINTMENT_11: Appointment = {
  id: uuidv4(),
  patient: patient,
  doctor: DOCTOR_ALICE_SMITH,
  scheduledAt: new Date('2024-06-20T14:30:00Z'),
  status: 'Completed',
  visitType: 'in-person',
};

export const APPOINTMENT_12: Appointment = {
  id: uuidv4(),
  patient: patient,
  doctor: DOCTOR_BOB_JOHNSON,
  scheduledAt: new Date('2024-06-21T12:00:00Z'),
  status: 'Scheduled',
  visitType: 'tele',
};

export const appointments: Appointment[] = [
  APPOINTMENT_1,
  APPOINTMENT_2,
  APPOINTMENT_3,
  APPOINTMENT_4,
  APPOINTMENT_5,
  APPOINTMENT_6,
  APPOINTMENT_7,
  APPOINTMENT_8,
  APPOINTMENT_9,
  APPOINTMENT_10,
  APPOINTMENT_11,
  APPOINTMENT_12,
];