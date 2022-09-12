// const generateHTML = require('./src/profile.js');
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Employee = require('./employee');
const Intern = require("../lib/intern");



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
    type: 'input',
    name: 'name',
    message: "What is the team manager's name?",
    // when: (answers) => {
    //   if (answers.occupation === "Manager")
    //     return true;
    //   }
  },
  {
    type: 'input',
    name: 'id',
    message: "What is the team manager's id?",
    // when: (answers) => {
    //   if (answers.occupation === "Manager")
    //     return true;
      // }
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the team manager's email?",
  //   when: (answers) => {
  //     if (answers.occupation === "Manager")
  //       return true;
  //     }
  },
  {
    type: 'input',
    name: 'officeNum',
    message: "What is the team manager's office number?",
    // when: (answers) => {
    //   if (answers.occupation === "Manager")
    //     return true;
    //   }
  }
];

// let selectOccupation = [
//   {
//     type: 'list',
//     name: "occupation",
//     message: "Which type of team member would you like to add?",
//     choices: ["Intern", "Engineer", "Manager", "I don't want to add any more team members"],
//   }
  //make inqurier and ask other questions
  //in a .then get occ and match by questons
// ];

// function otherMember() {[
//   {
//     type: 'input',
//     name: 'name',
//     message: "What is your intern's name?",
//     when: (answers) => {
//       if (answers.occupation === "Intern")
//         return true;
//       }
//   },
//   {
//     type: 'input',
//     name: 'id',
//     message: "What is your intern's id?",
//     when: (answers) => {
//       if (answers.occupation === "Intern")
//         return true;
//       }
//   },
//   {
//     type: 'input',
//     name: 'email',
//     message: "What is your intern's email?",
//     when: (answers) => {
//       if (answers.occupation === "Intern")
//         return true;
//       }
//   },
//   {
//     type: 'input',
//     name: "school",
//     message: "What is your intern's school?",
//     when: (answers) => {
//       if (answers.occupation === "Intern")
//         return true;
//       }
//   },
//   {
//     type: 'input',
//     name: 'name',
//     message: "What is your engineer's name?",
//     when: (answers) => {
//       if (answers.occupation === "Engineer")
//         return true;
//       }
//   },
//   {
//     type: 'input',
//     name: 'id',
//     message: "What is your engineer's id?",
//     when: (answers) => {
//       if (answers.occupation === "Engineer")
//         return true;
//       }
//   },
//   {
//     type: 'input',
//     name: 'email',
//     message: "What is your engineer's email?",
//     when: (answers) => {
//       if (answers.occupation === "Engineer")
//         return true;
//       }
//   },
//   {
//     type: 'input',
//     name: "GHusername",
//     message: "What is your engineer's GitHub username?",
//     when: (answers) => {
//       if (answers.occupation === "Engineer")
//         return true;
//       }
//   }
// ]}
console.log("testing")
function startQ () {
console.log("startQ")
  inquirer
    .prompt(managerQuestions)
    .then((answersM,) => {
      console.log(answersM);
      const manager = new Manager(answersM.name, answersM.id, answersM.email, answersM.officeNum);
      // make instances for new manager
      // inquirer
      //   .prompt(otherMember, selectOccupation)
      //   .then((answers) => {
      //     console.log(answers)
      //     switch (answers) {
      //       case Engineer:
              
      //         occupation = "Engineer";
      //         break;
      //       case intern:
      //         occupation = "Intern";
      //         break;
            
      //     }
      //     // console log answers. then grab those occupations answers -> if statement for the occ 
      //     // use arrray for occ like manager (prompt))
      //   })
    })
}

  

    
    // .then((answers) => {
      console.log("end")
      
    //     const htmlTPContent = generateHTML(answers);
    
    //     fs.writeFile('index.html', htmlTPContent, (err) =>
    //       err ? console.err("Failed to generate index.html for the Team Profile file") : console.log('Successfully created index.html for the Team Profile file!')
    //     );
      // });
startQ();