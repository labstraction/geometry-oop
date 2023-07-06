class Client{

    constructor(name, surname, address){
        this.personalInfo = new PersonalInfo(name, surname);
        this.address = address;
    }

    toString(){
        return this.personalInfo.toString() + 
        'Indirizzo: ' + this.address + '\n';
    }
}