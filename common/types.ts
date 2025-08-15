export type Department = 'Cardiology' | 'Dermatology' | 'Neurology' | 'Pediatrics' | 
    'Oncology' | 'General Medicine' | 'Orthopedics' | 'Psychiatry' | 'Gynecology' | 
    'Ophthalmology' | 'ENT' | 'Dentistry' | 'Urology' | 'Endocrinology';

// Map Department to Ionicons icon name
export const DepartmentIconMap: Record<Department, string> = {
    Cardiology: 'heart-pulse',
    Dermatology: 'hand-wave',
    Neurology: 'brain',
    Pediatrics: 'baby-face-outline',
    Oncology: 'ribbon',
    'General Medicine': 'stethoscope',
    Orthopedics: 'walk',
    Psychiatry: 'eye',
    Gynecology: 'gender-female',
    Ophthalmology: 'eye',
    ENT: 'ear-hearing',
    Dentistry: 'tooth',
    Urology: 'water',
    Endocrinology: 'dna'
};
// types.ts

export interface Doctor {
    id: string;
    name: string;
    contact: string;
    email?: string;
    department: Department;
    nationality: string;
    languages: string[];
    expertise: string[];
    qualifications: string[];
    experiences: string[];
    locations: string[];
}

export interface Patient {
    id: string;
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
    id: string;
    date: string;
    bloodPressure: string;
    heartRate: string;
    temperature: string;
    weight: string;
}


export type AppointmentStatus = 'Scheduled' | 'Completed' | 'Cancelled' | 'No Show';
export type VisitType = 'in-person' | 'tele';

export interface Appointment {
    id: string;
    patient: Patient;
    doctor: Doctor;
    scheduledAt: Date;
    status?: AppointmentStatus;
    visitType: VisitType;
}

export interface Medication {
    id: string;
    name: string;
    dosage: string;
    frequency: string;
    startDate: string;
    endDate?: string;
    notes?: string;
}

export interface Prescription {
    id: string;
    appointment: Appointment;
    medications?: Medication[];
}

export interface MedicalTest {
    id: string;
    name: string;
    type: 'Lab' | 'Radiology';
}

export interface Report {
    id: string;
    appointment: Appointment;
    medicalTest: MedicalTest;
    performedAt: Date;
    reportGeneratedAt: Date;
    reportUrl?: string;
}

export interface Report {
    id: string;
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
