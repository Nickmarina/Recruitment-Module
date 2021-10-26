class Service {
    constructor(record) {
        this.record_id = record;
      }
    SubmitforApproval(){
        console.log(`Submitted for approval Vacancy: ${this.record_id}`)
    }

    Approve(){
        console.log(`Approved Record: ${this.record_id}`)
    }

    Reject(){
        console.log(`Reject Record: ${this.record_id}`)
    }

}

class Record extends Service{
    constructor(record){
        super(record)
        this.record = this.id
    }
    id;
    type;

    Record(id, type) {
        this.id = id;
        this.type = type;
    }

    getId() {
        return this.id;
    }

    getType() {
        return this.type;
    }
}

const recordType = "Vacancy";
const softwareEngineerVacancy = new Record("SoftwareEngineer0001", recordType);
const frontEndEngineerVacancy = new Record("FrontEndEngineer0020", recordType);

softwareEngineerVacancy.SubmitforApproval();
softwareEngineerVacancy.Approve();
frontEndEngineerVacancy.SubmitforApproval();
frontEndEngineerVacancy.Reject();

// Expected console output:
// Submitted for approval Vacancy: SoftwareEngineer0001
// Approved Record: SoftwareEngineer0001
// Submitted for approval Vacancy: FrontEndEngineer0020
// Rejected Record: FrontEndEngineer0020
