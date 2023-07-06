class Employee{

    constructor(name, surname, department){
        this.personalInfo = new PersonalInfo(name, surname);
        this.department = department;
    }

    toString(){
        return this.personalInfo.toString() + 
        'Dipartimento: ' + this.department + '\n';
    }
}