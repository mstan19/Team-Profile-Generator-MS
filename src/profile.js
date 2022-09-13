let startStr = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
    <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="./dist/style.css" />
    <title>Team Profile</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="greeting display-4 text-center">Meet Our Team!</h1>
        </div>
      </div>
    <div class="container">
      <div class="row justify-content-center">`
    
let endStr =
`
</div>
  </div>
</body>
</html>`;

let createManagerStr = (name,jobIcon,occupation,id,email,officeNum) =>
`
<!-- //Manager -->
<div class="card col-3 m-1 justify-content-center" >
    <div class="card-header">
      <h5 class="card-title text-center">${name}</h5>
      <h6 class="card-subtitle mb-2 text-center">${occupation}</h6>
    </div>
        <ul class="list-group">
            <li class="list-group-item common"><a href="#" class="card-link">${id}</a></li>
            <li class="list-group-item commonTwo"><a href="#" class="card-link">${email}</a></li>
            <li class="list-group-item other"><a href="#" class="card-link">${officeNum}</a></li>
        </ul>
</div>
`

let createEngineerStr = (name,jobIcon,occupation,id,email,GHusername) =>
` 
<!-- //Engineer -->
        <div class="card col-3 m-1 justify-content-center" >
            <div class="card-header ">
              <h5 class="card-title text-center">${name}</h5>
              <h6 class="card-subtitle mb-2 text-center">${occupation}</h6>
            </div>
                <ul class="list-group">
                    <li class="list-group-item common"><a href="#" class="card-link">${id}</a></li>
                    <li class="list-group-item commonTwo"><a href="#" class="card-link">${email}</a></li>
                    <li class="list-group-item other"><a href="#" class="card-link">${GHusername}</a></li>
                </ul>
        </div>`

let createInternStr = (name,jobIcon,occupation,id,email,school) =>
`  
<div class="card col-3 m-1 justify-content-center" >
            <div class="card-header">
              <h5 class="card-title text-center">${name}</h5>
              <h6 class="card-subtitle mb-2 text-center">${occupation}</h6>
            </div>
                <ul class="list-group">
                    <li class="list-group-item common"><a href="#" class="card-link">${id}</a></li>
                    <li class="list-group-item commonTwo"><a href="#" class="card-link">${email}</a></li>
                    <li class="list-group-item other"><a href="#" class="card-link">${school}</a></li>
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
   
    return startStr + managerStr + engineerStr + internStr + endStr;
}

module.exports = addingStr;