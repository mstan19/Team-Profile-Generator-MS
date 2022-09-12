let startStr = `
<DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
    <title>Team Profile</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Fluid jumbotron</h1>
          <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
      </div>
    <h1>My Team</h1>`
    
let endStr =
`
</body>
</html>`;

let createManagerStr = (name,jobIcon,occupation,id,email,officeNum) =>
`
<div class="card" style="width: 18rem">
    <div class="card-header">
      <h5 class="card-title">${name}</h5>
      <h6 class="card-subtitle mb-2 text-muted"><i class=${jobIcon} style="font-size: 25px;"><${occupation}</h6>
    </div>
    <div class="card-body"></div>
        <ul class="list-group">
            <li class="list-group-item"><a href="#" class="card-link">${id}</a></li>
            <li class="list-group-item"><a href="#" class="card-link">${email}</a></li>
            <li class="list-group-item"><a href="#" class="card-link">${officeNum}</a></li>
        </ul>
</div>
`

let createEngineerStr = (name,jobIcon,occupation,id,email,GHusername) =>
` 
<div class="card" style="width: 18rem">
    <div class="card-header">
      <h5 class="card-title">${name}</h5>
      <h6 class="card-subtitle mb-2 text-muted"><i class=${jobIcon} style="font-size: 25px;"><${occupation}</h6>
    </div>
    <div class="card-body"></div>
        <ul class="list-group">
            <li class="list-group-item"><a href="#" class="card-link">${id}</a></li>
            <li class="list-group-item"><a href="#" class="card-link">${email}</a></li>
            <li class="list-group-item"><a href="#" class="card-link">${GHusername}</a></li>
        </ul>
</div>`

let createInternStr = (name,jobIcon,occupation,id,email,school) =>
`  
<div class="card" style="width: 18rem">
    <div class="card-header">
      <h5 class="card-title">${name}</h5>
      <h6 class="card-subtitle mb-2 text-muted"><i class="${jobIcon}" style="font-size: 25px;"><${occupation}</h6>
    </div>
    <div class="card-body"></div>
        <ul class="list-group">
            <li class="list-group-item"><a href="#" class="card-link">${id}</a></li>
            <li class="list-group-item"><a href="#" class="card-link">${email}</a></li>
            <li class="list-group-item"><a href="#" class="card-link">${school}</a></li>
        </ul>
</div>`



function addingStr(allManagers, allinterns, allEngineers) {
    // allManagers = [Manager{}, Manager{}, Manager{}]
    
    let managerStr = "";
    for(let manager of allManagers){
        managerStr += createManagerStr(manager.getName(), "", manager.getRole(), manager.getId(), manager.getEmail(), manager.officeNum) 
    }
    let internStr = "";
    for(let intern of allinterns){
        internStr += createInternStr(intern.getName(),"", intern.getRole(), intern.getId(), intern.getEmail(),intern.getSchool()) 
    }
    let engineerStr = "";
    for(let engineer of allEngineers){
        engineerStr += createEngineerStr(engineer.getName(),"", engineer.getRole(), engineer.getId(), engineer.getEmail(),engineer.getGitHub()) 
    }
   
    return startStr + managerStr + internStr + engineerStr + endStr;
}

module.exports = addingStr;