const inquirer = require('inquirer');
const fs = require('fs');
inquirer.prompt([
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
  },
  {
    type: 'input',
    message: 'What is your project description?',
    name: 'description',
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
  },
  {
    type: 'input',
    message: 'Please enter a Table of Contents',
    name: 'toc',
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
  },
  {
    type: 'input',
    message: 'Describe the Installation',
    name: 'installation',
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
  },
  {
    type: 'input',
    message: 'Usage',
    name: 'usage',
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
  },
  {
    type: 'input',
    message: 'List your Contributors',
    name: 'contributing',
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
  },
  {
    type: 'input',
    message: 'List your Instructions',
    name: 'instructions',
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
  },
  {
    type: 'input',
    message: 'List your credits',
    name: 'credits',
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
  },
  {
    type: 'input',
    message: 'List your license',
    name: 'license',
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
  },
  {
    type: 'input',
    message: 'Enter your GitHub path',
    name: 'git',
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
  }
]
).then((data) => {
  const filename = `README.md`;
  const readMe = `
  # ${data.title}
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Credits](#credits)
  * [License](#license)
  # Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contributing}
  ### instructions
  ${data.instructions}
  ## Credits
  ${data.credits}
  ## License
  ${data.license}
  # Contact
  * GitHub :${data.git}`;
  console.log(readMe);
  fs.writeFile(filename, readMe, (err) =>
    err ? console.log(err) : console.log('Success!')
  );
});







// ).then(({
//   title,
//   installation,
//   instructions,
//   credits,
//   license,
//   git,
//   usage,
//   contribution
// })=>{

// createNewFile(title,template);
// }
// );

// function createNewFile(fileName,data){
// fs.writeFile('./${fileName.toLowerCase().split(' ').join('')}.md',data,(err)=>{
//   if(err){
//       console.log(err);
//     }
//     console.log('Your README has been generated');
// })
// }

// const template ='# ${title}
// * [Installation](#installation)
// * [Usage](#usage)
// * [Contribution](#contribution)
// * [Credits](#credits)
// * [License](#license)
// # Installation
// ${installation}
// ## Usage
// ${usage}
// ## Contribution
// ${contribution}
// ### instructions
// ${instructions}
// ## Credits
// ${credits}
// ## License
// ${license}

// # Contact
// * GitHub :${git}';





// const inquirer = require('inquirer');
// const fs = require('fs');
// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'title',
//       message: 'What is your project title?',
//     },
//     {
//         type: 'input',
//         message: 'What is your project description?',
//         name: 'description',
//       },
//       {
//         type: 'input',
//         message: 'Please enter a Table of Contents',
//         name: 'toc',  
//       },
//       {
//         type: 'input',
//         message: 'Describe the Installation',
//         name: 'installation',  
//       },
//       {
//         type: 'input',
//         message: 'Usage',
//         name: 'usage',  
//       },
//       {
//         type: 'input',
//         message: 'List your Contributors',
//         name: 'contributing',  
//       },
//       {
//         type: 'input',
//         message: 'List your tests',
//         name: 'tests',  
//       },
// ])
// .then((data) => {
//     const filename = `README.md`;
//     const readMe = `
//     ${data.title}
//     ${data.description}
//     ${data.toc}
//     ${data.installation}
//     ${data.usage}
//     ${data.contributing}
//     ${data.tests}
    
//     `
  
//     fs.writeFile(filename, readMe, (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );

// const template =
// *[Installation](#installation)
// *[Usage](#usage)
// *[Contribution](#contribution)
// *[Credits](#credits)
// *[License](#license)
// #Installation
// ${installation}
// ##Usage
// ${usage}
// ## Contribution
// ${contribution}
// ### instructions
// ${instructions}
// ## Credits
// ${credits}
// ## License
// ${license}
// # Contact
// * GitHub :${git}
// });