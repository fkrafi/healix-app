import { v4 as uuidv4 } from 'uuid';
import { Appointment } from '../types';
import { DOCTOR_ALICE_SMITH, DOCTOR_BOB_JOHNSON } from './doctors';
import { patient } from './patient';

export const APPOINTMENT_1: Appointment = {
  id: uuidv4(),
  patient: patient,
  doctor: DOCTOR_ALICE_SMITH,
  scheduledAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
  status: 'Completed',
  visitType: 'in-person',
};

export const APPOINTMENT_2: Appointment = {
  id: uuidv4(),
  patient: patient,
  doctor: DOCTOR_BOB_JOHNSON,
  scheduledAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
  status: 'Cancelled',
  visitType: 'tele',
};

export const APPOINTMENT_3: Appointment = {
  id: uuidv4(),
  patient: patient,
  doctor: DOCTOR_ALICE_SMITH,
  scheduledAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
  status: 'No Show',
  visitType: 'in-person',
};

export const APPOINTMENT_4: Appointment = {
  id: uuidv4(),
  patient: patient,
  doctor: DOCTOR_BOB_JOHNSON,
  scheduledAt: new Date(), // today
  status: 'Scheduled',
  visitType: 'tele',
};

export const APPOINTMENT_5: Appointment = {
  id: uuidv4(),
  patient: patient,
  doctor: DOCTOR_ALICE_SMITH,
  scheduledAt: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours from now
  status: 'Scheduled',
  visitType: 'in-person',
};

export const APPOINTMENT_6: Appointment = {
  id: uuidv4(),
  patient: patient,
  doctor: DOCTOR_BOB_JOHNSON,
  scheduledAt: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // tomorrow
  status: 'Scheduled',
  visitType: 'tele',
};

export const APPOINTMENT_7: Appointment = {
  id: uuidv4(),
  patient: patient,
  doctor: DOCTOR_ALICE_SMITH,
  scheduledAt: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
  status: 'Scheduled',
  visitType: 'in-person',
};

export const APPOINTMENT_8: Appointment = {
  id: uuidv4(),
  patient: patient,
  doctor: DOCTOR_BOB_JOHNSON,
  scheduledAt: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
  status: 'Scheduled',
  visitType: 'tele',
};

export const APPOINTMENT_9: Appointment = {
  id: uuidv4(),
  patient: patient,
  doctor: DOCTOR_ALICE_SMITH,
  scheduledAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
  status: 'Scheduled',
  visitType: 'in-person',
};

export const APPOINTMENT_10: Appointment = {
  id: uuidv4(),
  patient: patient,
  doctor: DOCTOR_BOB_JOHNSON,
  scheduledAt: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
  status: 'Scheduled',
  visitType: 'tele',
};

export const APPOINTMENT_11: Appointment = {
  id: uuidv4(),
  patient: patient,
  doctor: DOCTOR_ALICE_SMITH,
  scheduledAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 14 days ago
  status: 'Completed',
  visitType: 'in-person',
};

export const APPOINTMENT_12: Appointment = {
  id: uuidv4(),
  patient: patient,
  doctor: DOCTOR_BOB_JOHNSON,
  scheduledAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
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