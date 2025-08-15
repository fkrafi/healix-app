import type { Doctor } from '../types';
import { v4 as uuidv4 } from 'uuid';

export const DOCTOR_ALICE_SMITH: Doctor = {
    id: uuidv4(),
    name: 'Dr. Alice Smith',
    contact: 'alice.smith@healix.com',
    department: 'Cardiology',
    nationality: 'USA',
    languages: ['English', 'Arabic'],
    expertise: ['Heart Disease'],
    qualifications: ['MD'],
    experiences: ['10 years at Healix'],
    locations: ['Dubai Healthcare City', 'Al Barsha'],
};

export const DOCTOR_BOB_JOHNSON: Doctor = {
    id: uuidv4(),
    name: 'Dr. Bob Johnson',
    contact: 'bob.johnson@healix.com',
    department: 'Neurology',
    nationality: 'USA',
    languages: ['English', 'Russian'],
    expertise: ['Brain Disorders'],
    qualifications: ['MD'],
    experiences: ['8 years at Healix'],
    locations: ['Al Barsha', 'Jumeirah'],
};

export const DOCTOR_CAROL_LEE: Doctor = {
    id: uuidv4(),
    name: 'Dr. Carol Lee',
    contact: 'carol.lee@healix.com',
    department: 'Pediatrics',
    nationality: 'USA',
    languages: ['English', 'Tagalog'],
    expertise: ['Child Health'],
    qualifications: ['MD'],
    experiences: ['5 years at Healix'],
    locations: ['Jumeirah', 'Deira'],
};

export const DOCTOR_DAVID_KIM: Doctor = {
    id: uuidv4(),
    name: 'Dr. David Kim',
    contact: 'david.kim@healix.com',
    department: 'Orthopedics',
    nationality: 'USA',
    languages: ['English', 'Korean'],
    expertise: ['Bone Health'],
    qualifications: ['MD'],
    experiences: ['12 years at Healix'],
    locations: ['Deira', 'Bur Dubai'],
};

export const DOCTOR_EMMA_PATEL: Doctor = {
    id: uuidv4(),
    name: 'Dr. Emma Patel',
    contact: 'emma.patel@healix.com',
    email: 'emma.patel@healix.com',
    department: 'Dermatology',
    nationality: 'USA',
    languages: ['English', 'Hindi'],
    expertise: ['Skin Health'],
    qualifications: ['MD'],
    experiences: ['7 years at Healix'],
    locations: ['Bur Dubai', 'Oud Metha'],
};

// Additional doctors for each department
export const DOCTOR_FATIMA_ALI: Doctor = {
    id: uuidv4(),
    name: 'Dr. Fatima Ali',
    contact: 'fatima.ali@healix.com',
    department: 'Oncology',
    nationality: 'UAE',
    languages: ['Arabic', 'English', 'French'],
    expertise: ['Cancer Treatment'],
    qualifications: ['MD'],
    experiences: ['9 years at Healix'],
    locations: ['Dubai Healthcare City', 'Al Nahda'],
};

export const DOCTOR_JOHN_DOE: Doctor = {
    id: uuidv4(),
    name: 'Dr. John Doe',
    contact: 'john.doe@healix.com',
    department: 'General Medicine',
    nationality: 'UK',
    languages: ['English', 'Spanish'],
    expertise: ['General Practice'],
    qualifications: ['MBBS'],
    experiences: ['15 years at Healix'],
    locations: ['Jumeirah', 'Al Qusais'],
};

export const DOCTOR_SARA_YOUSSEF: Doctor = {
    id: uuidv4(),
    name: 'Dr. Sara Youssef',
    contact: 'sara.youssef@healix.com',
    department: 'Psychiatry',
    nationality: 'Egypt',
    languages: ['Arabic', 'English', 'French'],
    expertise: ['Mental Health'],
    qualifications: ['MD'],
    experiences: ['6 years at Healix'],
    locations: ['Bur Dubai', 'Dubai Healthcare City'],
};

export const DOCTOR_MOHAMMED_KHAN: Doctor = {
    id: uuidv4(),
    name: 'Dr. Mohammed Khan',
    contact: 'mohammed.khan@healix.com',
    department: 'Gynecology',
    nationality: 'Pakistan',
    languages: ['Urdu', 'English', 'Arabic'],
    expertise: ['Women Health'],
    qualifications: ['MD'],
    experiences: ['11 years at Healix'],
    locations: ['Al Nahda', 'Oud Metha'],
};

export const DOCTOR_LINA_CHEN: Doctor = {
    id: uuidv4(),
    name: 'Dr. Lina Chen',
    contact: 'lina.chen@healix.com',
    department: 'Ophthalmology',
    nationality: 'China',
    languages: ['Chinese', 'English', 'Arabic'],
    expertise: ['Eye Care'],
    qualifications: ['MD'],
    experiences: ['7 years at Healix'],
    locations: ['Jumeirah', 'Dubai Healthcare City'],
};

export const DOCTOR_OMAR_SALEM: Doctor = {
    id: uuidv4(),
    name: 'Dr. Omar Salem',
    contact: 'omar.salem@healix.com',
    department: 'ENT',
    nationality: 'Jordan',
    languages: ['Arabic', 'English', 'Russian'],
    expertise: ['Ear, Nose, Throat'],
    qualifications: ['MD'],
    experiences: ['10 years at Healix'],
    locations: ['Deira', 'Al Qusais'],
};

export const DOCTOR_ANITA_SHARMA: Doctor = {
    id: uuidv4(),
    name: 'Dr. Anita Sharma',
    contact: 'anita.sharma@healix.com',
    department: 'Dentistry',
    nationality: 'India',
    languages: ['Hindi', 'English', 'Malayalam'],
    expertise: ['Dental Care'],
    qualifications: ['BDS'],
    experiences: ['13 years at Healix'],
    locations: ['Bur Dubai', 'Jumeirah'],
};

export const DOCTOR_RAJIV_SINGH: Doctor = {
    id: uuidv4(),
    name: 'Dr. Rajiv Singh',
    contact: 'rajiv.singh@healix.com',
    department: 'Urology',
    nationality: 'India',
    languages: ['Hindi', 'English', 'Tamil'],
    expertise: ['Kidney Health'],
    qualifications: ['MD'],
    experiences: ['8 years at Healix'],
    locations: ['Dubai Healthcare City', 'Al Barsha'],
};

export const DOCTOR_MARIA_GOMEZ: Doctor = {
    id: uuidv4(),
    name: 'Dr. Maria Gomez',
    contact: 'maria.gomez@healix.com',
    department: 'Endocrinology',
    nationality: 'Spain',
    languages: ['Spanish', 'English', 'Arabic'],
    expertise: ['Hormone Health'],
    qualifications: ['MD'],
    experiences: ['9 years at Healix'],
    locations: ['Al Barsha', 'Oud Metha'],
};

export const doctors: Doctor[] = [
    DOCTOR_ALICE_SMITH,
    DOCTOR_BOB_JOHNSON,
    DOCTOR_CAROL_LEE,
    DOCTOR_DAVID_KIM,
    DOCTOR_EMMA_PATEL,
    DOCTOR_FATIMA_ALI,
    DOCTOR_JOHN_DOE,
    DOCTOR_SARA_YOUSSEF,
    DOCTOR_MOHAMMED_KHAN,
    DOCTOR_LINA_CHEN,
    DOCTOR_OMAR_SALEM,
    DOCTOR_ANITA_SHARMA,
    DOCTOR_RAJIV_SINGH,
    DOCTOR_MARIA_GOMEZ,
];