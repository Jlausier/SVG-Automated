const fs = require("fs");
const inquirer = require("inquirer");

//function to generate the SVG content based on user input
function generateSVG(color, shape, text) {
    let svgContent;
    switch (shape){
        case "circle":
            svgContent = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" style="fill:${color};"/>
            <text x="10" y="50" fill="white">${text}</text>
          </svg>`;
        break;
        case "square":
            svgContent = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" style="fill:${color};"/>
              <text x="10" y="50" fill="white">${text}</text>
            </svg>`;
        break;
         case "triangle":
                svgContent = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="50,0 0,100 100,100" style="fill:${color};"/>
                  <text x="10" y="50" fill="white">${text}</text>
                </svg>`;
         break;
         default:
      svgContent = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" style="fill:${color};"/>
        <text x="10" y="50" fill="white">${text}</text>
      </svg>`;
    }
  return svgContent;
}

//function to save the generated SVG to a file
function saveSVGTofile(svgContent) {
  const filename = "logo.svg";
  fs.writeFile(filename, svgContent, (err) => {
    if (err) throw err;
    console.log(`Logo Saved to ${filename}`);
  });
}

// Prompt user for input
inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter the text for your logo",
    },
    {
      type: "list",
      name: "color",
      message: 'Select a color',
      choices: ["red", "green", "blue", "yellow", "orange", "purple"],
    },
    {
      type: "list",
      name: "shape",
      message: "Select a shape",
      choices: ["circle", "rect", "square", "triangle"],
    },
  ])
  .then((answers) => {
    const { color, shape, text } = answers;
    const svgContent = generateSVG(color, shape, text);
    saveSVGTofile(svgContent);
  });
