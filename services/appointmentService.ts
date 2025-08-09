import { Appointment } from "../common/types";

export async function getAppointments(): Promise<Appointment[]> {
    return Promise.resolve([]);
}

export async function getAppointmentById(id: string): Promise<Appointment | null> {
    return Promise.resolve(null);
}