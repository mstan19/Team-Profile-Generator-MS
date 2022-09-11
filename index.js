const generateHTML = require('./src/profile.js');
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
          type: 'input',
          name: 'name',
          message: "What is the team manager's name?",
        },
        {
          type: 'input',
          name: 'id',
          message: "What is the team manager's id?",
        },
        {
          type: 'input',
          name: 'email',
          message: "What is the team manager's email?",
        },
        {
          type: 'input',
          name: 'officenum',
          message: "What is the team manager's office number?",
        },
        {
          type: 'list',
          name: 'addTeamMembers',
          message: "Which type of team member would you like to add?",
          choices: ["Intern", "Engineer", "Manager", "I don't want to add any more team members"],
        },
        {
          type: 'input',
          name: 'name',
          message: "What is your intern's name?",
        },
        {
          type: 'input',
          name: 'id',
          message: "What is your intern's id?",
        },
        {
          type: 'input',
          name: 'email',
          message: "What is your intern's email?",
        },
        {
          type: 'input',
          name: "school",
          message: "What is your intern's school?",
        },
        {
          type: 'list',
          name: 'addTeamMembers',
          message: "Which type of team member would you like to add?",
          choices: ["Intern", "Engineer", "Manager", "I don't want to add any more team members"],
        },
        {
          type: 'input',
          name: 'name',
          message: "What is your engineer's name?",
        },
        {
          type: 'input',
          name: 'id',
          message: "What is your engineer's id?",
        },
        {
          type: 'input',
          name: 'email',
          message: "What is your engineer's email?",
        },
        {
          type: 'input',
          name: "GHusername",
          message: "What is your engineer's GitHub username?",
        }
        // {
        //     type: "input",
        //     message: "Please enter id:",
        //     name: "id",
        //     validate: (answer) => {
        //       if (isNaN(answer)) {
        //         return "please enter a number";
        //       }
        //       return true;
        //     },
        // },
    ])
    .then((answers) => {
        const htmlTPContent = generateHTML(answers);
    
        fs.writeFile('index.html', htmlTPContent, (err) =>
          err ? console.err("Failed to generate index.html for the Team Profile file") : console.log('Successfully created index.html for the Team Profile file!')
        );
      });
