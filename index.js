
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: input => input ? true : 'Please enter a title for your project.'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
    validate: input => input ? true : 'Please enter a description for your project.'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
    default: 'npm install'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'Mozilla Public License 2.0', 'None']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines:',
    default: 'Please feel free to contribute to this project by opening issues or submitting pull requests.'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
    default: 'npm test'
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
    validate: input => input ? true : 'Please enter your GitHub username.'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
    validate: input => /^\S+@\S+\.\S+$/.test(input) ? true : 'Please enter a valid email address.'
  }
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('README.md successfully generated!');
  });
}

function init() {
  console.log('Welcome to the Professional README Generator!');
  console.log('Please answer the following questions to generate your README.md file.');
  
  inquirer.prompt(questions)
    .then(answers => {
      const markdownContent = generateMarkdown(answers);
      writeToFile('README.md', markdownContent);
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
}

init();