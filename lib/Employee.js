//employee constructor 

class Employee {
    constructor(name, id, email, officenumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officenumber = officenumber;
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

getRole() {
    return 'Employee';
}
};
//this exports the employee
module.exports = Employee;