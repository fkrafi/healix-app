import { Prescription, RadiologyReport, Vital } from "../types";

export const radiologyRecords: RadiologyReport[] = [
    {
        id: 1,
        title: "Chest X-Ray",
        date: "2025-07-20",
        doctor: "Dr. Carol Lee",
        findings: "No abnormality detected",
        imageUrl: "https://example.com/xray1.jpg",
        icon: "x-ray",
        color: "#9b59b6"
    },
    {
        id: 2,
        title: "Knee MRI",
        date: "2025-06-30",
        doctor: "Dr. David Kim",
        findings: "Minor ligament tear",
        imageUrl: "https://example.com/mri1.jpg",
        icon: "scan",
        color: "#2ecc71"
    }
];

export const prescriptionsRecords: Prescription[] = [
    {
        id: 1,
        title: "Amoxicillin",
        date: "2025-08-05",
        doctor: "Dr. Emma Patel",
        medications: [
            {
                id: 1,
                name: "Amoxicillin",
                dosage: "500mg",
                frequency: "3 times a day",
                startDate: "2025-08-05",
                endDate: "2025-08-10",
                prescribingDoctor: "Dr. Emma Patel"
            }
        ]
    },
    {
        id: 2,
        title: "Ibuprofen",
        date: "2025-07-25",
        doctor: "Dr. Bob Johnson",
        medications: [
            {
                id: 2,
                name: "Ibuprofen",
                dosage: "200mg",
                frequency: "2 times a day",
                startDate: "2025-07-25",
                endDate: "2025-07-30",
                prescribingDoctor: "Dr. Bob Johnson"
            }
        ]
    }
];

export const vitalRecords: Vital[] = [
    {
        id: 1,
        date: "2025-08-09",
        bloodPressure: "120/80",
        heartRate: "72",
        temperature: "98.6",
        weight: "70"
    },
    {
        id: 2,
        date: "2025-08-01",
        bloodPressure: "130/85",
        heartRate: "75",
        temperature: "99.1",
        weight: "71"
    }
];
