const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function run() {
  const text = (await inquirer.prompt({ 
    type: 'input', 
    name: 'text', 
    message: 'Enter up to three characters:' 
  })).text;
  const textColour = (await inquirer.prompt({ 
    type: 'input', 
    name: 'textColour', 
    message: 'Enter text colour (keyword or hex):' 
  })).textColour;
  const shapeType = (await inquirer.prompt({ 
    type: 'list', 
    name: 'shapeType', 
    message: 'Select a shape:', 
    choices: ['Triangle', 'Circle', 'Square'] 
  })).shapeType;
  const shapeColour = (await inquirer.prompt({ 
    type: 'input', 
    name: 'shapeColour', 
    message: 'Enter shape colour (keyword or hex):' 
  })).shapeColour;

  let shape;

  switch (shapeType) {
    case 'Triangle':
      shape = new Triangle();
      break;
    case 'Circle':
      shape = new Circle();
      break;
    case 'Square':
      shape = new Square();
      break;
    default:
      console.error('Invalid shape type');
      return;
  }

  shape.setShapeColour(shapeColour);
  shape.setText(text);
  shape.setTextColour(textColour)

  const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shape.render()}</svg>`;
  fs.writeFileSync('logo.svg', svgContent);

  console.log('Generated logo.svg');
}

run();