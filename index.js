var inquirer = require("inquirer");
var fs = require('fs');




inquirer
  .prompt([{
    message: "Enter the titel of your project:",
    name: "title"
  },
  {
    message: "Enter a description of your project",
    name: "description"
  },
  {
    message: "Please enter installation instructions:",
    name: "installation"
  },
  {
    message: "Please enter usage information",
    name: "usage"
  },
  {
    message: "Pleae enter contribution guidelines:",
    name: "contribution"
  },
  {
    message: "Please enter test instructions",
    name: "test"
  },
  {
    message: "Enter your GitHub link",
    name: "link"
  },
  {
    message: "Enter your GitHub link",
    name: "link"
  },
  {
    message: "Enter your GitHub link",
    name: "link"
  }

  
  
  
  
  ])
  .then(function(response) {
      const myReadme = `<h3 align = "center">## ${response.title}</h3>
                        \n ## Project Description 
                        \n ## Table of Contents
* [Project Description](#project-description)
* [Installation Instructions](#installation-instructions)
* [Usage Information](#usage-information)
* [Contribution Guidelines](#contribution-guidelines)
* [Test Instructions](#test-instructions)

    \n [![Contributors][contributors-shield]][contributors-url]
    [![Forks][forks-shield]][forks-url]
    [![Stargazers][stars-shield]][stars-url]
    [![Issues][issues-shield]][issues-url]
    [![MIT License][license-shield]][license-url]
    [![LinkedIn][linkedin-shield]][linkedin-url]
    
    ${response.description}
                        \n ## Installation Instructions\n
    ${response.installation}
                        \n ## Usage Information\n 
    ${response.usage}
                        \n ## Contribution Guidelines\n 
    ${response.contribution}
                        \n ## Test Instructions\n 
    ${response.test}
    [contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=flat-square 
                        ##Repo link - ${response.link}`
    

      fs.writeFile("README.md", myReadme, function(err) {
        if (err) {
          throw err;
        }
        // console.log(`Saved ${repoNames.length} repos`);
      });
    });


























// fs.appendFile("./README.md", "<br><p> ## Table of Contents " + "hello/t", (err) => {
//     if(err) {
//         console.log(err);
//     } 
//     });


// inquirer.prompt([
//     {
//       type: "input",
//       name: "name",
//       message: "What is your name?"
//     },
//     {
//       type: "checkbox",
//       message: "What languages do you know?",
//       name: "stack",
//       choices: [
//         "HTML", 
//         "CSS", 
//         "JavaScript", 
//         "MySQL"
//       ]
//     },
//     {
//       type: "list",
//       message: "What is your preferred method of communication?",
//       name: "contact",
//       choices: [
//         "email",
//         "phone",
//         "telekinesis"
//       ]
//     }
//   ]).then(function(data) {
  
//     var filename = data.name.toLowerCase().split(' ').join('') + ".md";
  
//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
  
//       if (err) {
//         return console.log(err);
//       }
  
//       console.log("Success!");
  
//     });
//   });
  