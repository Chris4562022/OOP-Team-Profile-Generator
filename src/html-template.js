// create the about section
// module.exports = templateData => {
//   // destructure page data by section
//       const [manager, engineer, intern] = templateData;


const employeeArray = function(templateData) {

  const editedArray = [];
console.log(templateData);
  editedArray.push(
    templateData
      .filter(employee => employee.getRole() === "Manager")
      .map(manager => generateManager(manager))

      .filter(employee => employee.getRole() === "Engineer")
      .map(engineer => generateEngineer(engineer))

      .filter(employee => employee.getRole() === "Intern")
      .map(intern => generateIntern(intern))
  )
  

}


const generateManager  = function (manager) {
    return `
    <div>
    <h1> ${manager.name} </h1>
    <p class="id">ID: ${manager.id}</p>
    <p class="email">Email: ${manager.email}</p>
    <p class="officenumber">Office NUmber: ${manager.officenumber}</p>
    </div>
    `;
};
    
const generateEngineer = function (engineer) {
    return `
    <div>
    <h1> ${engineer.name} </h1>
    <p class="id">ID: ${engineer.id}</p>
    <p class="email">Email: ${engineer.email}</p>
    <p class="officenumber">Office NUmber: ${engineer.officenumber}</p>
    <p class="github">Git Hub: <a "href=https://github.com/${engineer.github}"</a> </p>
    </div>
    `;
};

const generateIntern = function (intern) {
    return`
    <div>
    <h1> ${intern.name} </h1>
    <p class="id">ID: ${intern.id}</p>
    <p class="email">Email: ${intern.email}</p>
    
    <p class="school">Inter's School: ${intern.school}</p>
    </div>
    `;
};


// export function to generate entire page
module.exports = templateData => {
    // destructure page data by section
    // const [ manager, engineer, intern ] = templateData;

    
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      
    </head>
    
    <body>
      <header>
          <nav>
            MY TEAM
          </nav>
        </div>
      </header>
      <main >
       
        ${employeeArray(templateData)}
        
      </main>

      <footer>
      </footer>
    </body>
    </html>
    `;
};
  