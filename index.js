// link to page creation
const generateHTML = require('./src/html-template.js');

// node modules 
const inquirer = require("inquirer");
const fs = require('fs');
const generatePage = require('./src/html-template');


//promts to ask for manager and team member's names.
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const { Console } = require("console");



//create a user array for user input

const teamArray = [];

const addManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'managername2',
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
  ])
    .then(managername => {
      const { managername2, id, email, officenumber } = managername;
      const manager = new Manager(managername2, id, email, officenumber);

      teamArray.push(manager);
      addEmployee()
    })
};

const addEmployee = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: 'Please select who you would like to add to your team.If you are finished - select Done.',
      choices: ['engineer', 'intern', 'Done'],
    }
  ]).then(answer => {
    console.log(answer.role);
    if (answer.role === 'engineer') {
      console.log("Engineer route");
      addEngineer();
    } else if (answer.role === 'intern') {
      console.log("Intern route");
      addIntern();
    } if (answer.role === 'Done') {
      console.log("Done route");
      writeFile();
    }
  })
};

const addEngineer = () => {
  inquirer.prompt(
    [
      {
        type: 'input',
        name: 'engineername2',
        message: 'What is this employees name?',
        validate: engineernameInput => {
          if (engineernameInput) {
            return true;
          } else {
            console.log('Please enter this employees name!');
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
            console.log('Please enter this employees ID number!');
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
            console.log('Please enter this employees email address!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'engineergithub',
        message: 'What is this employees GitHub Username?',
        // when: (input) => input.addnewemployee === "engineer",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter this employees GitHub Username!');
            return false;
          }
        }
      },

      {
        type: 'confirm',
        name: 'confirmmoreteammembers',
        message: 'Would you like to add more members to this team?',
        default: false,
        // if (confirmmoreteammembers) {
        //   return addEmployee(teamArray);
        // } else {
        //   return teamArray;
        // }
        // }
      }
    ])
    .then(engineername => {
      const { engineername2, id, email, engineergithub } = engineername;
      const engineer = new Engineer(engineername2, id, email, engineergithub);

      teamArray.push(engineer);
      addEmployee()
    })
};



const addIntern = () => {
  inquirer.prompt(
    [
      {
        type: 'input',
        name: 'nameintern2',
        message: 'What is the name of this intern?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter the name of this intern!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'internid2',
        message: 'What is this interns ID number?',
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter this interns ID number!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'internemail2',
        message: 'What is this interns email address?',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter this interns email address!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'internschool2',
        message: 'What school did this intern attend?',
        // when: (input) => input.addnewemployee === "engineer",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter what school this intern attended!');
            return false;
          }
        }
      },

      {
        type: 'confirm',
        name: 'confirmmoreteammembers',
        message: 'Would you like to add more members to this team?',
        default: false,
        // if (confirmmoreteammembers) {
        //   return addEmployee(teamArray);
        // } else {
        //   return teamArray;
        // }
        // }
      }
      // {
      //   type: 'list',
      //   name: 'confirmmoreteammembers',
      //   message: 'Would you like to add more members to this team?',
      //   choices: ['YES', 'NO']
        
      //   // console.log(confirmmoreteammembers);
      // }
      // if (answer => {
      //   if (answer.confirmmoreteammembers ==='YES') {
      //     addEmployee();
      //   } else if (answer.confirmmoreteammembers ==='NO') {
      //     writeFile();
      //   };
      // })
        // validate: confirmmoreteammembersInput => {
        //   if (confirmmoreteammembers === YES) {
        //   return addEmployee;
        // } else if 
        //   (confirmmoreteammembersInput === NO) {
        // //     return writeFile;
        // };
        // }
      // }
  ])
    .then(internname => {
      const { nameintern2, internid2, internemail2, internschool2 } = internname;
      const intern = new Intern(nameintern2, internid2, internemail2, internschool2);

      teamArray.push(intern);
      addEmployee()
    })



.then(employeeInfo => {
  //different types of employees
  let {name, id, email, role, github, school, addEmployee} = employeeInfo;
  let employee;

  if(role === "Engineer") {
    employee = new Engineer (name, id, email, github);

  } else if (role === "Intern") {
    employee = new Intern (name, id, email, school);

  } else if (confirmmoreteammembers.answer ==="true") {
    return writeFile();
  }


  teamArray.push(employee);
   
    if (confirmmoreteammembers === YES) {
      return addEmployee(teamArray);
    } else if (confirmmoreteammembers === NO) {
      return writeFile();
    }
    })
  };
  

  // const isDone = () => {

  // }

  // teamArray.push(employee); 

  //       if (confirmmoreteammembers) {
  //           return addEmployee(teamArray); 
  //       } else {
  //           return teamArray;
  //       } else if {
          
  //       }
  //   })

// else  {
//   return addEmployee(teamArray);
//   // 
//    }

// };


// .then(answers => {
// console.log(answers);
// // addEmployee()
// })
// };
//   .then(answers => {
//     console.log(answers);
//     addEngineer()
//   })
//   .then(answers => {
//     console.log(answers);
//     addIntern()
//   });
// }



// const fs = require('fs');

// writing files
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/Team-Profile.html', generatePage(fileContent), err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'Sucess!  Your Team Profile Generator has been generated!'
      });
    });
  });
};
  
module.exports = { writeFile };






//function call to initilize app
addManager()


// .then(templateData => {

//  console.log(templateData);
// return generatePage(templateData);
//})
// .then( pageHtml => {
// return writeFile(pageHtml);
// })
// .then(writeFileResponse => {
// console.log(writeFileResponse);

// })

// .catch(err => {
// console.log(err);
// });