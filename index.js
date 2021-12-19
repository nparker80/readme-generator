// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
function promptUser(){
  return inquirer.prompt ([
    {
      type: "input",
      name: "projectName",
      message: "What is the name of your project?",
    },

    {
      type: "input",
      name: "projectDescription",
      message: "Please write a brief description of your project:",
    },
    
    {
      type: "input",
      name: "installationInstructions",
      message: "Describe any items you installed to create the application:",
    },

    {
      type: "input",
      name: "projectUsage",
      message: "What does your application do? (provide a description of how the user interacts with your application):",
    },

    {
      type: "list",
      name: "projectLicense",
      message: "Choose the license you assigned to this project:",
      choices: [
        "MIT",
        "Mozilla",
        "ISC",
        "GNU",
        "The Unlicense",
        "Apache"
      ]
    },

    {
      type: "input",
      name: "projectcContributors",
      message: "Who contributed to this project?",
    },

    {
      type: "input",
      name: "projectTestInstructions",
      message: "Are there test instructions for this project?",
    },

    {
      type: "input",
      name: "projectIssues",
      message: "Who can I contact if I encounter issues with the application?",
    },

    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
    },

    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    }
  ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
