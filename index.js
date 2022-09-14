const fs = require('fs');
const inquirer = require('inquirer');
const emailValidation = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;


// Employee Questions
inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: answer => {
            if (answer === '') {
                return 'Error! You must type your name to continue!'
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your ID number?',
        validate: answer => {
            if (answer === '') {
                return 'Error! You must type your ID number to continue!'
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: answer => {
            if (emailValidation.test(answer)) {
                return true;
            } else {
                return 'Error! Must insert valid email address!'
            }
        }
    },
]);

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


// Engineer Questions
inquirer.prompt ([
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: answer => {
            if (answer === '') {
                return 'Error! You must type your office number to continue!'
            }
        }
    }
]);

// Intern Questions
inquirer.prompt ([
    {
        type: 'input',
        name: 'school',
        message: 'What is the name of your school?',
        validate: answer => {
            if (answer === '') {
                return 'Error! You must type your school name to continue!'
            }
        }
    }
])
.then(data)

