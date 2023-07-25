const { Circle, Triangle, Square} = require('./shapes')

describe('Circle', () => {
    test('generateSVG() should return SVG code for a circle', () => {
        const color = 'red';
        const circle = new Circle(color);
    
        const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
          <circle cx="150" cy="100" r="50" fill="${color}" />
          <text x="150" y="120" text-anchor="middle" font-size="24" fill="white">SVG</text>
        </svg>`;
    
        const actualSVG = circle.generateSVG();
    
        expect(actualSVG).toBe(expectedSVG);
    })
})
describe('Triangle', () => {
    test('generateSVG() should return SVG code for a Triangle', () => {
        const color = 'blue';
        const triangle = new Triangle(color);

        const expectedSVG = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,0 0,100 100,100" style="fill:${color};"/>
        <text x="10" y="50" fill="white">SVG</text>
      </svg>`
      expect(actualSVG).toBe(expectedSVG);
    })
})
describe('Square', () => {
    test('generateSVG() should return SVG code for a Square', () => {
        const color = 'purple';
        const square = new Square(color);
        const expectedSVG = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" style="fill:${color};"/>
        <text x="10" y="50" fill="white">SVG</text>
      </svg>`
      expect(actualSVG).toBe(expectedSVG);
    })
})