const fs = require('fs');
const inquirer = require('inquirer');
const manager = require('./lib/manager.class');
const engineer = require('./lib/engineer.class');
const intern = require('./lib/intern.class');
const emailValidation = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const employees = [];

function initiateApp() {
    startHtml();
    addEmployee();
}

function addEmployee(){
    // Employee Questions
inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: 'Enter your team members name.',
        validate: answer => {
            if (answer === '') {
                return 'Error! You must type a name to continue!'
            }
        }
    },
    {
        type: 'list',
        name: 'role',
        message: 'Select team members role.',
        choice: [
            'Manager',
            'Engineer',
            'Intern'
        ],
        validate: answer => {
            if (answer === '') {
                return 'Error! You must choose a role to continue!'
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your team members email address.',
        validate: answer => {
            if (emailValidation.test(answer)) {
                return true;
            } else {
                return 'Error! You must type a valid email address to continue!'
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter your team members ID.',
        validate: answer => {
            if (answer === '') {
                return 'Error! You must type an ID to continue!'
            }
        }
    }])
    .then(function({name, role, email, id}) {
        let roleAnswer  ='';
        if (role === 'Manager'){
            roleAnswer = 'Office phone number';
        } else if (role === 'Engineer') {
            roleAnswer = 'GitHub username'; 
        } else {
            roleAnswer = 'School name';
        }
        inquirer.prompt([
            {
                message: `Enter employees ${roleAnswer}`,
                name: 'roleAnswer'
            },
            {
                type: 'list',
                name: 'addMoreEmployees',
                message: 'Would you like to add more employees?',
                choices: [
                    'yes',
                    'no'
                ]
            }
        ])
        .then(function({roleAnswer, addMoreEmployees}) {
            let newEmployee;
            if (role === 'Manager'){
                newEmployee = new manager(name, id, email, roleAnswer);
            } else if (role === "Engineer") {
                newEmployee = new engineer(name, id, email, roleAnswer);
            } else {
                newEmployee = new intern(name, id, email, roleAnswer);
            }
            employees.push(newEmployee);
            addHtml(newEmployee)
            .then(function() {
                if (addMoreEmployees === 'yes') {
                    addEmployee();
                } else {
                    printHtml();
                }
            });
        });
    });

}

function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <!-- Bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <!-- Font Awesome -->
        <script src="https://kit.fontawesome.com/da68686772.js" crossorigin="anonymous" defer></script>
        <title>Team Profile Generator</title>
      </head>
      <body>
        <div class="container my-4 text-center">
          <h1>My Team</h1>
        </div>
    
        <div class="container mx-auto d-flex justify-content-center mb-5">
          <div class="container row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
    `;
    fs.writeFile('./output/myteam.html', html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log('start');
}

function createHtml (employee) {
    return new Promise(function(resolve, reject) {
        const name = employee.getName();
        const role = employee.getRole();
        const email = employee.getEmail();
        const id = employee.getID();
        let data = '';
        if (role === 'Manager') {
            const officeNumber = employee.getOfficeNumber();
            data = `<!-- Manager -->
            <div class="col">
              <div class="card h-100">
                <div class="card-body bg-danger text-light rounded-top">
                  <h4>${name}</h4>
                  <p class="card-text"><i class="fa-solid fa-crown"></i> ${role}</p>
                </div>
                <ul class="center list-group list-group-flush">
                  <li class="list-group-item">
                    <p>ID: ${id}</p>
                  </li>
                  <li class="list-group-item">
                    <p>Office Number: ${officeNumber}</p>
                  </li>
                </ul>
                <div class="card-body d-flex align-items-end justify-content-center">
                  <a href="${email}" class="card-link text-decoration-none">Email</a>
                </div>
              </div>  
            </div>`
        } else if (role === 'Engineer') {
            const gitHubUser = employee.getGithub();
            data = `<!-- Engineer -->
            <div class="col">
              <div class="card h-100">
                <div class="card-body bg-primary text-light rounded-top">
                  <h4>${name}</h4>
                  <p class="card-text"><i class="fa-solid fa-gear"></i> ${engineer}</p>
                </div>
                <ul class="center list-group list-group-flush">
                  <li class="list-group-item">
                    <p>ID: ${id}</p>
                  </li>
                  <li class="list-group-item">
                    <p>Title:</p>
                  </li>
                </ul>
                <div class="card-body d-flex align-items-end justify-content-center">
                  <a href="${gitHubUser}" class="card-link text-decoration-none">GitHub</a>
                  <a href="${email}" class="card-link text-decoration-none">Email</a>
                </div>
              </div>  
            </div>`

        } else {
            const school = employee.getSchool();
            data = `<!-- Intern -->
            <div class="col">
              <div class="card h-100">
                <div class="card-body bg-success text-light rounded-top">
                  <h4>${name}</h4>
                  <p class="card-text"><i class="fa-solid fa-graduation-cap"></i> ${intern}</p>
                </div>
                <ul class="center list-group list-group-flush">
                  <li class="list-group-item">
                    <p>ID: ${id}</p>
                  </li>
                  <li class="list-group-item">
                    <p>School: ${school}</p>
                  </li>
                </ul>
                <div class="card-body d-flex align-items-end justify-content-center">
                  <a href="${gitHubUser}" class="card-link text-decoration-none">GitHub</a>
                  <a href="${email}" class="card-link text-decoration-none">Email</a>
                </div>
              </div>  
            </div>`
        }
        console.log('Adding employee');
        fs.appendFile('./output/myteam.html', data, function(err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
}



// Manager Questions
inquirer.prompt ([
    {
        type: 'input',
        name: 'office',
        message: 'What is your office number?',
        validate: answer => {
            if (answer === '') {
                return 'Error! You must type your office number to continue!'
            }
        }
    }
]);

function printHtml() {
    const endHtml = ` </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
  </body>
</html>`; 
fs.appendFile('./output/myteam.html',endHtml, function(err) {
    if (err) {
        console.log(err);
    };
});
console.log('HTML Created!');
};

initiateApp();

