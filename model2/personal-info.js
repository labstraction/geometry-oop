class PersonalInfo{

    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    toString(){
        return 'Nome: ' + this.name + '\n' +
        'Cognome: ' + this.surname + '\n';
    }

}