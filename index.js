const inquirer = require('inquirer');
const fs = require('fs');
inquirer.prompt([
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' }},
  },
  {
    type: 'input',
    message: 'How do you install your app?',
    name: 'installation',
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' }},
  },
  {
    type: 'input',
    message: 'Are there any special instructions?',
    name: 'instructions',
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' }},
  },
  {
    type: 'input',
    message: 'Credits?',
    name: 'credits',
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' }},
  },
  {
    type: 'list',
    message: 'What license did you use?',
    name: 'license',
    choices: ['The MIT License', 'The GPL License', 'Apache license'],
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' }},
  },
  {
    type: 'input',
    message: 'GitHub username:',
    name: 'gitname',
    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' }},
  }
]
).then(({
  title,
  installation,
  instructions,
  credits,
  license,
  git,
  usage,
  contribution
})=>{

const template ='# ${title}
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Credits](#credits)
* [License](#license)
# Installation
${installation}
## Usage
${usage}
## Contribution
${contribution}
### instructions
${instructions}
## Credits
${credits}
## License
${license}

# Contact
* GitHub :${git}';

createNewFile(title,template);
}
);

function createNewFile(fileName,data){
fs.writeFile('./${fileName.toLowerCase().split(' ').join('')}.md',data,(err)=>{
  if(err){
      console.log(err);
    }
    console.log('Your README has been generated');
})
}





// ).then((data) => {
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
//   });