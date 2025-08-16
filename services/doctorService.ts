import { doctors } from '../common/data/doctors';
import type { Department, Doctor } from '../common/types';

export function getAllDoctors(): Promise<Doctor[]> {
    return Promise.resolve(doctors);
}

export function getDoctorsByDepartment(department: Department): Promise<Doctor[]> {
    return Promise.resolve(
        doctors.filter(doc => doc.department === department)
    );
}

export function getDoctorById(id: string): Promise<Doctor | null> {
    const doctor = doctors.find(doc => doc.id === id);
    return Promise.resolve(doctor || null);
}
