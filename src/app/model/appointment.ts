import { Patient } from './patient';

export interface Appointment{
    id: number,
    term: string,
    patient: Patient
}
