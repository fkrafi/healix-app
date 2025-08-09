import { patient } from "../common/data/patient";
import { Patient } from "../common/types";

export async function getPatient(): Promise<Patient> {
    return Promise.resolve(patient);
}
