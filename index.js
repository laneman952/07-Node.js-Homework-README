// TODO: Include packages needed for this application
import fs from "node:fs";
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
  { type: `input`,
   name: `GitHubUsername`,
   message: `What is your GitHub username?`
  }, {
    type: `input`,
    name: `email`,
    message: `What is your email?`
  }, {
    type: `input`,
    name: `projectName`,
    message: `What is your project's name?`
    }, {
    type: `input`,
    name: `description`,
    message: `Please write a short description of your project.`
    }, {
    type: `input`,
    name: `tableOfContents`,
    message: `What is your table of contents?`
    }, { 
    type: `input`,
    name: `installation`,
    message: `What command should be run to install dependencies?`
    }, {
    type: `input`,
    name: `usage`,
    message: `What does the user need to know about using the repo?`
    }, {
    type: `input`,
    name: `license`,
    message: `What kind of license should your project have?`
    }, {
    type: `input`,
    name: `contributing`,
    message: `What does the user need to know about contributing to the repo?`
    }, {
    type: `input`,
    name: `tests`,
    message: `What command should be run to run tests?`
    }, {
    type: `input`,
    name: `questions`,
    message: `What questions do you have?`
    }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(`Success!`);
});
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const response = generateMarkdown(answers);
        console.log(answers);
        writeToFile(`README.md`, response);
    });
}

// Function call to initialize app
init();
