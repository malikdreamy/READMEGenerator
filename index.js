const fs = require('fs');
const inquirer = require('inquirer');

const createReadme = () => {
  const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide instructions for installation:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide examples of usage:'
    },
    {
      type: 'input',
      name: 'motivations',
      message: 'What were your motivations?'
    },
    {
      type: 'input',
      name: 'license',
      message: 'What license does your project have?'
    }
  ];

  inquirer.prompt(questions).then(answers => {
    const fileContent = `# ${answers.title}

## Description

${answers.description}

## Installation

${answers.installation}

## Usage

${answers.usage}

## Motivations

${answers.motivations}

## License

${answers.license}`;

    const filePath = './README.md';

    fs.appendFile(filePath, fileContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`The file was saved to ${filePath}`);
      }
    });
  });
};

// Call the function to create the README file
createReadme();
