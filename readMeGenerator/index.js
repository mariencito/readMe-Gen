// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

// these are the questions
const questions = ["what is the title of your project?", "Can you give me a description?", "How do you install it?", "How do you use it?", "Who do you give credit to?", "Which liscense is it using?","How does one contribute to your project?", "Have you ran any test?","What is your GitHub username?", "What is your email?"];

// inquirer code. this is how you ask questions
inquirer
  .prompt([
    {
        type: 'input',
        message: questions[0],
        name: 'title',
      },
      {
        type: 'input',
        message: questions[1],
        name: 'description',
      },
      {
        type: 'input',
        message: questions[2],
        name: 'install',
      },
      {
        type: 'input',
        message: questions[3],
        name: 'usage',
      },
      {
        type: 'input',
        message: questions[4],
        name: 'credit',
      },
      {
        type: 'list',
        message: questions[5],
        name: 'license',
        choices: ['MIT','Mozilla Public License','none'],
      },
      {
        type: 'input',
        message: questions[6],
        name: 'contribute',
      },
      {
        type: 'input',
        message: questions[7],
        name: 'test',
      },
      {
        type: 'input',
        message: questions[8],
        name: 'username',
      },
      {
        type: 'input',
        message: questions[9],
        name: 'email',
      },
    ])
  .then(response =>{
    const readMeContent = 
    `# ${response.title}
## Table of Contents
[Contact Me](#questions)
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Test](#test)

## Description
    ${response.description}
## Installation
    ${response.install}
## Usage
    ${response.usage}
## Credits
    ${response.credit}
## License
    This project is licensed under the ${response.license} license.
## How to Contribute
    ${response.contribute}
## Tests
    ${response.test}
## Questions
    https://github.com/${response.username}
    You can email me at ${response.email}
    `;
    return writeFileAsync('READMEtest.md' , readMeContent);
  })

//   above is the read me file with the responses from the questions inserted into the file
// the last line of code creates the seperate readme file