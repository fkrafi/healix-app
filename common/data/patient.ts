import { Patient } from '../types';
import { v4 as uuidv4} from 'uuid';

export const patient: Patient = {
    id: uuidv4(),
    name: "John Doe",
    age: 30,
    gender: "male",
    contact: "+1234567890",
    email: "john.doe@example.com",
    address: "123 Main St, Springfield, IL, 62704, USA",
    nationality: "American",
    languages: ["English", "Spanish"],
    allergies: ["Penicillin", "Peanuts"]
};
