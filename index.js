const fs = require('fs');
const inquirer = require('inquirer');


inquirer
  .prompt([{
    type: "input",
    message: "What is your name?",
    name: "yourName",
  },{
      type: "input",
      message: "Where is your location?",
      name: "yourLocation",
  }, {
      type:"input",
      message: "What is your bio?",
      name: "yourBio",
  }, {
      type:"input",
      message: "What is your LinkedIn?",
      name: "yourLinkedIn",

  }, {
      type:"input",
      message: "What is your GitHub Url?",
      name: "yourGithub",
  }
  ])
  .then((answers) => {
      const content = 
      `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Portfolio</title>
      </head>
      <body>
          <h1>My Header</h1>
          <p>${answers.yourName}</p>
          <h1>My Location</h1>
          <p>${answers.yourLocation}</p>
          <h1>My Bio</h1>
          <p>${answers.yourBio}</p>
          <h1>My LinkedIn</h1>
          <a href="${answers.yourLinkedIn}" target="_blank">"${answers.yourLinkedIn}"</a>
          <h1>My GitHub</h1>
          <a href="${answers.yourGithub}" target="_blank">"${answers.yourGithub}"</a>
      </body>
      </html>`
    fs.writeFile(`./${answers.yourName}.html`, content, err => {
    if(err){
        console.error(err)
        return
    }
})
})
  