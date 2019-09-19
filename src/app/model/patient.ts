
export class Patient implements PatientInterface {
    id: number;
    firstname: string;
    lastname: string;
    jmbg: string;

    constructor(patient: PatientInterface) {
        this.id = patient.id;
        this.firstname = patient.firstname;
        this.lastname = patient.lastname;
        this.jmbg = patient.jmbg;
    }
}

interface PatientInterface {
    id: number;
    firstname: string;
    lastname: string;
    jmbg: string;
}