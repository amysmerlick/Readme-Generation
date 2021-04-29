const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
  {
    type: 'input',
    message: 'Please enter your project title?',
    name: 'title',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } },
  },
  {
    type: 'input',
    message: 'Please enter your project description?',
    name: 'description',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } },
  },
  {
    type: 'input',
    message: 'Please describe the Installation',
    name: 'installation',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue"  } },
  },
  {
    type: 'input',
    message: 'Please include the link to your live demo',
    name: 'usage',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } },
  },
  {
    type: 'input',
    message: 'Please list your Contributors',
    name: 'contributors',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue"  } },
  },
  {
    type: 'input',
    message: 'Please list your Instructions',
    name: 'instructions',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue"  } },
  },
  {
    type: 'input',
    message: 'Please list your credits',
    name: 'credits',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue"  } },
  },
  {
    type: 'list',
    message: 'Please choose your license',
    name: 'license',
    choices: ['GNU', 'Apache'],
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue"  } },
  },
  {
    type: 'input',
    message: 'Please enter your GitHub path',
    name: 'gitHub',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue"  } },
  },
  {
    type: 'input',
    message: 'Please enter your email address',
    name: 'email',
    validate: (value) => { if (value) { return true } else { return "Please enter a value to continue"  } },
  }
]
)
.then((data) => {
  let licenseLink = ""
  if (data.license==="Apache") {
   licenseLink =  "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if (data.license==="GNU"){
    licenseLink = "[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
  const filename = 'README.md';
  const readMe = `
  # 🌺${data.title}🌺
  ## ${licenseLink}
  # Description
  ### ${data.description}
  # 📚📚 Table of Contents📚📚
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Credits](#credits)
  * [License](#license)
  
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  Please click on the included url for the walthrough video which demonstrates how to use this tool
  # Contributors
  ${data.contributors}
  # Instructions 👀
  ${data.instructions}
  # Credits
  ${data.credits}
  # License
  The application you're enjoying is covered under the ${data.license} license
  # Questions ❓❓
  For questions, please email me, or contact me via GitHub.
  * 📧Email📬: ${data.email}
  * 💹GitHub💹: www.github.com/${data.gitHub}`;
  console.log(readMe);
  fs.writeFile(filename, readMe, (err) =>
    err ? console.log(err) : console.log('Success!')
  );
});