// types.ts

export type Department = 'Cardiology' | 'Dermatology' | 'Neurology' | 'Pediatrics' | 'Oncology' | 'General Medicine' | 'Orthopedics' | 'Psychiatry' | 'Gynecology';

export interface Doctor {
    id: number;
    name: string;
    contact?: string;
    email?: string;
    department?: Department;
    nationality?: string;
    languages?: string[];
    expertise?: string[];
    qualifications?: string[];
    experiences?: string[];
}

export interface Patient {
    id: number;
    name: string;
    age: number;
    gender: string;
    contact?: string;
    email?: string;
    address?: string;
    nationality?: string;
    languages?: string[];
    allergies?: string[];
}

export interface Vital {
    id: number;
    date: string;
    bloodPressure: string;
    heartRate: string;
    temperature: string;
    weight: string;
}

export interface Appointment {
    id: number;
    patient: Patient;
    doctor: Doctor;
    scheduledAt: Date;
    status?: 'Scheduled' | 'Completed' | 'Cancelled' | 'No Show';
}

export interface Medication {
    id: number;
    name: string;
    dosage: string;
    frequency: string;
    startDate: string;
    endDate?: string;
    notes?: string;
}

export interface Prescription {
    id: number;
    doctor: string;
    title: string;
    date: string;
    medications?: Medication[];
}

export interface MedicalTest {
    id: number;
    name: string;
    type: 'Lab' | 'Radiology';
}

export interface Report {
    id: number;
    appointment: Appointment;
    medicalTest: MedicalTest;
    performedAt: Date;
    reportGeneratedAt: Date;
    reportUrl?: string;
}

export interface Report {
    id: number;
    medicalTest: MedicalTest;
    prescription: Prescription;
    performedAt: Date;
    reportGeneratedAt: Date;
    reportUrl?: string;
}

export interface LabReport extends Report {
}

export interface RadiologyReport extends Report {
}
