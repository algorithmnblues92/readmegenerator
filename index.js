// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
// const questions = [];


inquirer.prompt([
 {
  name: 'title',
  message: 'What is the title of your project?',
  type: 'input',
 },
 {
  name: 'description',
  message: 'Add a project description:',
  type: 'input',
 },
 {
  name: 'installationInstructions',
  message: 'Add installation Information:',
  type: 'input',
 },
 {
  name: 'usageInformation',
  message: 'Add Usage Information:',
  type: 'input',
 },
 {
  name: 'contributionGuidelines',
  message: 'Add Contribution Guidelines:',
  type: 'input',
 },
 {
  name: 'testInstructions',
  message: 'Add Test Instructions:',
  type: 'input',
 },
  {
  name: 'license',
  message: 'Add a license:',
  choices: [
   'Apache',
   'GNU General Public License 3.0',
   'MIT License',
   'BSD 2-Clause "Simplified" License',
   'BSD 3-Clause "New" or "Revised" License',
   'Boost Software License 1.0',
   'Creative Commons Zero v1.0 Universal',
   'Eclipse Public License 2.0',
   'GNU Affero General Public License v3.0',
   'GNU General Public License v2.0',
   'GNU Lesser General Public License v2.1',
   'Mozilla Public License 2.0',
   'The Unlicense',
  ],
  type: 'checkbox',
 },
   {
  name: 'screenshots',
  message: 'Add screenshots 1 or leave empty:',
  type: 'input',
 },
    {
  name: 'screenshots2',
  message: 'Add screenshots 2 or leave empty:',
  type: 'input',
 },
    {
  name: 'screenshots3',
  message: 'Add screenshots 3 or leave empty:',
  type: 'input',
 },
  {
  name: 'githubUserName',
  message: 'Add github user name:',
  type: 'input',
 },
  {
  name: 'email',
  message: 'Add email:',
  type: 'input',
 },
   {
  name: 'deployedLink',
  message: 'Add deployed website link:',
  type: 'input',
 },
]).then(res => {
//  console.log(`${res.license}`);
//  console.log(`${res.title}`);

//TODO: write for loop, make a few screenshots and add deployed link, generate my own readme then turn it in
for (i=0;i<licenseObj.length; i++) {
 if (`${res.license}` === Object.keys(licenseObj)[i]) {
  console.log('object :' + licenseObj[res.license]);
 }
}

 fs.writeFile('README.md', readmeGenerator(res), (err) => {
  err ? console.error(err) : console.log('Success');
 } )
})

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

const readmeGenerator = ({title, description, installationInstructions, usageInformation, contributionGuidelines, testInstructions, license, screenshots, screenshots2, screenshots3, githubUserName, email, deployedLink, ...rest}) => {
 return `
# ${title}
${licenseObj[license]}

## Table of Contents

1.[Description](#Description)<br>
2.[Installation Instructions](#Installation-Instructions)<br>
3.[Usage Information](#Usage-Information)<br>
4.[Contribution Guidelines](#Contribution-Guidelines)<br>
5.[Test Instructions](#Test-Instructions)<br>
6.[License](#License)<br>
7.[Screenshots](#Screenshots)<br>
8.[Questions](#Questions)<br>
    1a.[GitHub User Name](#Github-User-Name)<br>
    2a.[Email](#Email)<br>
    3a.[Deployed Link](#Deployed-Link)<br>


## Description 

${description}


## Installation Instructions

${installationInstructions}


## Usage Information

${usageInformation}


## Contribution Guidelines

${contributionGuidelines}


## Test Instructions

${testInstructions}


## License

${license}
${licenseLink[license]}


## Screenshots

${screenshots}
${screenshots2}
${screenshots3}


## Questions

### Github User Name

${githubUserName}

### Email

${email}

### Deployed Link:

${deployedLink}

 `
}


//TODO: Make array for license badge and links

const licenseObj = {
 Apache: "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)",

 'GNU General Public License 3.0': "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",

 'MIT License': "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",

 'BSD 2-Clause "Simplified" License': "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)",

 'BSD 3-Clause "New" or "Revised" License': "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)",

 'Boost Software License 1.0': "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)",

  'Creative Commons Zero v1.0 Universal': "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)",

  'Eclipse Public License 2.0': "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)",

  'GNU Affero General Public License v3.0': "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",

  'GNU General Public License v2.0': "![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)",

  'GNU Lesser General Public License v2.1': "![License: GPL v2.1](https://img.shields.io/badge/License-GPL_v2.1-blue.svg)",

  'Mozilla Public License 2.0': "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)",

  'The Unlicense': "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)",

}

const licenseLink = {
 Apache: "(https://opensource.org/licenses/Apache-2.0)",

 'GNU General Public License 3.0': "(https://www.gnu.org/licenses/gpl-3.0)",

 'MIT License': "(https://opensource.org/licenses/MIT)",

 'BSD 2-Clause "Simplified" License': "(https://opensource.org/licenses/BSD-2-Clause)",
 
 'BSD 3-Clause "New" or "Revised" License': "(https://opensource.org/licenses/BSD-3-Clause)",

 'Boost Software License 1.0': "(https://www.boost.org/LICENSE_1_0.txt)",

 'Creative Commons Zero v1.0 Universal': "(http://creativecommons.org/publicdomain/zero/1.0/)",

  'Eclipse Public License 2.0': "(https://opensource.org/licenses/EPL-1.0)",

  'GNU Affero General Public License v3.0': "(https://www.gnu.org/licenses/gpl-3.0)",

  'GNU General Public License v2.0': "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",

  'GNU Lesser General Public License v2.1': "(https://opensource.org/license/lgpl-2-1/)",

  'Mozilla Public License 2.0': "(https://opensource.org/licenses/MPL-2.0)",

  'The Unlicense': "(http://unlicense.org/)",

}



