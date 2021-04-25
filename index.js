const inquirer = require('inquirer');
const fs = require('fs');
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
        type: 'input',
        message: 'What is your project description?',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Please enter a Table of Contents',
        name: 'toc',  
      },
      {
        type: 'input',
        message: 'Describe the Installation',
        name: 'installation',  
      },
      {
        type: 'input',
        message: 'Usage',
        name: 'usage',  
      },
      {
        type: 'input',
        message: 'List your Contributors',
        name: 'contributing',  
      },
      {
        type: 'input',
        message: 'List your tests',
        name: 'tests',  
      },
])
.then((data) => {
    const filename = `README.md`;
    const readMe = `
      ${data.title}
     ${data.description}
    ${data.toc}
    ${data.installation}
    ${data.usage}
    ${data.contributing}
    ${data.tests}
    
    `
  
    fs.writeFile(filename, readMe, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });