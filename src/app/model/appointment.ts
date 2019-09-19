import { Patient } from './patient';

export class Appointment implements AppointmentInterface {
    id: number;
    date: string;
    patient: Patient;

    constructor(appointment: AppointmentInterface) {
        this.id = appointment.id;
        this.date = appointment.date;
        this.patient = appointment.patient;

    }

}


interface AppointmentInterface {
    id: number;
    date: string;
    patient: Patient;
}
