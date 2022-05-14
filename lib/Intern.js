//This imports the employee constructor
const Employee = require('./Employee');

//calling the constructor of the parent(Employee)

class Intern extends Employee {
    //include school here and not office number or github
    constructor (name, id, email, school) {
    super (name, id, email, school);
    //adding school
    this.school = school;
    }

    getName() {
        return this.name;
    }
    getID() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getSchool () {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
};

//exports the intern
module.exports = Intern;