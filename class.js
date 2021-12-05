
class Person{

    static humansNumber = 0;

    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
        Person.humansNumber++;
    }

    firstname;
    lastname;

    presentation() {
        return `i'm ${this.firstname} ${this.lastname}`;
    }
}

class Employee extends Person{

    salary;
    enterprise;
    constructor(firstname,lastname,salary, enterprise){
        super(firstname,lastname);
        this.salary = salary;
        this.enterprise = enterprise;
    }

    presentation() {
        return ` ${super.presentation()} and i work for the ${this.enterprise}'s enterprise for ${this.salary}$ per month`;
    }
}

let d = new Person('bob','bob');
console.log(d.presentation());

let e = new Employee('john','Doe',500,'Wayne');
console.log(e.presentation());

console.log(Person.humansNumber);