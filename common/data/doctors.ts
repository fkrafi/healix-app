import type { Doctor } from '../types';
import { v4 as uuidv4} from 'uuid';

export const DOCTOR_ALICE_SMITH: Doctor = {
    id: uuidv4(),
    name: 'Dr. Alice Smith',
    contact: 'alice.smith@healix.com',
    department: 'Cardiology',
    nationality: 'USA',
    languages: ['English'],
    expertise: ['Heart Disease'],
    qualifications: ['MD'],
    experiences: ['10 years at Healix'],
};

export const DOCTOR_BOB_JOHNSON: Doctor = {
    id: uuidv4(),
    name: 'Dr. Bob Johnson',
    contact: 'bob.johnson@healix.com',
    department: 'Neurology',
    nationality: 'USA',
    languages: ['English'],
    expertise: ['Brain Disorders'],
    qualifications: ['MD'],
    experiences: ['8 years at Healix'],
};

export const DOCTOR_CAROL_LEE: Doctor = {
    id: uuidv4(),
    name: 'Dr. Carol Lee',
    contact: 'carol.lee@healix.com',
    department: 'Pediatrics',
    nationality: 'USA',
    languages: ['English'],
    expertise: ['Child Health'],
    qualifications: ['MD'],
    experiences: ['5 years at Healix'],
};

export const DOCTOR_DAVID_KIM: Doctor = {
    id: uuidv4(),
    name: 'Dr. David Kim',
    contact: 'david.kim@healix.com',
    department: 'Orthopedics',
    nationality: 'USA',
    languages: ['English'],
    expertise: ['Bone Health'],
    qualifications: ['MD'],
    experiences: ['12 years at Healix'],
};

export const DOCTOR_EMMA_PATEL: Doctor = {
    id: uuidv4(),
    name: 'Dr. Emma Patel',
    contact: 'emma.patel@healix.com',
    department: 'Dermatology',
    nationality: 'USA',
    languages: ['English'],
    expertise: ['Skin Health'],
    qualifications: ['MD'],
    experiences: ['7 years at Healix'],
};

export const doctors: Doctor[] = [
    DOCTOR_ALICE_SMITH,
    DOCTOR_BOB_JOHNSON,
    DOCTOR_CAROL_LEE,
    DOCTOR_DAVID_KIM,
    DOCTOR_EMMA_PATEL,
];