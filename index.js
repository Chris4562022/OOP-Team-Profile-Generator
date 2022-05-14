// node modules 
const inquirer = require("inquirer")
const fs = require('fs'); 


//promts to ask for manager and team member's names.
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


//create a user array for user input

const init = () => {

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
      },
      {
        type: 'list',
        name: 'teammembers',
        message: 'Please select if you would like to add and engineer or intern to your team.',
        choices: ['engineer', 'intern', 'I am finished building my team'],
        validate: teammembersInput => {
          if (teammembersInput.data === 'I am finished building my team')
          return [];
          else (teammembersInput.data == 'engineer')
          console.log('Please enter your engineers Github username')
          return = (engineerGithub);
        }
      },
      {
        type: 'input',
        name: 'testIns',
        message: 'Please provide testing instructions for your project. (Required)',
        validate: testInsInput => {
          if (testInsInput) {
            return true;
          } else {
            console.log('Please provide some testing instructions for your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username. (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your github username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address. (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email address!');
            return false;
          }
        }
      }
    ]);
};

//function call to initilize app
init()