let addingStr = require("./src/profile.js");
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Employee = require("./lib/employee");
const Intern = require("./lib/intern");
let allManagers = [];
let allEngineers = [];
let allinterns = [];

let selectOccupation = [
    {
        type: "list",
        name: "occupation",
        message: "Which type of team member would you like to add?",
        choices: ["Intern", "Engineer", "Manager","I don't want to add any more team members",
        ],
    },
];

let engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your engineer's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your engineer's id?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your engineer's email?",
    },
    {
        type: "input",
        name: "GHusername",
        message: "What is your engineer's GitHub username?",
    },
];

let internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your intern's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your intern's id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your intern's email?"
    },
    {
        type: 'input',
        name: "school",
        message: "What is your intern's school?"
    }
]

let managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the team manager's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the team manager's id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the team manager's email?"
    },
    {
        type: "input",
        name: "officeNum",
        message: "What is the team manager's office number?"
    },
];

function mainMenu() {
    inquirer.prompt(selectOccupation)
    .then((answersSO) => {
        if (answersSO.occupation === "Engineer"){
            console.log(answersSO)
            engineerMenu();
        } else if (answersSO.occupation === "Intern"){
            internMenu();
        }else if (answersSO.occupation === "Manager"){
            managerMenu();
        } else {
            writeFile();
        }
    });
}

function engineerMenu() {
    inquirer.prompt(engineerQuestions)
    .then((answersE) => {
        const engineer = new Engineer(
            answersE.name,
            answersE.id,
            answersE.email,
            answersE.GHusername
        );
        allEngineers.push(engineer);
        mainMenu();
    });
}

function internMenu() {
    inquirer.prompt(internQuestions)
    .then((answersI) => {
        const intern = new Intern(
            answersI.name,
            answersI.id,
            answersI.email,
            answersI.school
        );
        allinterns.push(intern);
        mainMenu();
    });
}

function managerMenu() {
    inquirer.prompt(managerQuestions)
    .then((answersM) => {
        const manager = new Manager(
            answersM.name,
            answersM.id,
            answersM.email,
            answersM.officeNum
        );
        allManagers.push(manager);
        mainMenu();
    });
}

function writeFile() {
    let htmlTPContent = addingStr(allManagers, allinterns, allEngineers);
    fs.writeFile(`./dist/index.html`, htmlTPContent, (err) =>
        err
            ? console.err(
                "Failed to generate index.html for the Team Profile file."
            )
            : console.log(
                "Successfully created index.html for the Team Profile file!"
            )
    );
}

mainMenu();