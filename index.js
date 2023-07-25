const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');

async function generateLogo() {
  try {
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo:',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal number):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hexadecimal number):',
      },
    ]);

    let shape;
    switch (userInput.shape) {
      case 'circle':
        shape = new Circle(userInput.shapeColor);
        break;
      case 'triangle':
        shape = new Triangle(userInput.shapeColor);
        break;
      case 'square':
        shape = new Square(userInput.shapeColor);
        break;
    }

    const svgCode = shape.generateSVG();

    // Save the SVG code to a file named `logo.svg`
    const outputFilePath = path.join(__dirname, 'logo.svg');
    fs.writeFileSync(outputFilePath, svgCode);
    // Write the SVG code to `logo.svg`

    console.log('Generated logo.svg');
  } catch (error) {
    console.error('Error generating logo:', error);
  }
}

generateLogo();




