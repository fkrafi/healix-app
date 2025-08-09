import { Vital } from "../types";
import { v4 as uuidv4} from 'uuid';

export const vitalRecords: Vital[] = [
    {
        id: uuidv4(),
        date: "2025-08-09",
        bloodPressure: "120/80",
        heartRate: "72",
        temperature: "98.6",
        weight: "70"
    },
    {
        id: uuidv4(),
        date: "2025-08-01",
        bloodPressure: "130/85",
        heartRate: "75",
        temperature: "99.1",
        weight: "71"
    }
    ,
    {
        id: uuidv4(),
        date: "2025-07-25",
        bloodPressure: "118/78",
        heartRate: "70",
        temperature: "98.4",
        weight: "69"
    },
    {
        id: uuidv4(),
        date: "2025-07-15",
        bloodPressure: "125/82",
        heartRate: "74",
        temperature: "98.9",
        weight: "70.5"
    },
    {
        id: uuidv4(),
        date: "2025-07-05",
        bloodPressure: "122/80",
        heartRate: "73",
        temperature: "98.7",
        weight: "70"
    }
    ,
    {
        id: uuidv4(),
        date: "2025-06-28",
        bloodPressure: "119/79",
        heartRate: "71",
        temperature: "98.5",
        weight: "69.8"
    },
    {
        id: uuidv4(),
        date: "2025-06-18",
        bloodPressure: "127/83",
        heartRate: "76",
        temperature: "99.0",
        weight: "70.2"
    },
    {
        id: uuidv4(),
        date: "2025-06-10",
        bloodPressure: "121/81",
        heartRate: "72",
        temperature: "98.6",
        weight: "70"
    }
];