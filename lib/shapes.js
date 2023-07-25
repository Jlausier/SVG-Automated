class Shape {
  constructor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  constructor(color, textColor, text) {
    super(color);
    this.textColor = textColor;
    this.text = text;
  }
  generateSVG() {
    const svgContent = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="150" r="100" style="fill:${this.color};"/><text x="10" y="50" text-anchor="middle" font-size="40" fill="${this.textColor}">${this.text}</text></svg>`;
    return svgContent;
  }
}
class Triangle extends Shape {
  constructor(color, textColor, text) {
    super(color);
    this.textColor = textColor;
    this.text = text;
  }
  generateSVG() {
    const svgContent = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,0 0,100 100,100" style="fill:${this.color};"/><text x="10" y="50" text-anchor="middle" font-size="40" fill="${this.textColor}">${this.text}</text></svg>`;
    return svgContent;
  }
}
class Square extends Shape {
  constructor(color, textColor, text) {
    super(color);
    this.textColor = textColor;
    this.text = text;
  }
  generateSVG() {
    const svgContent = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" style="fill:${this.color};"/><text x="10" y="50" fill="${this.textColor}">${this.text}</text></svg>`;
    return svgContent;
  }
}

module.exports = {
  Circle,
  Triangle,
  Square,
};
