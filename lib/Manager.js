//This imports the employee constructor
const Employee = require('./Employee');

//calling the constructor of the parent(Employee)

class Manager extends Employee {
    constructor (name, id, email, officenumber) {
    super (name, id, email, officenumber);
    }
}

module.exports = Manager;

