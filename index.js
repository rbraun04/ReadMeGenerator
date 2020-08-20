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
    type: "checkbox",
    message: "Select if you have a Boost license:",
    name: "stack",
    choices: [
      "Boost", 
    ]
  },
  {
    message: "Enter your GitHub username",
    name: "username"
  },
  {
    message: "Enter your email",
    name: "email"
  },
  {
    message: "Enter your LinkedIn username",
    name: "linkedin"
  },

  
  
  
  
  ])
  .then(function(response) {
    var boost = [response.stack[0]]
   
   
    for(let i = 0; i <boost.length; i++ ){
      if (boost[i] === undefined ){
            boost = [];
          }else  {
            boost = '[![Boost][Boost-shield]][Boost-url]';
          }}


      const myReadme = `${boost} <h3 align = "center">## ${response.title} </h3>
                        \n ## Project Description 
                        \n ## Table of Contents
* [Project Description](#project-description)
* [Installation Instructions](#installation-instructions)
* [Usage Information](#usage-information)
* [Contribution Guidelines](#contribution-guidelines)
* [Test Instructions](#test-instructions)
* [Questions](#questions)

    \n 
## Licenses    
    This applicaiton is covered with:
    [![Boost][Boost-shield]][Boost-url]

    
    ${response.description}
                        \n ## Installation Instructions\n
    ${response.installation}
                        \n ## Usage Information\n 
    ${response.usage}
                        \n ## Contribution Guidelines\n 
    ${response.contribution}
                        \n ## Test Instructions\n 
    ${response.test}
                        \n ## Questions\n 
                        Feel free to contact me via Gifthub or by my e-mail!
Github Username:  ${response.username}
\n <a href = "https://github.com/${response.username}">GitHub</a> - Click to go to my profile!
\n Email:  ${response.email}
\n [![LinkedIn][linkedin-shield]][linkedin-url]

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/${response.linkedin}
[Boost-shield]: https://img.shields.io/badge/License-Boost%201.0-lightblue.svg
[Boost-url]: https://www.boost.org/LICENSE_1_0.txt
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
    // {
    //   type: "checkbox",
    //   message: "What languages do you know?",
    //   name: "stack",
    //   choices: [
    //     "HTML", 
    //     "CSS", 
    //     "JavaScript", 
    //     "MySQL"
    //   ]
    // },
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
  