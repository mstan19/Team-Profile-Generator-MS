const Profile = require('./profile');
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of the project?',
        },
        {
            type: "input",
            message: "Please enter id:",
            name: "id",
            validate: (answer) => {
              if (isNaN(answer)) {
                return "please enter a number";
              }
              return true;
            },
        },
    ])
    .then((answers) => {
        const htmlTPContent = generateHTML(answers);
    
        fs.writeFile('index.html', htmlTPContent, (err) =>
          err ? console.err("Failed to generate index.html for the Team Profile file") : console.log('Successfully created index.html for the Team Profile file!')
        );
      });
