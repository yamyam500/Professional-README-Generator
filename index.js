// TODO: Include packages needed for this application
// here we are importing 2 pkgs, inq,fs
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "what is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "what is the description of your project?",
  },
  {
    type: "list",
    name: "license",
    message: "what license is your project under?",
    choices: ["GNU", "MIT", "ISC", "APACHE2.0", "None"],
  },
  {
    type: "input",
    name: "Github",
    message: "what is your Github username",
  },
  {
    type: "input",
    name: "email",
    message: "what is your Email?",
  },

  {
    type: "input",
    name: "test",
    message: "what command to run a test",
  },

  {
    type: "input",
    name: "contribution",
    message: "how should someone contribute to the project",
  },
  {
    type: "input",
    name: "Installation",
    message: "how can someone install your project",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function start() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile("README.md", generateMarkdown({ ...answers }));
  });
}

// Function call to start app
start();
