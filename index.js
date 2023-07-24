const fs = require('fs');
const inquirer = require('inquirer');

//function to generate the SVG content based on user input
function generateSVG(color, shape, text){
    const svgContent = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" style="fill:${color};"/>
    <text x="10" y="50" fill="white">${text}</text>
  </svg>`;
  return svgContent;
}

//function to save the generated SVG to a file
function saveSVGTofile(svgContent){
    const filename = "logo.svg";
    fs.write(filename, svgContent, (err) => {
        if (err) throw err;
        console.log(`Logo Saved to ${filename}`);
    });
}

// Prompt user for input
inquirer
.promopt([
    {
        type:
    }
])