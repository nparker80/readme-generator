// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const userQuestions = [
  {
    type: "input",
    name: "name",
    message: "Welcome to the README generator! Please provide your full name:",
  },
  
  {
    type: "input",
    name: "gitHub",
    message: "Enter your GutHub username:",
  },
  
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },

  {
    type: "input",
    name: "projectName",
    message: "What is the title of your project?",
  },

  {
    type: "input",
    name: "projectDescription",
    message: "Please write a brief description of your project:",
  },
    
  {
    type: "input",
    name: "installationInstructions",
    message: "What are the instructions for installation?:",
  },

  {
    type: "input",
    name: "projectUsage",
    message: "What are the instructions for usage?:",
  },
  
  {
    type: "input",
    name: "projectContributing",
    message: "How can other people contribute to your project?",
  },

  {
    type: "input",
    name: "projectTestInstructions",
    message: "Describe the tests written for your app and how to use them:",
  },

  {
    type: "confirm",
    name: "confirmLicenses",
    message: "Would you like to include a license for your project?:",
    default: false
  },

  {
    type: "list",
    name: "projectLicense",
    message: "Which license would you like to include for your project?:",
    choices: [
      "MIT",
      "Mozilla",
      "The Unlicense",
      "Apache"
    ]
  },

  {
    type: "input",
    name: "projectIssues",
    message: "Where can I email questions about the application?",
  },
];

// TODO: Create a function to write README file
const writeToFile = data => {
  returnNewPromise((resolve, reject) => {
    fs.writeFile("./utils/README.md", data, err => {
      if (err) {
        reject (err);
        return;
      }
      resolve({
        ok: true,
        message: console.log("Navigate to the utils folder to see your generated README!")
      });
    })
  })
}

// TODO: Create a function to initialize app
const init = () => {
  return inquirer.prompt(userQuestions);
}

// Function call to initialize app
init ()
.then(userInput => {
  return generateMarkdown(userInput);
})
.then(readmeInfo => {
  return writeToFile(readmeInfo);
})
.catch (err => {
  console.log(err);
})