const inquirer = require("inquirer");

// File system module (node package manager) import
const fs = require("fs");

// Importing classes from ./lib/shapes directory
const { Triangle, Square, Circle } = require("./lib/shapes");



var classObject = {
    color: "pink",
    //shape: {
        circle: `<circle cx="25" cy="75" r="20" stroke="${this.color}" fill="transparent" stroke-width="5"/>`,
        rect: `<rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="${this.color}" fill="transparent" stroke-width="5"/>`
    //}   
}
classObject.color = "pink";

var template = `<?xml version="1.0" standalone="no"?>
<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

  ${classObject.rect}
  
</svg>`

const fs = require('fs');

fs.writeFile('logo.svg', template, err => {
  if (err) {
    console.error(err);
  }
  console.log("File written successfully")
  // file written successfully

});

function promptUser() {
    inquirer
      .prompt([
        // Text prompt
        {
          type: "input",
          message:
            "What text would you like you logo to display? (Enter up to three characters)",
          name: "text",
        },
        // Text color prompt
        {
          type: "input",
          message:
            "Choose text color (Enter color keyword OR a hexadecimal number)",
          name: "textColor",
        },
        // Shape choice prompt
        {
          type: "list",
          message: "What shape would you like the logo to render?",
          choices: ["Triangle", "Square", "Circle"],
          name: "shape",
        },
        // Shape color prompt
        {
          type: "input",
          message:
            "Choose shapes color (Enter color keyword OR a hexadecimal number)",
          name: "shapeBackgroundColor",
        },
      ])}