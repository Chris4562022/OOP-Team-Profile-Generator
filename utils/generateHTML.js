// // //create the about section
// // module.exports = templateData => {
// //   // destructure page data by sectio

// const [manager, engineer, intern] = templateData;


// const generateManager  = function (manager) {
//     return `
//     <div>
//     <h1> ${manager.name} </h1>
//     <p class="id">ID: ${manager.id}</p>
//     <p class="email">Email: ${manager.email}</p>
//     <p class="officenumber">Office NUmber: ${manager.officenumber}</p>
//     </div>
//     `;
// };
    
// const generateEngineer = function (engineer) {
//     return `
//     <div>
//     <h1> ${engineer.name} </h1>
//     <p class="id">ID: ${engineer.id}</p>
//     <p class="email">Email: ${engineer.email}</p>
//     <p class="officenumber">Office NUmber: ${engineer.officenumber}</p>
//     <p class="github">Git Hub: <a "href=https://github.com/${engineer.github}"</a> </p>
//     </div>
//     `;
// };

// const generateIntern = function (intern) {
//     return`
//     <div>
//     <h1> ${intern.name} </h1>
//     <p class="id">ID: ${intern.id}</p>
//     <p class="email">Email: ${intern.email}</p>
//     <p class="officenumber">Office NUmber: ${intern.officenumber}</p>
//     <p class="school">Inter's School: ${intern.school}</p>
//     </div>
//     `;
// };


// // // export function to generate entire page
// // module.exports = templateData => {
// //     // destructure page data by section
// //     const { manager, engineer, intern } = templateData;
  
//     // push array to page 
// generateHTML = (data) => {

//     // array for cards 
//     teamArray = []; 

//     for (let i = 0; i < data.length; i++) {
//         const employee = data[i];
//         const role = employee.getRole(); 


//         // call manager function
//         if (role === 'Manager') {
//             const managerCard = generateManager(employee);

//             teamArray.push(managerCard);
//         }

//         // call engineer function
//         if (role === 'Engineer') {
//             const engineerCard = generateEngineer(employee);

//             teamArray.push(engineerCard);
//         }

//         // call intern function 
//         if (role === 'Intern') {
//             const internCard = generateIntern(employee);

//             teanArray.push(internCard);
//         }
        
//     }

//     // joining strings 
//     const employeeCards = teamArray.join('')

//     // return to generated page
//     const generateTeam = generateTeamPage(employeeCards); 
//     return generateTeam;

// }

// // generate html page 
// const generateTeamPage = function (employeeCards) {   
//   return`
//   <!DOCTYPE html>
//   <html lang="en">
//   <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Team Profile</title>
//       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
//       <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
//       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
//       <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
//       <link rel="stylesheet" href="style.css">
//   </head>
//   <body>
//       <header>
//           <nav class="navbar" id="navbar">
//               <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
//           </nav>
//       </header>
//       <main>
//           <div class="container">
//               <div class="row justify-content-center" id="team-cards">
//                   <!--Team Cards-->
//                   ${employeeCards}
//               </div>
//           </div>
//       </main>
      
//   </body>
//   <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
//   <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
//   <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
//   </html>
// `;
// }

// // export to index
// module.exports = generateHTML; 





const fs = require('fs');

// writing files
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/TEAMPROFILE.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'Team profile created!'
      });
    });
  });
};
  
module.exports = { writeFile };
