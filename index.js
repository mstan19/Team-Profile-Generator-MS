let generateHTML = require("./src/profile.js");
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Employee = require("./lib/employee");
const Intern = require("./lib/intern");

// const generateHTML = ({name,jobIcon,occupation,id,email,GHusername,officeNum,school}) =>
// `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
//     <title>Team Profile</title>
// </head>
// <body>
//     <h1>My Team</h1>
//     //cards
//     <div class="card" style="width: 18rem">
//         <div class="card-header">
//           <h5 class="card-title">${name}</h5>
//           <h6 class="card-subtitle mb-2 text-muted"><i class=${jobIcon} style="font-size: 25px;"><${occupation}</h6>
//         </div>
//         <div class="card-body"></div>
//             <ul class="list-group">
//                 <li class="list-group-item"><a href="#" class="card-link">${id}</a></li>
//                 <li class="list-group-item"><a href="#" class="card-link">${email}</a></li>
//                 <li class="list-group-item"><a href="#" class="card-link">${GHusername}</a></li>
//                 <li class="list-group-item"><a href="#" class="card-link">${officeNum}</a></li>
//                 <li class="list-group-item"><a href="#" class="card-link">${school}</a></li>
//             </ul>
//         </div>
//     </div>
// </body>
// </html>`;
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

let selectOccupation = [
    {
        type: "list",
        name: "occupation",
        message: "Which type of team member would you like to add?",
        choices: [
            "Intern",
            "Engineer",
            "I don't want to add any more team members",
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

function otherMember() {
    inquirer.prompt(selectOccupation).then((answersselectOcc) => {
        console.log(answersselectOcc);
        if (answersselectOcc.occupation === "Engineer") {
            inquirer.prompt(engineerQuestions).then((answersE) => {
                // console.log(answersselectOcc.occupation);

                const engineer = new Engineer(
                    answersE.name,
                    answersE.id,
                    answersE.email,
                    answersE.GHusername
                );
            otherMember();
            });
            //go back to questions
            
        } else if (answersselectOcc.occupation === "Intern") {
            inquirer.prompt(internQuestions).then((answersI) => {
                const intern = new Intern(
                    answersI.name,
                    answersI.id,
                    answersI.email,
                    answersI.school
                );
            otherMember();
            });
            
        } else {
            console.log("1test")
            let htmlTPContent = generateHTML({name,jobIcon,occupation,id,email,GHusername,officeNum,school});
            console.log("2test")
            fs.writeFile(`./src/index.html`, htmlTPContent, (err) =>
                err
                    ? console.err(
                        "Failed to generate index.html for the Team Profile file."
                    )
                    : console.log(
                        "Successfully created index.html for the Team Profile file!"
                    )
            );
        }
    });
}

function writeFile() {
    fs.writeFile(`./src/index.html`, htmlTPContent, (err) =>
        err
            ? console.err(
                "Failed to generate index.html for the Team Profile file."
            )
            : console.log(
                "Successfully created index.html for the Team Profile file!"
            )
    );
}
// console.log("testing")
function startQ() {
    // console.log("startQ")
    inquirer.prompt(managerQuestions).then((answersM) => {
        // console.log(answersM);
        // make instances for new manager
        const manager = new Manager(
            answersM.name,
            answersM.id,
            answersM.email,
            answersM.officeNum
        );

        otherMember();
    });
}
startQ();
