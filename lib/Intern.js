//This imports the employee constructor
const Employee = require('./Employee');

//calling the constructor of the parent(Employee)

class Intern extends Employee {
    //include school here and not office number or github
    constructor (name, id, email) {
    super (school);
    //adding school
    this.school = school;
    }
    school () {
        return this.school;
    }
}

module.exports = Intern;