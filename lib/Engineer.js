//This imports the employee constructor
const Employee = require('./Employee');

//calling the constructor of the parent(Employee)

class Engineer extends Employee {
    //include git hub here but not office number
    constructor (name, id, email, githubusername) {
    super (name, id, email, githubusername);


    this.githubusername = githubusername;
    }
// adding github here to the constructor to include it
    // this.github = github;
    // }

//    githubusername () {
//        return this.githubusername;
//    } 
   getName() {
       return this.name;
   }
   getID() {
       return this.id;
   }
   getEmail() {
       return this.email;
   }
   getGithubusername() {
       return this.githubusername;
   }
   };
//this exports the Engineer
module.exports = Engineer;