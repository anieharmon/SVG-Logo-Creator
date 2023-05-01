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