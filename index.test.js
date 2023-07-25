const generateSVG = require(`./index.js`);

test(`generateSvg should return an SVG string`, () => {
  const color = "blue";
  const shape = "circle";
  const text = "Test Logo";
  const svgContent = generateSVG(color, shape, text);

  
  expect(svgContent).toContain("<svg");
  expect(svgContent).toContain(`fill="${color}"`);
  expect(svgContent).toContain(
    `<text x="10" y="50" fill="white">${text}</text>`
  );
});
