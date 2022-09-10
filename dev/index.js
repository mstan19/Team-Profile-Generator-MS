const Profile = require('./profile');
const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({}) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of the project?',
        }
    ])
    .then((answers) => {
        const htmlTPContent = generateHTML(answers);
    
        fs.writeFile('index.html', htmlTPContent, (err) =>
          err ? console.err("Failed to generate index.html for the Team Profile file") : console.log('Successfully created index.html for the Team Profile file!')
        );
      });