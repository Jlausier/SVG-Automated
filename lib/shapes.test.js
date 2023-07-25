const { Circle, Triangle, Square } = require("./shapes");

describe("Circle", () => {
  test("generateSVG() should return SVG code for a circle", () => {
    const color = "red";
    const textColor = "white";
    const text = "SVG";
    const circle = new Circle(color, textColor, text);

    const expectedSVG = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="150" r="100" style="fill:red;"/><text x="10" y="50" text-anchor="middle" font-size="24" fill="white">SVG</text></svg>`;

    const actualSVG = circle.generateSVG();

    expect(actualSVG).toBe(expectedSVG);
  });
});
describe("Triangle", () => {
  test("generateSVG() should return SVG code for a Triangle", () => {
    const color = "blue";
    const textColor = "white";
    const text = "SVG";
    const triangle = new Triangle(color, textColor, text);

    const expectedSVG = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"<polygon points="50,0 0,100 100,100" style="fill:blue;"/><text x="10" y="50" fill="white">SVG</text></svg>`;
    const actualSVG = triangle.generateSVG();
    expect(actualSVG).toBe(expectedSVG);
  });
});
describe("Square", () => {
  test("generateSVG() should return SVG code for a Square", () => {
    const color = "purple";
    const textColor = "white";
    const text = "SVG";
    const square = new Square(color, textColor, text);
    const expectedSVG = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" style="fill:purple;"/><text x="10" y="50" fill="white">SVG</text></svg>`
      ;
    const actualSVG = square.generateSVG();
    expect(actualSVG).toBe(expectedSVG);
  });
});
