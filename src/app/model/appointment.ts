import { Patient } from './patient';
import { Doctor } from './doctor';

export class Appointment implements AppointmentInterface {
    id: number;
    date: string;
    patient: Patient;
    doctor: Doctor;

    constructor(appointment: AppointmentInterface) {
        this.id = appointment.id;
        this.date = appointment.date;
        this.patient = appointment.patient;
        this.doctor = appointment.doctor;
    }

}


interface AppointmentInterface {
    id: number;
    date: string;
    patient: Patient;
    doctor: Doctor;
}
