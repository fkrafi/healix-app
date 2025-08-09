import { labRecords } from "../common/data/labreports";
import { prescriptions } from "../common/data/prescriptions";
import { radiologyRecords } from "../common/data/radiologyreports";
import { vitalRecords } from "../common/data/vitals";

export async function getPrescriptions() {
    return Promise.resolve(prescriptions);
}

export async function getLabReports() {
    return Promise.resolve(labRecords);
}

export async function getRadiologyReports() {
    return Promise.resolve(radiologyRecords);
}

export async function getVitals() {
    return Promise.resolve(vitalRecords);
}