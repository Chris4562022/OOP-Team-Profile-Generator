// node modules 
const inquirer = require("inquirer")
const fs = require('fs'); 


//promts to ask for manager and team member's names.
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { Console } = require("console");


//create a user array for user input

const addManager = () => {
      return inquirer.prompt([
        {
            type: 'input',
            name: 'managername',
            message: 'What is the Team Managers Name? (Required)',
            validate: managernameInput => {
                if (managernameInput) {
                    return true;
                } else {
                console.log('Please enter the Team Managers Name!');
                return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'Please provide managers ID number. (Required)',
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please provide managers ID number!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter Managers email address. (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please provide Managers email address!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'officenumber',
        message: 'Please provide Managers office telephone number. (Required)',
        validate: officenumberInput => {
          if (officenumberInput) {
            return true;
          } else {
            console.log('Please provide Managers office telephone number!');
            return false;
          }
        }
      }
    ]);
};

const addEmployee = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'newemployee',
      message: 'Please select who you would like to add to your team.',
      choices: ['engineer', 'intern'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is this employees name?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log ('Please enter this employees name!');
            return false;
          }
        }
      },
      {
      type: 'input',
        name: 'id',
        message: 'What is this employees ID number?',
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log ('Please enter this employees ID number!');
            return false;
          }
        }
      },
      {
        type: 'input',
          name: 'email',
          message: 'What is this employees email address?',
          validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log ('Please enter this employees email address!');
              return false;
            }
          }
        },
        {
          type: 'input',
            name: 'github',
            message: 'What is this employees GitHub Username?',
            when: (input) => input.newemployee === "engineer",
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log ('Please enter this employees GitHub Username!');
                return false;
              }
            }
          },
          
          {
            type: 'input',
              name: 'internschool',
              message: 'What is the interns school?',
              when: (input) => input.newemployee === "intern",
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log ('Please enter the interns school!');
                return false;
                }
              }
            },
            {
              type: 'confirm',
              name: 'confirmadditionalteammember',
              message: 'Would you like to add another employee to this team?',
              default: false
            }
          ])


};


      

//function call to initilize app
addManager()
  .then(addEmployee)