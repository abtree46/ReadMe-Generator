const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
      },
     {
        type: "input",
        name: "description",
        message: "What is your project's description?"
      },
      {
        type: "input",
        name: "contents",
        message: "What is your project's table of contents?"
      },
      {
        type: "input",
        name: "installation",
        message: "Installation process?"
      },
      {
        type: "input",
        name: "usage",
        message: "How is it intened to be used?"
      },
    //   {
    //     type: "input",
    //     name: "license",
    //     message: "Which license?"
    //   },
    {
        type: "input",
        name: "contributors",
        message: "Who/what all contributed?"
      },
      {
        type: "input",
        name: "tests",
        message: "Any tests to be run?"
      },
      {
        type: "input",
        name: "questions",
        message: "Any questions or concerns?"
      },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
