import { BASE_API_URL } from '../common/config';
import { doctors } from '../common/data/doctors';
import type { Department, Doctor } from '../common/types';

// Search doctors API
export async function searchDoctors(query: string) {
    const url = `${BASE_API_URL}/doctors/search?q=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch doctors');
    return response.json();
}

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
