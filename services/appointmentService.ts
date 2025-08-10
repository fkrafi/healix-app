import { appointments } from "../common/data/appointments";
import { Appointment } from "../common/types";

export async function getAppointments(): Promise<Appointment[]> {
    return Promise.resolve(appointments);
}

export async function getAppointmentById(id: string): Promise<Appointment | null> {
    return Promise.resolve(appointments.find(a => a.id === id) || null);
}