import { labRecords } from "../common/data/labreports";
import { prescriptionsRecords, radiologyRecords, vitalRecords } from "../common/data/records";

export async function getPrescriptions() {
    return Promise.resolve(prescriptionsRecords);
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