//This imports the employee constructor
const Employee = require('./Employee');

//calling the constructor of the parent(Employee)

class Manager extends Employee {
    constructor (name, id, email, officenumber) {
    super (name, id, email, officenumber);
    
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
getOfficenumber() {
    return this.officenumber;
}
};
//this exports the Manager
module.exports = Manager;

