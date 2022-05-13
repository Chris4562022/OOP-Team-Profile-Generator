// node modules 
const fs = require('fs'); 
const inquirer = require("inquirer")

//promts to ask for manager and team member's names.



const addManager = () => {

    return inquirer.prompt([
        {
            type: 'input',
            title: 'managername',
            message: 'What is the Team Managers Name? (Required)',
            validate: managernameInput => {
                if (titleInput) {
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
          if (emailInsInput) {
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
        name: 'license',
        message: 'Please select which liscense that you have used for your project.',
        choices: ['mit', 'isc', 'No-License'],
        validate: licenseInput => {
          if (licenseInput.data === 'No-License')
          return [];
          if (licenseInput.data === 'isc')
          return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)]'
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
