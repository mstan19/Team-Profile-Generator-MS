const generateHTML = ({name,jobIcon,occupation,id,email,GHusername,officeNum,school}) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
    <title>Team Profile</title>
</head>
<body>
    <h1>My Team</h1>
    //cards
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
                <li class="list-group-item"><a href="#" class="card-link">${officeNum}</a></li>
                <li class="list-group-item"><a href="#" class="card-link">${school}</a></li>
            </ul>
        </div>
    </div>
</body>
</html>`;

module.exports = Profile;